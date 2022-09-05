import React from 'react';
import pc from "../Assets/pc.png";
import "../css/Utils.css";
import "../css/Hero.css";

const Hero = () => {
  return (
    <div className = "flux_main-hero-container">
      <div>
        <h1 className = "flux_text-header">discover and collect rare NFTs</h1>
        <p className = "flux_text-para">The most secure marketplace for buying and selling unique crypto assets.</p>
        <div className = "flux_button-group">
          <button className = "flux_button flux-btn-c1">
            <span className = "flux_text-button">buy nfts</span>
          </button>
          <button className = "flux_button flux_button-outline">
            <span className = "flux_text-button">sell nfts</span>
          </button>
        </div>
      </div>

      <div>
        <img src = {pc} className = "flux_image-container" alt = "personalComputer Image" />
      </div>
    </div>
  )
}

export default Hero ;
