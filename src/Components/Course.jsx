import React from 'react';

const CourseInfo = ({ courseName, mark, roomNumber, period }) => {
  const percentage = Math.max(0, Math.min(100, parseFloat(mark) || 0));

  return (
    <div className="p-8 border rounded-2xl shadow-lg mb-4 bg-white flex justify-between items-center text-left">
      <div className="text-secondary flex-1">
        <h2 className="text-3xl sm:text-6xl font-bold">{courseName}</h2>
        <h3 className="text-sm mt-1 sm:text-xl">{period + " | " + roomNumber}</h3>
      </div>
      {/* Conditionally render mark based on courseName */}
      {courseName.toLowerCase() !== 'lunch' && courseName.toLowerCase() !== 'spare' ? (
        <div className="text-secondary">
          <h2 className="text-5xl sm:text-8xl font-extrabold">{percentage}%</h2>
        </div>
      ) : (
        <div className="text-secondary">
          <h2 className="text-5xl sm:text-8xl font-extrabold"></h2> {/* Placeholder for hidden marks */}
        </div>
      )}
    </div>
  );
};

export default CourseInfo;
