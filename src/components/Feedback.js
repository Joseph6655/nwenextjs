import React, { useState } from 'react';

const Feedback = ({ title, text1, text2, secondaryTitle, secondaryTexts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle click on the left arrow
  const handleLeftArrowClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? secondaryTexts.length - 1 : prevIndex - 1));
  };

  // Function to handle click on the right arrow
  const handleRightArrowClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === secondaryTexts.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="max-w-lg">
          <h2 className="font-bold text-3xl mb-4">{title}</h2>
          <p className="text-gray-600 mb-4">{text1}</p>
          <p className="font-bold mb-4">{text2}</p>
          {/* New Section */}
          <div className="mt-8">
            <h3 className="font-bold mb-2">{secondaryTitle}</h3>
            <p className="text-gray-600 mb-4">{secondaryTexts[currentIndex]}</p>
            <div className="flex justify-between items-center">
              <button onClick={handleLeftArrowClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-600 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button onClick={handleRightArrowClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-600 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <div className="sm:ml-16 lg:mr-20 bg-[#00cc99] rounded-lg p-10 sm:p-24 mr-4 lg:mr-8 lg:w-1/3 lg:h-94 lg:mr-4"></div>
        
      </div>
    </div>
  );
};

export default Feedback;