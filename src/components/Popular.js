import React from 'react';

const Popular = () => {
  return (
    <div className="bg-green-100 py-8">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="font-bold text-3xl">Popular Job Categories</h2>
          <p className="mt-4 text-gray-600 lg:w-1/2 sm:w-1/4 mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, Sed quis lacus non orci euismod vestibulum vitae ut ex, Quisque ut arcu at lectus tristique auctor sit amet at turpis.</p>
        </div>
        <div className="overflow-x-auto">
          <div className="flex gap-6">
            <div className="bg-green-500 rounded-lg p-4">
              <img src="pfirst.png" alt="Item 1" className="w-12 h-auto mb-4" />
              <h3 className="font-bold text-xl mb-2 w-1/2">Design and Development</h3>
              <p className="text-sm text-gray-600 mt-9">350 Job Vacancy</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <img src="pone.png" alt="Item 2" className="w-12 h-auto mb-4" />
              <h3 className="font-bold text-xl mb-2 w-1/2">Accounting and Finance</h3>
              <p className="text-sm text-gray-600 mt-9">350 Job Vacancy</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <img src="ptwo.png" alt="Item 3" className="w-12 h-auto mb-4" />
              <h3 className="font-bold text-xl mb-2 w-1/2">Bank Institution</h3>
              <p className="text-sm text-gray-600 mt-9">350 Job Vacancy</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <img src="pthree.png" alt="Item 4" className="w-12 h-auto mb-4" />
              <h3 className="font-bold text-xl mb-2 w-1/2">Product Management</h3>
              <p className="text-sm text-gray-600 mt-9">350 Job Vacancy</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <img src="pthree.png" alt="Item 4" className="w-12 h-auto mb-4" />
              <h3 className="font-bold text-xl mb-2 w-1/2">Product Management</h3>
              <p className="text-sm text-gray-600 mt-9">350 Job Vacancy</p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <button className="lg:ml-10 lg:mr-10 bg-green-100 font-bold border border-green-400 text-green-400 px-4 py-2 rounded-md mt-4 mb-10">View More</button>
        </div>
      </div>
    </div>
  );
};

export default Popular;