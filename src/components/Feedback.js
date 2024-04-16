import React from 'react';

const Feedback = ({ title, text1, text2, text3 }) => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="max-w-md">
          <h2 className="font-bold text-3xl mb-4 w-full whitespace-nowrap overflow-hidden overflow-ellipsis">{title}</h2>
          <p className="text-gray-600 mb-4">{text1}</p>
          <p className="font-bold mb-4">{text2}</p>
          <p className="text-gray-600 mb-4">{text3}</p>
        </div>
        <div className="bg-green-400 rounded-4xl p-8 flex-grow">
          {/* Content of the green card */}
        </div>
      </div>
    </div>
  );
};

export default Feedback;