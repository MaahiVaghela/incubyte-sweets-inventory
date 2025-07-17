// import React from 'react';
// import Navbar from './components/Navbar';
// import AddSweetPage from './pages/AddSweetPage';

// function App() {
//   return (
//     <div className="bg-pink-50 min-h-screen">
//       <Navbar />
//       <AddSweetPage />
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SweetList from "./pages/SweetListPage";
import AddSweet from "./pages/AddSweetPage";
import ViewSweet from './pages/ViewSweet';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<SweetList />} />
        <Route path="/add" element={<AddSweet />} />
        <Route path="/sweet/:id" element={<ViewSweet />} />
      </Routes>
    </Router>
  );
}

export default App;
