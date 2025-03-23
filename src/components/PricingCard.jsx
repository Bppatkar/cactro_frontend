import React from "react";

const PricingCard = ({ title, description, features, buttonText }) => {
  return (
    <div className="bg-orange-50 p-8 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default PricingCard;