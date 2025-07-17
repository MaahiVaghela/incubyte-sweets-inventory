
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const AddSweetPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const editingSweet = location.state?.sweet;

  const [sweetData, setSweetData] = useState({
    name: '',
    description: '',
    price: '',
    quantity: '',
    category: '',
    image: null,
  });

  useEffect(() => {
    if (editingSweet) {
      setSweetData({
        name: editingSweet.name,
        description: editingSweet.description,
        price: editingSweet.price,
        quantity: editingSweet.quantity,
        category: editingSweet.category,
        image: null, // Do not prefill image
      });
    }
  }, [editingSweet]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSweetData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setSweetData((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(sweetData).forEach(([key, value]) => {
      if (value !== null) formData.append(key, value);
    });

    try {
      if (editingSweet) {
        // PUT for editing
        await axios.put(`http://localhost:3000/sweet/${editingSweet.sweetId}`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        alert('✅ Sweet updated successfully!');
      } else {
        // POST for new sweet
        await axios.post('http://localhost:3000/add', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        alert('🍬 Sweet added successfully!');
      }

      navigate('/'); // go back to list
    } catch (error) {
      console.error(error);
      alert('❌ Operation failed');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-10 mt-16 bg-pink-50 rounded-3xl shadow-xl border border-pink-200">
      <h2 className="text-4xl font-bold mb-10 text-center text-pink-600 tracking-tight">
        {editingSweet ? '✏️ Edit Sweet' : '🍭 Add a New Sweet Delight'}
      </h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label className="text-pink-700 font-semibold mb-1">Sweet Name</label>
          <input
            type="text"
            name="name"
            placeholder="e.g. Kaju Katli"
            value={sweetData.name}
            onChange={handleChange}
            required
            className="px-4 py-3 rounded-xl border border-gray-300"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-pink-700 font-semibold mb-1">Category</label>
          <input
            type="text"
            name="category"
            placeholder="e.g. Ladoo, Barfi"
            value={sweetData.category}
            onChange={handleChange}
            required
            className="px-4 py-3 rounded-xl border border-gray-300"
          />
        </div>

        <div className="flex flex-col md:col-span-2">
          <label className="text-pink-700 font-semibold mb-1">Description</label>
          <textarea
            name="description"
            placeholder="Short description..."
            value={sweetData.description}
            onChange={handleChange}
            required
            className="px-4 py-3 rounded-xl border border-gray-300 h-28 resize-none"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-pink-700 font-semibold mb-1">Price (₹)</label>
          <input
            type="number"
            name="price"
            value={sweetData.price}
            onChange={handleChange}
            required
            className="px-4 py-3 rounded-xl border border-gray-300"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-pink-700 font-semibold mb-1">Quantity</label>
          <input
            type="number"
            name="quantity"
            value={sweetData.quantity}
            onChange={handleChange}
            required
            className="px-4 py-3 rounded-xl border border-gray-300"
          />
        </div>

        <div className="flex flex-col md:col-span-2">
          <label className="text-pink-700 font-semibold mb-1">Image</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full text-sm text-gray-700 file:py-3 file:px-6 file:rounded-lg file:bg-pink-100"
            required={!editingSweet}
          />
        </div>

        <button
          type="submit"
          className="md:col-span-2 mt-6 bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-xl font-semibold shadow-lg text-lg transition-all"
        >
          {editingSweet ? '💾 Update Sweet' : '➕ Add Sweet'}
        </button>
      </form>
    </div>
  );
};

export default AddSweetPage;



