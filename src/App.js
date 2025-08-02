import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/Home';
import Footer from './components/Footer';
import CheckOut from './pages/Checkout'
// eslint-disable-next-line 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenuPage from './pages/MenuPage';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/cart" element={<CheckOut />} />
      </Routes>

      <Footer />
    </div>
  );
}


export default App;
