import React from 'react'
import "../css/Utils.css"
import "../css/Footer.css"

const Footer = () => {
  return(
    <div className = "flux_main-footer-container">
      <div className = "flux_footer-links">
        <div className = "flux_footer-brand-container">
          <h2 className = "flux_brand-header flux_text-sub_header">krypto</h2>
        </div >
        <div className = "flux_footer-list-container">
          <h3 className = "flux_text-button flux_footer-item-header">Krytpo</h3>
          <ul>
            <li className = "flux_text-item flux_footer-items">home</li>
            <li className = "flux_text-item flux_footer-items">about</li>
            <li className = "flux_text-item flux_footer-items">buy NFTs</li>
            <li className = "flux_text-item flux_footer-items">sell NFTs</li>
          </ul>
        </div>
        <div className = "flux_footer-list-container">
          <h3 className = "flux_text-button flux_footer-item-header" >market</h3>
          <ul>
            <li className = "flux_text-item flux_footer-items">browse NFTs</li>
            <li className = "flux_text-item flux_footer-items">buy NFTs</li>
            <li className = "flux_text-item flux_footer-items">sell NFTs</li>
          </ul>
        </div>
        <div className = "flux_footer-list-container">
          <h3 className = "flux_text-button flux_footer-item-header">Contact</h3>
          <ul>
            <li className = "flux_text-item flux_footer-items">email</li>
            <li className = "flux_text-item flux_footer-items">instagram</li>
            <li className = "flux_text-item flux_footer-items">linkedIn</li>
            <li className = "flux_text-item flux_footer-items">twitter</li>
          </ul>
        </div>
        <div className = "flux_footer-nl-container">
          <h3 className = "flux_text-button flux_footer-item-header">join our newsletter </h3>
          <div className = "flux_footer-input-grp">
            <input placeholder = "email ID"/>
            <button className = "flux_button flux-btn-c1 flux_footer-nl-btn">
              <span className = "flux_text-button ">submit</span>
            </button>
          </div>
        </div>
      </div>

      <div className = "flux_footer-color-block">
      </div>
    </div>
  )
}

export default Footer;
