import React from 'react';

const Howitwork = () => {
  return (
    <div className="bg-gray-100 py-0 lg:mt-8">
      <div className="container mx-auto flex justify-center">
        <div className="flex flex-col lg:flex-row">
          <div className="mt-8 ml-10 sm:ml-14">
            <h4 className="font-bold ml-9 text-3xl mb-4">How it works</h4>
            <div className="flex justify-between">
              <div className="w-full sm:w-2/4 ml-9 text-gray-600 lg:pr-8 lg:mb-8">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, Sed quis lacus non orci euismod vestibulum vitae ut ex, Quisque ut arcu at lectus tristique auctor sit amet at turpis.
                </p>
              </div>
              {/* Button container for large screens */}
              <div className="hidden lg:flex justify-end items-center mr-10">
                <button className="bg-gray-100 font-bold border border-green-400 text-green-400 px-4 py-2 rounded-md">Learn More</button>
              </div>
            </div>
            
            <div className="ml-8 grid grid-cols-2 lg:grid-cols-4 gap-5 mt-4 mb-5">
              {/* Card elements */}
            </div>
            
            {/* Button container for small screens */}
            <div className="lg:hidden flex justify-center">
              <button className="bg-gray-100 font-bold border border-green-400 text-green-400 px-4 py-2 rounded-md mt-4">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Howitwork;