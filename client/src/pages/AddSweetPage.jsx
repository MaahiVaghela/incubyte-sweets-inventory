// import React, { useState } from 'react';
// import axios from 'axios';

// const AddSweetPage = () => {
//   const [sweetData, setSweetData] = useState({ name: '', price: '' });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setSweetData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/sweets', sweetData);
//       if (response.status === 200 || response.status === 201) {
//         alert('Sweet added!');
//         setSweetData({ name: '', price: '' });
//       } else {
//         alert('Unexpected response from server.');
//       }
//     } catch (error) {
//       console.error(error);
//       alert('Failed to add sweet');
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-6 mt-10 bg-white rounded-lg shadow">
//       <h2 className="text-xl font-bold mb-4 text-center text-pink-600">Add New Sweet</h2>
//       <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//         <input
//           type="text"
//           name="name"
//           placeholder="Sweet Name"
//           value={sweetData.name}
//           onChange={handleChange}
//           className="border p-2 rounded"
//           required
//         />
//         <input
//           type="number"
//           name="price"
//           placeholder="Sweet Price"
//           value={sweetData.price}
//           onChange={handleChange}
//           className="border p-2 rounded"
//           required
//         />
//         <button type="submit" className="bg-pink-500 text-white py-2 rounded hover:bg-pink-600">
//           Add Sweet
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddSweetPage;

// import React, { useState } from 'react';
// import axios from 'axios';

// const AddSweetPage = () => {
//   const [sweetData, setSweetData] = useState({
//     name: '',
//     description: '',
//     price: '',
//     quantity: '',
//     category: '',
//     image: null,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setSweetData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleImageChange = (e) => {
//     setSweetData((prev) => ({ ...prev, image: e.target.files[0] }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     Object.entries(sweetData).forEach(([key, value]) => {
//       formData.append(key, value);
//     });

//     try {
//       const response = await axios.post('http://localhost:3000/add', formData, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       });
//       if (response.status === 200 || response.status === 201) {
//         alert('Sweet added successfully!');
//         setSweetData({
//           name: '',
//           description: '',
//           price: '',
//           quantity: '',
//           category: '',
//           image: null,
//         });
//         document.getElementById('image').value = '';
//       } else {
//         alert('Unexpected response from server.');
//       }
//     } catch (error) {
//       console.error(error);
//       alert('Failed to add sweet');
//     }
//   };

//   return (
//     <div className="max-w-2xl mx-auto p-8 mt-12 bg-white rounded-2xl shadow-2xl border border-pink-100">
//       <h2 className="text-3xl font-extrabold mb-8 text-center text-pink-600">
//         🍭 Add a New Sweet Delight
//       </h2>
//       <form onSubmit={handleSubmit} className="flex flex-col gap-5">
//         <input
//           type="text"
//           name="name"
//           placeholder="Sweet Name"
//           value={sweetData.name}
//           onChange={handleChange}
//           className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
//           required
//         />
//         <textarea
//           name="description"
//           placeholder="Description"
//           value={sweetData.description}
//           onChange={handleChange}
//           className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition md:col-span-2 h-28 resize-none"
//           required
//         ></textarea>
//         <input
//           type="number"
//           name="price"
//           placeholder="Price (₹)"
//           value={sweetData.price}
//           onChange={handleChange}
//           className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
//           required
//         />
//         <input
//           type="number"
//           name="quantity"
//           placeholder="Quantity"
//           value={sweetData.quantity}
//           onChange={handleChange}
//           className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
//           required
//         />
//         <input
//           type="text"
//           name="category"
//           placeholder="Category (e.g., Ladoo, Barfi)"
//           value={sweetData.category}
//           onChange={handleChange}
//           className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
//           required
//         />
//         <input
//           type="file"
//           id="image"
//           accept="image/*"
//           onChange={handleImageChange}
//            className="md:col-span-2 block w-full text-sm text-gray-700 file:mr-4 file:py-3 file:px-6 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-pink-100 file:text-pink-700 hover:file:bg-pink-200 transition"
//           required
//         />
//         <button
//           type="submit"
//            className="md:col-span-2 bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-xl font-semibold shadow-lg text-lg transition-all"
//         >
//           ➕ Add Sweet
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddSweetPage;

import React, { useState } from 'react';
import axios from 'axios';

const AddSweetPage = () => {
  const [sweetData, setSweetData] = useState({
    name: '',
    description: '',
    price: '',
    quantity: '',
    category: '',
    image: null,
  });

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
      formData.append(key, value);
    });

    try {
      const response = await axios.post('http://localhost:3000/add', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (response.status === 200 || response.status === 201) {
        alert('🍬 Sweet added successfully!');
        setSweetData({
          name: '',
          description: '',
          price: '',
          quantity: '',
          category: '',
          image: null,
        });
        document.getElementById('image').value = '';
      } else {
        alert('Unexpected server response.');
      }
    } catch (error) {
      console.error(error);
      alert('❌ Failed to add sweet');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-10 mt-16 bg-pink-50 rounded-3xl shadow-xl border border-pink-200">
      <h2 className="text-4xl font-bold mb-10 text-center text-pink-600 tracking-tight">
        🍭 Add a New Sweet Delight
      </h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div className="flex flex-col">
          <label className="text-pink-700 font-semibold mb-1">Sweet Name</label>
          <input
            type="text"
            name="name"
            placeholder="e.g. Kaju Katli"
            value={sweetData.name}
            onChange={handleChange}
            className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            required
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
            className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            required
          />
        </div>

        <div className="flex flex-col md:col-span-2">
          <label className="text-pink-700 font-semibold mb-1">Description</label>
          <textarea
            name="description"
            placeholder="Short description of the sweet..."
            value={sweetData.description}
            onChange={handleChange}
            className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition resize-none h-28"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-pink-700 font-semibold mb-1">Price (₹)</label>
          <input
            type="number"
            name="price"
            placeholder="e.g. 150"
            value={sweetData.price}
            onChange={handleChange}
            className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-pink-700 font-semibold mb-1">Quantity</label>
          <input
            type="number"
            name="quantity"
            placeholder="e.g. 10"
            value={sweetData.quantity}
            onChange={handleChange}
            className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            required
          />
        </div>

        <div className="flex flex-col md:col-span-2">
          <label className="text-pink-700 font-semibold mb-1">Image</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full text-sm text-gray-700 file:mr-4 file:py-3 file:px-6 file:rounded-lg file:border-0 file:font-medium file:bg-pink-100 file:text-pink-700 hover:file:bg-pink-200 transition"
            required
          />
        </div>

        <button
          type="submit"
          className="md:col-span-2 mt-6 bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-xl font-semibold shadow-lg text-lg transition-all"
        >
          ➕ Add Sweet
        </button>
      </form>
    </div>
  );
};

export default AddSweetPage;



// import React, { useState } from 'react';
// import axios from 'axios';
// import InputField from '../components/InputField';
// import TextAreaField from '../components/TextAreaField';
// import FileUpload from '../components/FileUpload';
// import SubmitButton from '../components/SubmitButton';
// import Navbar from '../components/Navbar';

// const AddSweetPage = () => {
//   const [sweetData, setSweetData] = useState({
//     name: '',
//     description: '',
//     price: '',
//     quantity: '',
//     category: '',
//     image: null,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setSweetData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleImageChange = (e) => {
//     setSweetData((prev) => ({ ...prev, image: e.target.files[0] }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     Object.entries(sweetData).forEach(([key, value]) => {
//       formData.append(key, value);
//     });

//     try {
//       const response = await axios.post('http://localhost:3000/add', formData, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       });
//       if (response.status === 200 || response.status === 201) {
//         alert('Sweet added successfully!');
//         setSweetData({
//           name: '',
//           description: '',
//           price: '',
//           quantity: '',
//           category: '',
//           image: null,
//         });
//         document.getElementById('image').value = '';
//       } else {
//         alert('Unexpected response from server.');
//       }
//     } catch (error) {
//       console.error(error);
//       alert('Failed to add sweet');
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="max-w-3xl mx-auto p-10 mt-12 bg-gradient-to-br from-pink-50 via-pink-100 to-pink-200 rounded-3xl shadow-2xl border border-pink-200">
//         <h2 className="text-4xl font-extrabold mb-10 text-center text-pink-700 drop-shadow-sm">
//           🍬 Add a New Sweet Delight
//         </h2>
//         <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <InputField name="name" value={sweetData.name} onChange={handleChange} placeholder="Sweet Name" required />
//           <InputField name="category" value={sweetData.category} onChange={handleChange} placeholder="Category (e.g., Ladoo, Barfi)" required />
//           <InputField name="price" value={sweetData.price} onChange={handleChange} placeholder="Price (₹)" type="number" required />
//           <InputField name="quantity" value={sweetData.quantity} onChange={handleChange} placeholder="Quantity" type="number" required />
//           <TextAreaField name="description" value={sweetData.description} onChange={handleChange} placeholder="Description" required />
//           <FileUpload onChange={handleImageChange} />
//           <SubmitButton label="➕ Add Sweet" />
//         </form>
//       </div>
//     </>
//   );
// };

// export default AddSweetPage;
