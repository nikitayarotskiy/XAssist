// FeaturesPage.jsx
import React from 'react';
import { features } from '../Data/features'; // Adjust the path according to your file structure

const FeaturesPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
        Our Website Development Services
      </h1>
      <p className="text-lg text-center mb-12 text-gray-600">
        Discover how our custom website solutions can help you achieve your business goals. From stunning designs to powerful functionalities, we tailor every aspect to meet your unique needs.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4">
            <div className="flex-shrink-0">
              <span className="material-icons text-primary text-4xl">{feature.icon}</span>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h2>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesPage;
