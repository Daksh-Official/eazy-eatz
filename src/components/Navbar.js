import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          <FaTimes />
        </button>
        <ul>
          <li><Link to="/" onClick={toggleSidebar}>Home</Link></li>
          <li><Link to="/menu" onClick={toggleSidebar}>Menu</Link></li>
          <li><Link to="/cart" onClick={toggleSidebar}>Cart</Link></li>
          <li><Link to="/about" onClick={toggleSidebar}>About</Link></li>
        </ul>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar__left">
          <button className="menu-btn" onClick={toggleSidebar}>
            <FaBars />
          </button>

          <div className="navbar__logo">
            <Link to="/">Eazy <span>Eatz</span></Link>
          </div>
        </div>

        <div className="navbar__search">
          <input type="text" placeholder="Search food..." />
          <button className="search-btn">
            <FaSearch />
          </button>
        </div>

        <div className="navbar__buttons">
          <Link to="/login" className="btn login">Login</Link>
          <Link to="/signup" className="btn signup">Signup</Link>
        </div>
      </nav>

    </>
  );
}

export default Navbar;
