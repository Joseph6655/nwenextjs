import React from 'react';

const Popular = ({ title, text, jobs }) => {
  return (
    <div className="bg-green-100 py-8">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="font-bold text-3xl">{title}</h2>
          <p className="mt-4 text-gray-600 lg:w-1/2 sm:w-1/4 mx-auto">{text}</p>
        </div>
        <div className="overflow-x-auto">
          <div className="flex gap-6">
            {jobs.map((job, index) => (
              <div key={index} className={`rounded-lg p-4 ml-4 ${index === 0 ? 'bg-green-400' : 'bg-white'}`}>
                <img src={job.image} alt={`Item ${index + 1}`} className="w-12 h-auto mb-4" />
                <h3 className="font-bold text-xl mb-2 w-1/2">{job.title}</h3>
                <p className="text-sm text-gray-600 mt-9">{job.vacancy} Job Vacancy</p>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-8">
          <button className="lg:ml-10 lg:mr-10 bg-green-100 font-bold border border-[#00cc99] text-[#00cc99] px-4 py-2 rounded-md mt-4 mb-10">View More</button>
        </div>
      </div>
    </div>
  );
};

export default Popular;
