// import { useParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import axios from 'axios';

// const ViewSweet = () => {
//   const { id } = useParams();
//   const [sweet, setSweet] = useState(null);
//   const [purchaseQty, setPurchaseQty] = useState(0);
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     axios.get(`http://localhost:3000/sweet/${id}`) // ✅ fixed backticks
//       .then(res => setSweet(res.data))
//       .catch(err => console.error('Error fetching sweet:', err));
//   }, [id]);

//   const handlePurchase = async () => {
//     if (purchaseQty <= 0) {
//       setMessage("Please select a valid quantity.");
//       return;
//     }

//     try {
//       const res = await axios.post(`http://localhost:3000/sweet/${id}/purchase`, {
//         purchaseQty: Number(purchaseQty),
//       });

//       setMessage(res.data.message);
//       setSweet(prev => ({ ...prev, quantity: prev.quantity - purchaseQty }));
//     } catch (err) {
//       setMessage(err.response?.data?.message || 'Purchase failed');
//     }
//   };

//   if (!sweet) return <div>Loading...</div>;

//   return (
//     <div className="p-4 max-w-md mx-auto">
//       <h1 className="text-2xl font-bold mb-2">{sweet.name}</h1>
//       <img src={sweet.image} alt={sweet.name} className="rounded-lg mb-2" />
//       <p className="text-gray-700 mb-2">{sweet.description}</p>
//       <p><strong>Price:</strong> ₹{sweet.price}</p>
//       <p><strong>Available:</strong> {sweet.quantity}</p>
//       <p><strong>Category:</strong> {sweet.category}</p>

//       <div className="mt-4">
//         <label className="block mb-1">Purchase Quantity:</label>
//         <input
//           type="number"
//           min="0"
//           max={sweet.quantity}
//           value={purchaseQty}
//           onChange={e => setPurchaseQty(e.target.value)}
//           className="border px-2 py-1 w-full"
//         />
//         <button
//           onClick={handlePurchase}
//           className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         >
//           Purchase
//         </button>
//       </div>

//       {message && <p className="mt-4 text-red-600">{message}</p>}
//     </div>
//   );
// };

// export default ViewSweet;
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
    </div>
  );
};

export default ViewSweet;
