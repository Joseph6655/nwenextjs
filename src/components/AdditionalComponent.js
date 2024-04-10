import React from 'react';

const AdditionalComponent = () => {
  return (
    <div className="bg-gray-200 py-0">
      <div className="container mx-auto flex justify-center">
        <div className="flex flex-col lg:flex-row">
          
          <div className="bg-gray-200 w-full lg:w-3/4 mr-0">
            <div className="p-5">
              <div className="ml-10 sm:ml-14 mt-16 mr-3"> 
                <h3 className="font-bold text-4xl ml-5 text-center lg:text-left sm:px-8 lg:px-0">Search, Find, & Apply</h3>
                <p className="mt-4 ml-5 text-center lg:text-left sm:text-sm md:text-base lg:text-lg xl:text-xl lg:pr-24 sm:px-8 lg:px-0">lorem ipsum dolor sit amet, consectetur adipiscing elit, Sed quis lacus non orci euismod vestibulum vitae ut ex, Quisque ut arcu at lectus tristique auctor sit amet at turpis.</p>
              </div>
              <div className="relative mt-6 mb-6 ml-10 sm:ml-20">
                <div className="bg-white flex items-center" style={{ borderRadius: '15px' }}>
                  <button className="bg-gray-200 flex text-black p-2 ml-2 mr-2 sm:mr-4 pr-10 sm:pr-16 whitespace-nowrap" style={{ borderRadius: '10px' }}>
                    <img src="/searchicon.png" alt="Location Icon" className="mr-2 mt-1 h-4 w-4" />
                    Job title or keyword
                  </button>
                  <button className="flex bg-gray-200 text-black p-2 m-2 pr-10 sm:pr-16 mr-2 sm:mr-4" style={{ borderRadius: '10px' }}>
                    <img src="/locationicon.jpg" alt="Location Icon" className="mr-2 mt-1 h-4 w-4" />
                    Location
                  </button>
                  <button className="bg-green-400 text-white p-2 m-2 pl-8 pr-8 ml-2 sm:ml-4" style={{ borderRadius: '10px' }}>Search</button>
                </div>
                <div className="absolute bg-white inset-0 opacity-0 " style={{ borderRadius: '15px' }}></div>
              </div>
            </div>
          </div>
          {/* Green background */}
          <div className="bg-green-300 w-full lg:w-1/2" style={{ borderBottomLeftRadius: '55px' }}>
            <div className="p-10 flex flex-col h-full">
              <img src="/first.png" alt="Image 1" className="w-16  h-16 ml-10 mb-2 sm:mb-4" />
              <div className="flex justify-end">
                <img src="/second.png" alt="Image 2" className="w-16 h-16 ml-8 mb-2 sm:mb-4" />
              </div>
              <img src="/third.png" alt="Image 3" className="w-16 h-16" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalComponent;