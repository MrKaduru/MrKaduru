
import React from 'react';

const SectorCard = ({ title, description }) => {
  return (
    <div className="border rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
        Learn More
      </button>
    </div>
  );
};

export default SectorCard;
