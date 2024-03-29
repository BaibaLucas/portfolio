/* Packages import */
import React, { useEffect, useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai';
/* Locals import */
import Hexagrid from '../Hexagrid';
import { technoAnime } from '../../utils';
import pawsclub from '../../assets/images/pawsclub.png';
import dauntingtlk from '../../assets/images/dauntingtlk.png';
import Loader from '../Loader/index';
import github from '../../assets/images/githublogo1.png';
import raven from '../../assets/images/ravenlogo.png';
import { fade } from '../../utils';

const Home = () => {

const [loading, setLoading] = useState(false);

useEffect(() => {
    fade();
}, [loading]);

if (loading === true) {
    technoAnime(0, "#prompt");
};

  return (
    <>
    {!loading && (
        <Loader setLoading={setLoading}/>
    )}
    {loading && (
        <div className='home'>
            <div className='homecontainer'>
            <div className='presentation'>
            <Hexagrid />
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
                    <a href="#work_section">
                        <div className='button'>
                            View my work
                        </div>
                    </a>
                </div>
                <div className="arrow"></div>
            </div>
            <div className='content'>
            <div className='portfolio section fadeOut' id='about_section'>
                <div className='title'>
                    <h1>About me</h1>
                </div>
                <div className='desc'>
                    Hello, my name is Lucas and i'm a full-stack web developer. I started web development in 2021. Here is my portfolio, you can find some information about me and my different web projects.
                </div>
                <div className='technoanimation'>
                    <div className="prompt-wrapper">
                        <div id="prompt" className="typing">Hello</div>
                    </div>
                </div>
            </div>
            <div className='galery section fadeOut' id='work_section'>
                <div className='title'>
                    <h1>Featured projects</h1>
                </div>
                <div className='container'>
                    <div className='card'>
                        <img className='card__image' src={pawsclub} alt="pawsclub"></img>
                        <div className='card__title'>PawsClub</div>
                        <div className='card__desc'>Web platform gathering various information about the PawsClub multi-gaming. Display of the latest news with user and admin dashboard.</div>
                        <div className='card__techno'>
                            <div>React</div>
                            <div>Redux</div>
                            <div>JwT</div>
                            <div>Node Js</div>
                            <div>Express</div>
                            <div>AWS</div>
                            <div>Nginx</div>
                        </div>
                        <div className='card__link'>
                        <a href="https://github.com/BaibaLucas/PawsClub" target="_blank" rel="noreferrer">
                        <img src={github} alt="github link"></img> 
                        </a>
                        <a href="https://pawsclub.fr/" target="_blank" rel="noreferrer">
                        <FaExternalLinkAlt size={30}/>
                        </a>
                        </div>
                    </div>
                    <div className='card'>
                        <img className='card__image' src={dauntingtlk} alt="Daunting"></img>
                        <div className='card__title'>Daunting</div>
                        <div className='card__desc'>Web platform gathering various information about the Daunting gaming community. Display of the latest news.</div>
                        <div className='card__techno'>
                            <div>React</div>
                            <div>AWS</div>
                            <div>Nginx</div>
                            <div>Sass</div>
                        </div>
                        <div className='card__link'>
                        <a href="https://github.com/BaibaLucas/Daunting" target="_blank" rel="noreferrer">
                        <img src={github} alt="github link"></img> 
                        </a>
                        <a href="https://daunting.fr/" target="_blank" rel="noreferrer">
                        <FaExternalLinkAlt size={30}/>
                        </a>
                        </div>
                    </div>
                    <div className='card'>
                        <img className='card__image' src={raven} alt="ravenlogo"></img>
                        <div className='card__title'>Raven's kill</div>
                        <div className='card__desc'>Shooting games in javascript, the objective is to kill crows in order to earn as many points as possible.</div>
                        <div className='card__techno'>
                            <div>JavaScript</div>
                            <div>Sass</div>
                        </div>
                        <div className='card__link'>
                        <a href="https://github.com/BaibaLucas/shooter-game" target="_blank" rel="noreferrer">
                        <img src={github} alt="github link"></img> 
                        </a>
                        <a href="/game" target="_blank" rel="noreferrer">
                        <FaExternalLinkAlt size={30}/>
                        </a>
                        </div>
                    </div> 
                </div>

            </div>
            <div className='contact section fadeOut' id='contact_section'>
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
            <div className='footer'>
                <div className='network'>
                    <div className='git'>
                        <a href="https://github.com/BaibaLucas" target="_blank" rel="noreferrer">
                        <AiOutlineGithub size={35} color={'white'}/>
                        </a>
                    </div>
                    <div className='linkedin'>
                        <a href='https://www.linkedin.com/in/lucas-baiba/' target="_blank"
                        rel="noreferrer">
                        <AiOutlineLinkedin size={35} color={'white'}/>
                        </a>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )}
    </>
  )
}

export default Home;