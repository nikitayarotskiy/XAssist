import React from 'react';
import Plan from './Plan'; // Adjust the import path as necessary
import plans from '../Data/plans'; // Adjust the import path as necessary

const PricingPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Our Pricing Plans
      </h1>
      <p className="text-lg text-center mb-12 text-gray-600">
        Discover the plan that suits your needs and let us build a custom website tailored to your business goals. Whether you need a basic site or advanced functionalities, we’ve got you covered!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-09">
        {plans.map((plan, index) => (
          <Plan
            key={index}
            title={plan.title}
            price={plan.price}
            features={plan.features}
          />
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
