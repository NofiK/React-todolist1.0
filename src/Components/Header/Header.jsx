import React from 'react';
import Logo from './Logo';
import CurrentDate from './CurrentDate';
const Header = () => {
  return (
    <div className='headerComp'>
     <Logo />
     <CurrentDate />
    </div>
  )
}

export default Header