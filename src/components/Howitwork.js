import React from 'react';

const Howitwork = () => {
  return (
    <div className="bg-gray-100 py-0">
      <div className="container mx-auto flex justify-center">
        <div className="flex flex-col lg:flex-row">
          <div className="mt-8 ml-10 sm:ml-14">
            <h4 className="font-bold ml-9 text-3xl mb-2">How it works</h4>
            <div className="flex justify-between">
              <p className="w-3/4 ml-9 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, Sed quis lacus non orci euismod vestibulum vitae ut ex, Quisque ut arcu at lectus tristique auctor sit amet at turpis.</p>
              <button className="mr-16 bg-gray-50 font-bold border border-green-400 text-green-400 py-2 px-4 rounded-md">Learn More</button>
            </div>
            <div className="flex justify-between mt-4">
              <div className="w-1/4 ml-5">
                <div className="bg-white rounded-lg p-4">
                  <img src="reg.png" alt="Image" className="w-12 h-12 mb-3" />
                  <h5 className="font-bold text-xl mb-3 ">Register</h5>
                  <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, Sed quis lacus non orci euismod vestibulum vitae ut ex</p>
                </div>
              </div>
              <div className="w-1/4 ml-5">
                <div className="bg-white rounded-lg p-4">
                  <img src="cre.png" alt="Image" className="w-12 h-12 mb-3" />
                  <h5 className="font-bold text-xl  mb-3 ">Create a Resume</h5>
                  <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, Sed quis lacus non orci euismod vestibulum vitae ut ex</p>
                </div>
              </div>
              <div className="w-1/4 ml-5">
                <div className="bg-white rounded-lg p-4">
                  <img src="find.png" alt="Image" className="w-12 h-12 mb-3 " />
                  <h5 className="font-bold text-xl  mb-3 ">Find Job</h5>
                  <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, Sed quis lacus non orci euismod vestibulum vitae ut ex</p>
                </div>
              </div>
              <div className="w-1/4 ml-5">
                <div className="bg-white rounded-lg p-4">
                  <img src="apply.png" alt="Image" className="w-12 h-12 mb-3" />
                  <h5 className="font-bold text-xl  mb-3 ">Apply Job</h5>
                  <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, Sed quis lacus non orci euismod vestibulum vitae ut ex</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Howitwork;