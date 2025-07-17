import React from "react";

const SweetCard = ({ sweet, onView, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 w-full max-w-sm">
      <img
        src={sweet.image}
        alt={sweet.name}
        className="rounded-xl w-full h-48 object-cover"
      />
      <div className="mt-3 space-y-1">
        <h2 className="text-xl font-bold text-pink-700">{sweet.name}</h2>
        <p className="text-gray-600 text-sm">Price: ₹{sweet.price}/Kg</p>
        {sweet.isAvailable ? (
          <p className="text-green-600 font-semibold">Available</p>
        ) : (
          <p className="text-red-600 font-semibold">Not Available</p>
        )}
      </div>

      <div className="flex justify-between mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-xl"
          onClick={() => onView(sweet)}
        >
          View
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-xl"
          onClick={() => onEdit(sweet)}
        >
          Edit
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-xl"
          onClick={() => onDelete(sweet._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default SweetCard;
