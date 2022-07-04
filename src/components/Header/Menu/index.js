/* Packages import */
import React from 'react';

/* Local imports */


const Menu = ({ open, setOpen}) => {

    const close = () => {
        setOpen(!open);
      };

    return (
        <div className={open ? 'menu active' : 'menu'}>
            <div className='background'></div>
            <nav className='navigation'>
                <ul className='list'>
                    <a href='#about_section' onClick={close}>
                    <li className='item'>About</li>
                    </a>
                    <a href='#work_section'>
                    <li className='item' onClick={close}>Work</li>
                    </a>
                    <a href='#contact_section'>
                    <li className='item' onClick={close}>Contact</li>
                    </a>
                </ul>
            </nav>
        </div>
    )
};

export default Menu;