/* Packages import */
import React, { useEffect, useState } from 'react';
/* Locals import */
import Hexagrid from '../Hexagrid';
import { technoAnime } from '../../utils';
import pawsclub from '../../assets/images/pawsclub.png';
import Loader from '../Loader/index';

const Home = () => {

useEffect(() => {
    technoAnime(0, "#prompt")
}, []);

const [loading, setLoading] = useState(false);

  return (
    <>
    {!loading && (
        <Loader setLoading={setLoading}/>
    )}
    {loading && (
        <div className='home'>
            <div className='container'>
            <Hexagrid />
            <div className='presentation'>
                <div className='whois'>
                    <div className='sub'>
                        Hi, my name is
                    </div>
                    <div className='title'>
                    Lucas.
                    </div>
                    <div className='whatis'>
                    I'm a full-stack <br></br> web developer.
                    </div>
                    <div className='button'>
                    View my work
                </div>
                </div>
            </div>
            <div className='portfolio'>
                <div className='title'>
                    <h1>About me</h1>
                </div>
                <div className='desc'>
                    Hello, my name is Lucas and i'm a full-stack web developer. I started web development in 2021. Here is my portfolio, you can find some information about me and my different web projects.
                </div>
                <div className='technoanimation'>
                <div className="prompt-wrapper"><div id="prompt" className="typing">Hello</div></div>
                </div>
            </div>
            <div className='galery'>
                <div className='title'>
                    <h1>Featured projects</h1>
                </div>
                <div className='container'>
                    <div className='card'>
                        <img className='card__image' src={pawsclub} alt="pawsclub"></img>
                        <div className='card__title'>PawsClub</div>
                        <div className='card__desc'>Web platform gathering various information about the PawsClub multi-gaming. Display of the latest news, a user and admin dashboard.</div>
                        <div className='card__techno'>
                            <div>React</div>
                            <div>Redux</div>
                            <div>JwT</div>
                            <div>Node Js</div>
                            <div>Express</div>
                            <div>AWS</div>
                            <div>Nginx</div>
                        </div>
                        <div className='card__link'>Github repository</div>
                    </div>      
                </div>

            </div>
            <div className='contact'>
                <div className='title'>
                    <h1>Contact</h1>
                </div>
                <div className='desc'>
                    Currently looking for new opportunities, my inbox is open. If you need information do not hesitate, I will do my best to answer you.
                </div>
                <a className="mailto" href="mailto:baiba.lucas@gmail.com">
                <button> Send Mail ! </button>
                </a>
            </div>
            </div>
        </div>
    )}
    </>
  )
}

export default Home;