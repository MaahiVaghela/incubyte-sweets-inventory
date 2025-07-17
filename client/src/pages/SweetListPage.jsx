// import React, { useEffect, useState } from "react";
// import SweetCard from "../components/SweetCard";
// import axios from "axios";

// const SweetList = () => {
//   const [sweets, setSweets] = useState([]);

//   useEffect(() => {
//     const fetchSweets = async () => {
//       try {
//         const res = await axios.get("http://localhost:3000/");
//         setSweets(res.data);
//       } catch (err) {
//         console.error("Error fetching sweets:", err);
//       }
//     };
//     fetchSweets();
//   }, []);

//   const handleView = (sweet) => {
//     alert(`Viewing sweet: ${sweet.name}`);
//   };

//   const handleEdit = (sweet) => {
//     alert(`Editing sweet: ${sweet.name}`);
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure to delete this sweet?")) return;
//     try {
//       await axios.delete(`http://localhost:3000/${id}`);
//       setSweets(sweets.filter((s) => s._id !== id));
//     } catch (err) {
//       console.error("Error deleting sweet:", err);
//     }
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-6 text-center text-pink-800">Sweet Inventory</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {sweets.map((sweet) => (
//           <SweetCard
//             key={sweet.sweetId}
//             sweet={sweet}
//             onView={handleView}
//             onEdit={handleEdit}
//             onDelete={handleDelete}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SweetList;
// import React, { useEffect, useState } from "react";
// import SweetCard from "../components/SweetCard";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const SweetList = () => {
//   const [sweets, setSweets] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchSweets = async () => {
//       try {
//         const res = await axios.get("http://localhost:3000/");
//         setSweets(res.data);
//       } catch (err) {
//         console.error("Error fetching sweets:", err);
//       }
//     };
//     fetchSweets();
//   }, []);

//   const handleView = (sweet) => {
//     navigate(`/sweet/${sweet.sweetId}`);
//   };

//   const handleEdit = (sweet) => {
//     navigate('/add', { state: { sweet } });
//   };

  

// const handleDelete = async (sweetId) => {
//   try {
//     await axios.delete(`http://localhost:3000/sweet/${sweetId}`);
//     alert('Sweet deleted successfully!');
//     // Optional: refresh list
//     setSweets(sweets.filter((sweet) => sweet.sweetId !== sweetId));
//   } catch (error) {
//     console.error('Error deleting sweet:', error);
//     alert('Failed to delete sweet');
//   }
// };


//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-6 text-center text-pink-800">Sweet Inventory</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {sweets.map((sweet) => (
//           <SweetCard
//             key={sweet.sweetId}
//             sweet={sweet}
//             onView={handleView}
//             onEdit={handleEdit}
//             onDelete={handleDelete}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SweetList;
// import React, { useEffect, useState } from "react";
// import SweetCard from "../components/SweetCard";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const SweetList = () => {
//   const [sweets, setSweets] = useState([]);
//   const navigate = useNavigate();

//   // Fetch sweets on mount
//   useEffect(() => {
//     const fetchSweets = async () => {
//       try {
//         const res = await axios.get("http://localhost:3000/");
//         setSweets(res.data);
//       } catch (err) {
//         console.error("Error fetching sweets:", err);
//       }
//     };
//     fetchSweets();
//   }, []);

//   // View handler
//   const handleView = (sweet) => {
//     navigate(`/sweet/${sweet.sweetId}`);
//   };

//   // Edit handler
//   const handleEdit = (sweet) => {
//     navigate("/add", { state: { sweet } });
//   };

//   // Delete handler
//   const handleDelete = async (sweetId) => {
//     const confirm = window.confirm("Are you sure you want to delete this sweet?");
//     if (!confirm) return;

//     try {
//       await axios.delete(`http://localhost:3000/sweet/${sweetId}`);
//       alert("🗑️ Sweet deleted successfully!");
//       setSweets((prev) => prev.filter((s) => s.sweetId !== sweetId));
//     } catch (err) {
//       console.error("Delete failed:", err);
//       alert("❌ Failed to delete sweet");
//     }
//   };





//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-6 text-center text-pink-800">🍬 Sweet Inventory</h1>
//       {sweets.length === 0 ? (
//         <p className="text-center text-gray-500">No sweets found. Try adding some!</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {sweets.map((sweet) => (
//             <SweetCard
//               key={sweet.sweetId}
//               sweet={sweet}
//               onView={handleView}
//               onEdit={handleEdit}
//               onDelete={handleDelete}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SweetList;

import React, { useEffect, useState } from "react";
import SweetCard from "../components/SweetCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SweetList = () => {
  const [sweets, setSweets] = useState([]);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const navigate = useNavigate();

  // Fetch sweets on mount or when filters change
  useEffect(() => {
    fetchSweets();
  }, []);

  const fetchSweets = async () => {
    try {
      const res = await axios.get("http://localhost:3000/");
      setSweets(res.data);
    } catch (err) {
      console.error("Error fetching sweets:", err);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    const queryParams = new URLSearchParams();
    if (name) queryParams.append("name", name);
    if (category) queryParams.append("category", category);
    if (minPrice) queryParams.append("minPrice", minPrice);
    if (maxPrice) queryParams.append("maxPrice", maxPrice);

    try {
      const res = await axios.get(
        `http://localhost:3000/search?${queryParams.toString()}`
      );
      setSweets(res.data);
    } catch (err) {
      console.error("Search failed:", err);
      alert("Failed to search sweets.");
    }
  };

  const handleView = (sweet) => {
    navigate(`/sweet/${sweet.sweetId}`);
  };

  const handleEdit = (sweet) => {
    navigate("/add", { state: { sweet } });
  };

  const handleDelete = async (sweetId) => {
    const confirm = window.confirm("Are you sure you want to delete this sweet?");
    if (!confirm) return;

    try {
      await axios.delete(`http://localhost:3000/sweet/${sweetId}`);
      alert("Sweet deleted successfully!");
      setSweets((prev) => prev.filter((s) => s.sweetId !== sweetId));
    } catch (err) {
      console.error("Delete failed:", err);
      alert("Failed to delete sweet");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-pink-800">🍬 Sweet Inventory</h1>

      {/* 🔍 Search Form */}
      <form onSubmit={handleSearch} className="flex flex-wrap gap-2 mb-6 justify-center">
        <input
          type="text"
          placeholder="Search by name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded px-3 py-2 w-40"
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border rounded px-3 py-2 w-40"
        />
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="border rounded px-3 py-2 w-32"
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="border rounded px-3 py-2 w-32"
        />
        <button
          type="submit"
          className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition"
        >
          Search
        </button>
      </form>

      {/* 📦 Sweet Cards */}
      {sweets.length === 0 ? (
        <p className="text-center text-gray-500">No sweets found. Try adjusting your search!</p>
      ) : (
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
      )}
    </div>
  );
};

export default SweetList;
