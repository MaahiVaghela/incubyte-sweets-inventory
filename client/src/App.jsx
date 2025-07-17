import React from 'react';
import Navbar from './components/Navbar';
import AddSweetPage from './pages/AddSweetPage';

function App() {
  return (
    <div className="bg-pink-50 min-h-screen">
      <Navbar />
      <AddSweetPage />
    </div>
  );
}

export default App;