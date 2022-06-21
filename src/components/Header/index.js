/* Packages import */
import React, {useState} from 'react';

/* Local imports */

import Burger from './Burger/index';

const Header = () => {

    // Burger State
    const [open, setOpen] = useState(false);

  return (
    <div className='header'>
        <div className='container'>
            <div className='left'>
                That's my Header
            </div>
            <div className='right'>
                <Burger open={open} setOpen={setOpen}/>
            </div>
        </div>
      
    </div>
  )
}

export default Header;