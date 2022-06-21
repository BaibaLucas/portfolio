/* Packages imports  */
import React from 'react';

/* Locals imports */

// Componenents

const Burger = ({ open, setOpen }) => {

  const closeMenu = () => {
    setOpen(!open);
    console.log(open);
  };

  return(
    <div
      className='burger'
      onClick={closeMenu}>
      <span className={open ? 'active' : ''} />
      <span className={open ? 'active' : ''} />
      <span className={open ? 'active' : ''} />
    </div>
  )
}

export default Burger;