import React, { useState } from 'react';
import logo from '../assets/images/lg_ss.png';
import { Link } from 'react-router-dom';

function Navigation() {
  // State untuk menentukan apakah menu sedang aktif atau tidak
  const [isMenuActive, setIsMenuActive] = useState(false);

  // Fungsi untuk toggle menu ketika ikon burger diklik
  const handleMenu = () => {
    setIsMenuActive(!isMenuActive); 
  };

  return (
    <div className="navigation">
      <div className="navbar">
        {/* Logo */}
        <div className="logo">
          <a href="#landing-page">
            <img className="img-fluid" src={logo} alt="SheSafe Logo" />
          </a>
        </div>

        {/* Link navigasi */}
        <div className={`navbar-links ${isMenuActive ? 'active' : ''}`} id="nav-links">
          <ul>
            <li>
              <a href="/#hero-section">Tentang SheSafe</a>
            </li>
            <li>
              <a href="/#guide-section">Bagaimana Cara Kerjanya?</a>
            </li>
            <li>
              <a href="/#advantages-section">Mengapa Pilih Kami?</a>
            </li>
            <li>
              <a href="/#contact-section">Bergabunglah Bersama Kami</a>
            </li>
          </ul>
        </div>

        {/* Tombol login */}
        <div>
          <li className="sm-btn-secondary btn-join">
            <Link to="/login">Masuk</Link>
          </li>
        </div>

        {/* Toggle button (burger menu) */}
        <div className="toggle-button" id="burger-menu" onClick={handleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
