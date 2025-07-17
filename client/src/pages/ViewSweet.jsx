
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ViewSweet = () => {
  const { id } = useParams();
  const [sweet, setSweet] = useState(null);
  const [purchaseQty, setPurchaseQty] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchSweet = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/sweet/${id}`);
        setSweet(res.data);
      } catch (error) {
        console.error("Error loading sweet:", error);
      }
    };
    fetchSweet();
  }, [id]);

//    const handleRestock = async (sweetId) => {
//     const quantityToAdd = prompt("Enter quantity to add:");
//     if (!quantityToAdd || isNaN(quantityToAdd) || quantityToAdd <= 0) return;

//     try {
//       await axios.patch(`http://localhost:3000/sweet/${sweetId}/restock`, {
//         quantityToAdd: parseInt(quantityToAdd),
//       });

//       alert("Sweet restocked successfully!");
//       await fetchSweets(); // Refresh list
//     } catch (error) {
//       console.error("Restock failed:", error);
      
//     }
//   };
const handleRestock = async (sweetId) => {
  const quantityToAdd = prompt("Enter quantity to add:");
  if (!quantityToAdd || isNaN(quantityToAdd) || quantityToAdd <= 0) return;

  try {
    const response = await axios.patch(`http://localhost:3000/sweet/${sweetId}/restock`, {
      quantityToAdd: parseInt(quantityToAdd),
    });

    if (response.status === 200) {
      alert("Sweet restocked successfully!");
      await fetchSweets(); // Refresh the sweets list
    } 
  } catch (error) {
    console.error("Restock failed:", error);
    
  }
};


  const handlePurchase = async () => {
    try {
      const res = await axios.post(`http://localhost:3000/sweet/${id}/purchase`, {
        purchaseQty: Number(purchaseQty),
      });
      setMessage(res.data.message);
      setSweet((prev) => ({
        ...prev,
        quantity: prev.quantity - purchaseQty,
      }));
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  if (!sweet) return <div className="text-center p-6">Loading...</div>;

  return (
    <div className="p-6 max-w-xl mx-auto">
      <img
        src={sweet.image}
        alt={sweet.name}
        className="rounded-xl w-full h-64 object-cover"
      />
      <h2 className="text-3xl font-bold mt-4 text-pink-700">{sweet.name}</h2>
      <p className="text-gray-700 mt-2">Category: {sweet.category}</p>
      <p className="text-gray-700">Description: {sweet.description}</p>
      <p className="text-gray-700">Price: ₹{sweet.price}/Kg</p>
      <p className="text-gray-700">Available: {sweet.quantity} pieces</p>

      <div className="mt-4">
        <input
          type="number"
          min="1"
          max={sweet.quantity}
          value={purchaseQty}
          onChange={(e) => setPurchaseQty(e.target.value)}
          className="border px-3 py-1 rounded mr-2"
        />
        <button
          onClick={handlePurchase}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded"
        >
          Purchase
        </button>
      </div>

      {message && <p className="mt-3 text-blue-600 font-semibold">{message}</p>}
      <br></br>
      <br></br>

       <button
                className="px-3 py-1 bg-yellow-500 hover:bg-yellow-600 text-white rounded"
                onClick={() => handleRestock(sweet.sweetId)}
              >
                Restock
              </button>
    </div>
  );
};

export default ViewSweet;
