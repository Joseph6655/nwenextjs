import React from 'react';

const AdditionalComponent = () => {
  return (
    <div className="bg-gray-200 py-0">
      <div className="container mx-auto flex justify-center lg:justify-start">
        <div className="flex flex-col lg:flex-row">
          
          <div className="bg-gray-200 w-full lg:w-3/4 mr-0">
            <div className="p-5">
              <div className="ml-10 mt-16 mr-3">
                <h3 className="font-bold text-4xl text-center lg:text-left ml-9">Search, Find, & Apply</h3>
                <p className="mt-4 ml-9 text-center lg:text-left sm:text-sm md:text-base lg:text-lg xl:text-xl" style={{ borderRadius: '10px', paddingRight: '200px' }}>
                  {/* Added text size classes for different screen sizes */}
                  lorem ipsum dolor sit amet, consectetur adipiscing elit, Sed quis lacus non orci euismod vestibulum vitae ut ex, Quisque ut arcu at lectus tristique auctor sit amet at turpis.
                </p>
              </div>
              <div className="bg-white flex items-center mt-10 mb-16 ml-20" style={{ borderRadius: '15px' }}>
                <button className="bg-gray-200 flex text-black p-2 ml-4 mr-4 pr-16" style={{ borderRadius: '10px' }}>
                  <img src="/searchicon.png" alt="Location Icon" className="mr-2 mt-1 h-4 w-4" />
                  Job title or keyword
                </button>
                <button className="flex bg-gray-200 text-black p-2 m-2 pr-16 mr-4" style={{ borderRadius: '10px' }}>
                  <img src="/locationicon.jpg" alt="Location Icon" className="mr-2 mt-1 h-4 w-4" />
                  Location
                </button>
                <button className="bg-green-400 text-white p-2 m-2 pl-10 pr-10 ml-4 " style={{ borderRadius: '10px' }}>Search</button>
              </div>
            </div>
          </div>
          {/* Green background */}
          <div className="bg-green-300 w-full lg:w-1/2" style={{ borderBottomLeftRadius: '55px' }}>
            <div className="p-10">
              <img src="/image1.jpg" alt="Image 1" className="w-full mb-4" />
              <img src="/image2.jpg" alt="Image 2" className="w-full mb-4" />
              <img src="/image3.jpg" alt="Image 3" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalComponent;