import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="relative">
      <div className={`bg-gray-200 py-0 lg:bg-none ${showMenu ? 'block' : 'hidden'}`}>
        <ul className="lg:hidden absolute top-full left-0 bg-gray-200 w-full rounded z-20">
          <li className="navItem mx-4">
            <Link href="/" className="navLink text-black p-2 font-bold ml-4">Home</Link>
          </li>
          <li className="navItem mx-4">
            <Link href="/about" className="navLink text-black p-2 font-bold ml-4">Job</Link>
          </li>
          <li className="navItem mx-4">
            <Link href="/about" className="navLink text-black p-2 font-bold ml-4">AboutUs</Link>
          </li>
          <li className="navItem mx-4">
            <Link href="/contact" className="navLink text-black p-2 font-bold ml-4">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="bg-gray-200 py-0 lg:bg-gray-200">
        <div className="nav-content container mx-auto">
          <div className="flex">
            <div className="py-5 px-10 w-full lg:w-3/4 flex items-center">
              <div className="flex items-center">
                <span className="text-black font-bold text-3xl " style={{ marginLeft :'55px' }}>Job</span>
                <span className="text-green-400 font-bold text-3xl">NQW</span>
              </div>
              <ul className="lg:flex hidden ml-16">
                <li className="navItem ml-2">
                  <Link href="/" className="navLink text-black p-2 font-bold ml-2">Home</Link>
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
              <button onClick={toggleMenu} className="lg:hidden focus:outline-none" style={{ marginLeft: '200px' }}>
                <svg className={`h-6 w-6 fill-current ${showMenu ? 'text-white' : 'text-white'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  {showMenu ? (
                    <path d="M19 13H5v-2h14v2zm0-5H5V6h14v2zm0 10H5v-2h14v2z" />
                  ) : (
                    <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
                  )}
                </svg>
              </button>
            </div>
            {/* Right section with green background */}
            <div className="hidden lg:block bg-green-300 py-5 px-10 w-full lg:w-1/2 ml-2 flex items-center justify-end">
              <div className="flex items-center justify-end">
                <div className="mr-10 text-white">Sign In</div>
                <button className="flex bg-white text-black p-2 font-bold mr-20" style={{ borderRadius: '10px' }}>
                  <img src="/arrowicon.jpg" alt="Location Icon" className="ml-3 mr-2 mt-1 h-3 w-3" />
                  Create Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;