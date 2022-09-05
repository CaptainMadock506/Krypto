import React from 'react';
import forbes from '../Assets/forbes.png';
import crunch from '../Assets/crunch.png';
import mit from '../Assets/mit.png';
import company from '../Assets/company.png';
import '../css/Utils.css';
import '../css/Sponser.css';

const Sponser = () => {
  return (
    <div className = "flux_main-sponser-container">
      <h3 className = "flux_text-inotation">Featured</h3>
      <div className = "flux_sponser-image_cont">
        <img src = {forbes} className = "flux_image-container" alt = "Forbes"/>
        <img src = {mit} className = "flux_image-container" alt = "MIT"/>
        <img src = {crunch} className = "flux_image-container" alt = "TechCrunch"/>
        <img src = {company} className = "flux_image-container" alt = "FastCompany"/>
      </div>
    </div>
  )
}

export default Sponser ;
