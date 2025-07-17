// import React from 'react';

// const Navbar = () => {
//   return (
//     <nav className="bg-pink-200 p-4 shadow-md">
//       <h1 className="text-xl font-bold text-center text-pink-800">Sweets Inventory</h1>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-pink-100 shadow-md py-4 px-6 flex justify-between items-center">
      <div className="text-2xl font-bold text-pink-700">
        🍭 Sweet Inventory
      </div>
      <ul className="flex space-x-6 text-lg">
        <li>
          <Link to="/" className="text-pink-800 hover:text-pink-600">
            Sweets
          </Link>
        </li>
        <li>
          <Link to="/add" className="text-pink-800 hover:text-pink-600">
            Add Sweet
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
