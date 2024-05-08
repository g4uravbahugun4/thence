import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './nav.css';

function Navbar() {
  const location = useLocation();

  return (
    <div className='nav'>
      <div className='nav-items'>
        <img src='Vector.svg' alt='Logo' />
      </div>

     
      {location.pathname === '/freelancer-login' && (
        <div className='close-button'>
          <Link to='/'>  <img src='Close.svg' /></Link>
        </div>
      )}

      
      {location.pathname === '/' && (
        <div className='cta'>
          <Link to='/get-projects' className='cta-item' style={{ textDecoration: 'none' }}>Onboard Talents</Link>
          <Link to='/freelancer-login' className='cta-item active' style={{ textDecoration: 'none' }}>Get Projects</Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
