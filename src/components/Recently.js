import React from 'react';

const Recently = ({ title, subtitle, jobs }) => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="font-bold text-3xl">{title}</h2>
          <p className="mt-4 text-gray-600 lg:w-1/2 sm:w-1/4 mx-auto">{subtitle}</p>
        </div>
        <div className="overflow-x-auto">
          <div className="flex gap-6">
            {jobs.map((job, index) => (
              <div key={index} className="bg-white rounded-lg p-4">
                <img src={job.image} alt={`Item ${index + 1}`} className="w-12 h-auto mb-4" />
                <h3 className="font-bold text-xl mb-2 ">{job.title}</h3>
                <p className="text-sm text-gray-600 mt-4">{job.company}</p>
                <p className="text-sm text-gray-600 mt-6">{job.description}</p>
                <div className="flex ml-0">
                  <button className="flex items-center bg-gray-200 text-black p-2 m-2 ml-0 rounded-md">
                    <img src="/locationicon.jpg" alt="Location Icon" className="mr-2 mt-1 h-4 w-4" />
                    <span className="truncate">{job.location}</span>
                  </button>
                  <button className="flex items-center bg-gray-200 text-black p-2 m-2 rounded-md">
                    <img src="/bag.png" alt="Location Icon" className="mr-2 mt-1 h-4 w-4" />
                    <span className="truncate">{job.type}</span>
                  </button>
                </div>
                <a href="#" className="block mt-4 text-[#00cc99] font-bold">Apply Now</a>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-8">
          <button className="lg:ml-10 lg:mr-10 bg-gray-100 font-bold border border-[#00cc99] text-[#00cc99] px-4 py-2 rounded-md mt-4 mb-10">View More</button>
        </div>
      </div>
    </div>
  );
};

export default Recently;
