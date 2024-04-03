import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="flex relative overflow-hidden justify-center">
      <div className="bg-gray-200 py-5 px-10 flex items-center w-full relative z-10">
        <div className="container mx-auto">
          <div className="flex items-center">
            <div className="flex items-center">
              <span className="text-black font-bold text-3xl ml-16">Job</span>
              <span className="text-green-400 font-bold mr-5 text-3xl">NQW</span>
            </div>
            <div className="lg:hidden">
              <button onClick={toggleMenu} className="focus:outline-none">
                <svg className={`h-6 w-6 fill-current ${showMenu ? 'text-white' : 'text-green-400'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  {showMenu ? (
                    <path d="M19 13H5v-2h14v2zm0-5H5V6h14v2zm0 10H5v-2h14v2z" />
                  ) : (
                    <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
                  )}
                </svg>
              </button>
            </div>
            <ul className={`lg:flex hidden ${showMenu ? 'flex bg-gray-200 w-full mt-2 py-2 rounded' : 'hidden'}`}>
              <li className="navItem mx-4">
                <Link href="/" className="navLink text-black p-2 font-bold ml-10">Home</Link>
              </li>
              <li className="navItem mx-4">
                <Link href="/about" className="navLink text-black p-2 font-bold">Job</Link>
              </li>
              <li className="navItem mx-4">
                <Link href="/about" className="navLink text-black p-2 font-bold">AboutUs</Link>
              </li>
              <li className="navItem mx-4">
                <Link href="/contact" className="navLink text-black p-2 font-bold">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className={`lg:block hidden bg-green-300 py-5 px-10 flex items-center w-full relative z-10 ${showMenu ? '' : 'hidden'}`}>
        <div className="container mx-auto">
          <div className="flex items-center justify-end">
            <div className="mr-10 text-white">Sign In</div>
            <button className="flex bg-white text-black p-2 font-bold" style={{borderRadius: '10px'}}>
              <img src="/arrowicon.jpg" alt="Location Icon" className="ml-3 mr-2 mt-1 h-3 w-3"  />
              Create Account
            </button>
          </div>
        </div>
      </div>
      <div className="lg:hidden bg-green-300 py-5 px-10 flex items-center w-full absolute inset-0 z-0 animate-bg">
        <ul className={`flex flex-col ${showMenu ? 'text-white' : 'hidden'}`}>
          <li className="py-2 px-4">
            <Link href="/" className="navLink">Home</Link>
          </li>
          <li className="py-2 px-4">
            <Link href="/about" className="navLink">Job</Link>
          </li>
          <li className="py-2 px-4">
            <Link href="/about" className="navLink">AboutUs</Link>
          </li>
          <li className="py-2 px-4">
            <Link href="/contact" className="navLink">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;