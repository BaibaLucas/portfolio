/* Packages import */
import React from 'react';
/* Locals import */
import Hexagrid from '../Hexagrid';


const Home = () => {

  return (
    <>
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
            {/* <div className='portfolio'>
                <div className='title'>
                    <h1>What's this ?</h1>
                </div>
            </div>
            <div className='galery'>
                <div className='title'>
                    <h1>Galery</h1>
                </div>
            </div>
            <div className='contact'>
                <div className='title'>
                    <h1>Contact</h1>
                </div>
                <div className='desc'>
                    Ad deserunt do exercitation minim. Reprehenderit id elit ut aute cillum esse dolore veniam nostrud. Incididunt excepteur commodo laboris aliquip. Nisi aute duis sit do. Quis nulla laborum proident nisi est laborum fugiat amet magna est ullamco irure commodo. Elit nostrud officia fugiat duis commodo commodo ipsum labore tempor mollit velit occaecat esse.
                </div>
                <form>
                    <input name='name' placeholder='Name'/>
                    <input name='email' placeholder='Email'/>
                    <input name='subject' placeholder='Subject'/>
                    <textarea name='message' placeholder='Message'/>
                </form>
            </div> */}
            </div>
        </div>
    </>
  )
}

export default Home;