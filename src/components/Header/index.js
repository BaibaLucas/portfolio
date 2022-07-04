/* Packages import */
import React, {useState} from 'react';

/* Local imports */

import Burger from './Burger/index';
import Menu from './Menu/index';

const Header = () => {

    // Burger State
    const [open, setOpen] = useState(false);

    if (open) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
 
  return (
    <div className='header'>
        <div className='container'>
            <a className='left' href='/'>
                L
            </a>
            <div className='right'>
                <Burger open={open} setOpen={setOpen}/>
                <Menu open={open} setOpen={setOpen}/>
            </div>
        </div>
      
    </div>
  )
}

export default Header;