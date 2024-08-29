import React from 'react';

const Plan = ({ title, price, features }) => {
  return (
    <div className="bg-black text-white p-6 rounded-lg shadow-lg mx-auto w-96 h-[40rem] flex flex-col">
      <div className="bg-gray-800 p-6 rounded-lg flex flex-col mb-6">
        <h2 className="text-xl font-semibold">{title}</h2>
        <div className="flex items-baseline justify-center space-x-1">
          <span className="text-2xl">$</span>
          <p className="text-7xl font-bold">{price}</p>
          <span className="text-xl">CAD</span>
        </div>
      </div>
      <ul className="flex flex-col gap-4 ml-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-left">
            <svg className="w-5 h-5 text-white mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Plan;
