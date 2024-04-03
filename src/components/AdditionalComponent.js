import React from 'react';

const AdditionalComponent = () => {
  return (
    <div className="bg-gray-200 py-0 max-w-[1350px]">
      <div className="container mx-auto flex max-w-[1350px]">
        
        <div className="bg-gray-200 w-3/4 p-10 ">
        <div className="ml-10 mt-16 mr-3">
            <h3 className="font-bold text-4xl ml-9">Search, Find, & Apply</h3>
            <p className="mt-4 ml-9">lorem ipsum dolor sit amet, consectetur adipiscing elit, Sed quis lacus non orci euismod vestibulum vitae ut ex, Quisque ut arcu at lectus tristique auctor sit amet at turpis.</p>
          </div>
          <div className="bg-white flex items-center mt-10 mb-16 ml-16" style={{ borderRadius: '15px' }}>
            <button className="bg-gray-200 flex text-black p-2 m-2 pr-16" style={{ borderRadius: '10px' }}>
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
       
        <div className="bg-green-300 w-1/2 p-10">
          <img src="/image1.jpg" alt="Image 1" className="w-full mb-4" />
          <img src="/image2.jpg" alt="Image 2" className="w-full mb-4" />
          <img src="/image3.jpg" alt="Image 3" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default AdditionalComponent;
