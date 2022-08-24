/* Packages import */
import React, { useEffect } from 'react';
/* Locals import */
import ravenImg from './raven.png';
import boomImg from './boom.png';
import boomSound from './boom.wav';
import gameOverSound from './game_over.mp3';

const Game = () => {

    useEffect(() => {
        // Ravens canvas
        const canvas = document.getElementById('canvas1');
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        // Collision canvas
        const collisionCanvas = document.getElementById('collisionCanvas');
        const collisionCtx = collisionCanvas.getContext('2d');
        collisionCanvas.width = window.innerWidth;
        collisionCanvas.height = window.innerHeight;

        // Fonts
        ctx.font = '50px Impact';
        // Score
        let score = 0;
        // Game over
        let gameOver = false;

        // Ravens pop base
        let timeToNextRaven = 0;
        let ravenInterval = 500;
        let lastTime = 0;

        let ravens = [];

        class Raven {
            constructor(){
                this.spriteWidth = 271;
                this.spriteHeight = 194;
                this.sizeModifier = Math.random() * 0.6 + 0.4;
                this.width = this.spriteWidth * this.sizeModifier;
                this.height = this.spriteHeight * this.sizeModifier;
                this.x = canvas.width;
                this.y = Math.random() * (canvas.height - this.height);
                this.directionX = Math.random() * 5 + 3;
                this.directionY = Math.random() * 5 - 2.5;
                this.markedForDeletion = false;
                this.image = new Image();
                this.image.src = ravenImg;
                this.frame = 0;
                this.maxFrame = 4;
                this.timeSinceFlap = 0;
                this.flapInterval = Math.random() * 50 + 50;
                this.randomColors = [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)];
                this.color = 'rgb(' + this.randomColors[0] + ',' + this.randomColors[1] + ',' + this.randomColors[2] + ')';
            }

            update(deltatime){
                // If raven touch top or bottom border, bounce opposite
                if (this.y < 0 || this.y > canvas.height - this.height){
                    this.directionY = this.directionY * -1;
                }
                this.x -= this.directionX;
                this.y -= this.directionY;
                if (this.x < 0 - this.width) this.markedForDeletion = true;
                this.timeSinceFlap += deltatime;
                if (this.timeSinceFlap > this.flapInterval){
                    if (this.frame > this.maxFrame) this.frame = 0;
                    else this.frame++;
                    this.timeSinceFlap = 0;
                }
                if (this.x < 0 - this.width) gameOver = true;
            }

            draw(){
                collisionCtx.fillStyle = this.color;
                collisionCtx.fillRect(this.x, this.y, this.width, this.height);
                ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
            }
        }

        // Explosions on Click;
        let explosions = [];
        class Explosion {
            constructor(x, y, size) {
                this.image = new Image();
                this.image.src = boomImg;
                this.spriteWidth = 200;
                this.spriteHeight = 179;
                this.size = size;
                this.x = x;
                this.y = y;
                this.frame = 0;
                this.sound = new Audio();
                this.sound.src = boomSound;
                this.timeSinceLastFrame = 0;
                this.frameInterval = 200;
                this.markedForDeletion = false;
            }
            update(deltatime){
                if (this.frame === 0) this.sound.play();
                this.timeSinceLastFrame += deltatime;
                if (this.timeSinceLastFrame > this.frameInterval){
                    this.frame++;
                    this.timeSinceLastFrame = 0;
                    if (this.frame > 5) this.markedForDeletion = true;
                }
            }
            draw(){
                ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y - this.size/4, this.size, this.size);
            }
        }

        // Display Score
        function drawScore(){
            ctx.fillStyle = 'black';
            ctx.fillText('Score: ' + score, 70, 130);
            ctx.fillStyle = 'white';
            ctx.fillText('Score: ' + score, 75, 135);
        }

        // loose function : play sound + onClick refresh page for retry
        function drawGameOver(){
            let audioEnd = new Audio(gameOverSound);
            audioEnd.play();
            ctx.textAlign = 'center';
            ctx.fillStyle = 'black';
            ctx.fillText('Your score is ' + score, canvas.width/2, canvas.height/2);
            ctx.fillStyle = 'white';
            ctx.fillText('Your score is ' + score, canvas.width/2 + 5, canvas.height/2 + 5);
            ctx.textAlign = 'center';
            ctx.fillStyle = 'black';
            ctx.fillText('Click for retry ', canvas.width/2, canvas.height/1.5);
            ctx.fillStyle = 'white';
            ctx.fillText('Click for retry ', canvas.width/2 + 5, canvas.height/1.5 + 5);
            onclick = () => {
                window.location.reload();
            }
        }

        // kill ravens (If background color = Raven color then kill.)
        window.addEventListener('click', function(e) {
            const detectPixelColor = collisionCtx.getImageData(e.x, e.y, 1, 1);
            const pc = detectPixelColor.data;
            ravens.forEach(object => {
                if (object.randomColors[0] === pc[0] && object.randomColors[1] === pc[1] && object.randomColors[2] === pc[2]){
                    // collision detected
                    object.markedForDeletion = true;
                    score++;
                    explosions.push(new Explosion(object.x, object.y, object.width));
                };
            });
        });

        // Launching game
        function animate(timestamp) {
            ctx.clearRect(0,0, canvas.width, canvas.height);
            collisionCtx.clearRect(0,0, canvas.width, canvas.height);
            let deltatime = timestamp - lastTime;
            lastTime = timestamp;
            timeToNextRaven += deltatime;
            if(timeToNextRaven > ravenInterval) {
                ravens.push(new Raven());
                timeToNextRaven = 0;
                ravens.sort(function(a,b){
                    return a.width - b.width;
                });
            }
            drawScore();
            [...ravens, ...explosions].forEach(object => object.update(deltatime));
            [...ravens, ...explosions].forEach(object => object.draw());
            ravens = ravens.filter(object => !object.markedForDeletion);
            explosions = explosions.filter(object => !object.markedForDeletion);
            if (!gameOver) requestAnimationFrame(animate);
            else drawGameOver();
        }
    animate(0);
    },[]);


    return (
        <>
            <div className='game'>
                <div className='gameContainer'>
                    <canvas id="collisionCanvas"></canvas>
                    <canvas id="canvas1"></canvas> 
                </div>
            </div>
        </>
    )
}


export default Game;