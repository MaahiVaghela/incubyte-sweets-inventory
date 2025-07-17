import React from 'react';

const SweetCard = ({ sweet }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white">
      <h3 className="text-lg font-semibold text-pink-700">{sweet.name}</h3>
      <p className="text-sm text-gray-600">Price: ₹{sweet.price}</p>
    </div>
  );
};

export default SweetCard;