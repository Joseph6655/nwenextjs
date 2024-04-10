import React from 'react';

const HelpComponent = () => {
  return (
    <div className="bg-gray-100 py-0">
      <div className="container mx-auto flex justify-center mt-24 mb-8">
        <div className="flex flex-col lg:flex-row">
          <div className="ml-6 sm:ml-16 lg:ml-20 bg-gray-400 rounded-lg p-10 sm:p-24 mr-4 lg:mr-8 lg:w-2/3 lg:h-90 "></div> 
          <div className="mt-8">
            
            <h4 className="font-bold text-3xl mb-4 lg:ml-10 lg:mr-10 sm:ml-4 sm:mr-4">We will help you to become an employee in your dream company</h4>   
            <p className="text-gray-600 mb-4 lg:ml-10 lg:mr-10 sm:ml-4 sm:mr-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, Sed quis lacus non orci euismod vestibulum vitae ut ex, Quisque ut arcu at lectus tristique auctor sit amet at turpis.</p>
            <button className="lg:ml-10 lg:mr-10 bg-gray-100 font-bold border border-green-400 text-green-400 px-4 py-2 rounded-md mt-4">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpComponent;