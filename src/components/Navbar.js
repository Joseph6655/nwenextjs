import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex">
      <div className="bg-gray-100 py-5 px-10 flex items-center w-1/2">
        <div className="flex flex-col">
          <div className="flex items-center">
            <span className="text-black mr-1 font-bold text-3xl ml-10">Job</span>
            <span className="text-green-400 font-bold mr-5 text-3xl">NQW</span>
          
            <ul className="navList flex mt-2">
              <li className="navItem mx-4">
                <Link href="/" className="navLink text-black p-2 font-bold">Home</Link>
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
          <div className="ml-10 mt-16 mr-3">
            <h3 className="font-bold text-4xl">Search, Find, & Apply</h3>
            <p className="mt-4">lorem ipsum dolor sit amet, consectetur adipiscing elit, Sed quis lacus non orci euismod vestibulum vitae ut ex, Quisque ut arcu at lectus tristique auctor sit amet at turpis.</p>
          </div>
          <div className="bg-white flex items-center mt-10 mb-16" style={{ borderRadius: '15px' }}>
            <button className="bg-gray-100 flex text-black p-2 m-2 pr-16" style={{ borderRadius: '10px' }}>
            <img src="/searchicon.png" alt="Location Icon" className="mr-2 mt-1 h-4 w-4"  />
            Job title or keyword
            </button>
            <button className=" flex bg-gray-100 text-black p-2 m-2 pr-16" style={{ borderRadius: '10px' }}>
              <img src="/locationicon.jpg" alt="Location Icon" className="mr-2 mt-1 h-4 w-4"  />
              Location
            </button>
            <button className="bg-green-400 text-white p-2 m-2 pl-10 pr-10" style={{ borderRadius: '10px' }}>Search</button>
          </div>
        </div>
        
      </div>
      <div className="bg-green-400  flex items-start justify-center w-1/2" style={{borderBottomLeftRadius: '20px'}}>
        <div className="text-white flex items-center mt-5">
          <div className="mr-10">Sign In</div>
          <button className="bg-white text-black p-2 font-bold" style={{borderRadius: '10px'}}>Create Account</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;