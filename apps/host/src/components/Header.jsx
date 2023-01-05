import React from 'react';
import reactLogo from '../assets/react.png';

const Header = () => (
  <header className="flex items-center justify-between px-4 py-2 shadow-md">
    <p className="text-xl text-gray-900 sm:text-4xl">Host App in React</p>
    <img src={reactLogo} alt="react" className="h-16 sm:h-20" />
  </header>
);

export default Header;
