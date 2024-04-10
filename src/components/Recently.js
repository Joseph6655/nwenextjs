import React from 'react';

const Popular = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="font-bold text-3xl">Recently Added Jobs</h2>
          <p className="mt-4 text-gray-600 lg:w-1/2 sm:w-1/4 mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, Sed quis lacus non orci euismod vestibulum vitae ut ex, Quisque ut arcu at lectus tristique auctor sit amet at turpis.</p>
        </div>
        <div className="overflow-x-auto">
          <div className="flex gap-6">
            <div className="bg-white rounded-lg p-4">
              <img src="Rone.png" alt="Item 1" className="w-12 h-auto mb-4" />
              <h3 className="font-bold text-xl mb-2 w-1/2">UI/UX Designer</h3>
              <p className="text-sm text-gray-600 mt-4">Dimension Studio</p>
              <p className="text-sm text-gray-600 mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, Sed quis lacus non orci euismod vestibulum vitae ut ex, Quisque ut arcu at lectus tristique auctor sit amet at turpis.</p>
              <div className='flex item-center'>
              <button className="flex bg-gray-200 text-black p-2 m-2  sm:pr-16 mr-2 sm:mr-4" style={{ borderRadius: '10px' }}>
                    <img src="/locationicon.jpg" alt="Location Icon" className="mr-2 mt-1 h-4 w-4" />
                    San Fransisco,CA
                  </button>
                  <button className="flex bg-gray-200 text-black p-2 m-2 pr-0 sm:pr-16 mr-2 sm:mr-4" style={{ borderRadius: '10px' }}>
                    <img src="/bag.png" alt="Location Icon" className="mr-2 mt-1 h-4 w-4" />
                    Full Time
                  </button>
                  </div>
            </div>
            <div className="bg-white rounded-lg p-4">
              <img src="Rtwo.png" alt="Item 2" className="w-12 h-auto mb-4" />
              <h3 className="font-bold text-xl mb-2 ">Full Stack Developer</h3>
              <p className="text-sm text-gray-600 mt-4">Alpander</p>
              <p className="text-sm text-gray-600 mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, Sed quis lacus non orci euismod vestibulum vitae ut ex, Quisque ut arcu at lectus tristique auctor sit amet at turpis.</p>
              <button className="flex bg-gray-200 text-black p-2 m-2 pr-0 sm:pr-16 mr-2 sm:mr-4" style={{ borderRadius: '10px' }}>
                    <img src="/locationicon.jpg" alt="Location Icon" className="mr-2 mt-1 h-4 w-4" />
                    San Fransisco,CA
                  </button>
                  <button className="flex bg-gray-200 text-black p-2 m-2 pr-0 sm:pr-16 mr-2 sm:mr-4" style={{ borderRadius: '10px' }}>
                    <img src="/bag.png" alt="Location Icon" className="mr-2 mt-1 h-4 w-4" />
                    Full Time
                  </button>
            </div>

            <div className="bg-white rounded-lg p-4">
              <img src="Rthree.png" alt="Item 3" className="w-12 h-auto mb-4" />
              <h3 className="font-bold text-xl mb-2 w-1/2">Product Designer</h3>
              <p className="text-sm text-gray-600 mt-4">XReact Tech</p>
              <p className="text-sm text-gray-600 mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, Sed quis lacus non orci euismod vestibulum vitae ut ex, Quisque ut arcu at lectus tristique auctor sit amet at turpis.</p>
              <button className="flex bg-gray-200 text-black p-2 m-2  sm:pr-16 mr-2 sm:mr-4" style={{ borderRadius: '10px' }}>
                    <img src="/locationicon.jpg" alt="Location Icon" className="mr-2 mt-1 h-4 w-4" />
                    San Fransisco,CA
                  </button>
                  <button className="flex bg-gray-200 text-black p-2 m-2 pr-0 sm:pr-16 mr-2 sm:mr-4" style={{ borderRadius: '10px' }}>
                    <img src="/bag.png" alt="Location Icon" className="mr-2 mt-1 h-4 w-4" />
                    Full Time
                  </button>

            </div>
          
          </div>
        </div>
        
        <div className="text-center mt-8">
          <button className="lg:ml-10 lg:mr-10 bg-gray-100 font-bold border border-green-400 text-green-400 px-4 py-2 rounded-md mt-4 mb-10">View More</button>
        </div>
      </div>
    </div>
  );
};

export default Popular;