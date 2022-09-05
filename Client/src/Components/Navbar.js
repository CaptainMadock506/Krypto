import React from 'react';
import '../css/Navbar.css';
import '../css/Utils.css';

const Navbar = () => {
  return (
    <nav className = "flux_main-navbar-container">
      <h1 className = "flux_brand-header flux_text-sub_header">krypto</h1>
      <ul className = "flux_navbar flux_text-item">
        <li className = "flux_navbar-item"> about </li>
        <li className = "flux_navbar-item"> pricing </li>
        <li className = "flux_navbar-item"> contact </li>
        <li className = "flux_navbar-item"> buy nfts </li>
      </ul>
    </nav>
  )
}

export default Navbar ;
