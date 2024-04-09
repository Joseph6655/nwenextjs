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
              <div className="w-1/4 ml-8">
                <div className="bg-white rounded-lg p-2">
                  <img src="image.jpg" alt="Image" className="w-full h-auto mb-2" />
                  <h5 className="font-bold">Title</h5>
                  <p className="text-sm">Small text</p>
                </div>
              </div>
              <div className="w-1/4">
                <div className="bg-white rounded-lg p-2 sm:p-4">
                  <img src="image.jpg" alt="Image" className="w-full h-auto mb-2" />
                  <h5 className="font-bold">Title</h5>
                  <p className="text-sm">Small text</p>
                </div>
              </div>
              <div className="w-1/4">
                <div className="bg-white rounded-lg p-2 sm:p-4">
                  <img src="image.jpg" alt="Image" className="w-full h-auto mb-2" />
                  <h5 className="font-bold">Title</h5>
                  <p className="text-sm">Small text</p>
                </div>
              </div>
              <div className="w-1/4">
                <div className="bg-white rounded-lg p-2 sm:p-4">
                  <img src="image.jpg" alt="Image" className="w-full h-auto mb-2" />
                  <h5 className="font-bold">Title</h5>
                  <p className="text-sm">Small text</p>
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