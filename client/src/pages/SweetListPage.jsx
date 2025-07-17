import React, { useEffect, useState } from "react";
import SweetCard from "../components/SweetCard";
import axios from "axios";

const SweetList = () => {
  const [sweets, setSweets] = useState([]);

  useEffect(() => {
    const fetchSweets = async () => {
      try {
        const res = await axios.get("http://localhost:3000/");
        setSweets(res.data);
      } catch (err) {
        console.error("Error fetching sweets:", err);
      }
    };
    fetchSweets();
  }, []);

  const handleView = (sweet) => {
    alert(`Viewing sweet: ${sweet.name}`);
  };

  const handleEdit = (sweet) => {
    alert(`Editing sweet: ${sweet.name}`);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure to delete this sweet?")) return;
    try {
      await axios.delete(`http://localhost:3000/${id}`);
      setSweets(sweets.filter((s) => s._id !== id));
    } catch (err) {
      console.error("Error deleting sweet:", err);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-pink-800">Sweet Inventory</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sweets.map((sweet) => (
          <SweetCard
            key={sweet.sweetId}
            sweet={sweet}
            onView={handleView}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default SweetList;
