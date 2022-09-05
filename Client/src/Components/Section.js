import React from 'react';
import '../css/Utils.css';
import '../css/Section.css';


const Section = (props) => {
  return (
    <div className = "flux_main-section-container" style = {props.rowOrnt}>
      <div>
        <h3 className = "flux_text-inotation">{props.inotation}</h3>
        <h1 className = "flux_text-sub_header" >{props.header}</h1>
        <p className = "flux_text-para">{props.para}</p>
        <button className = "flux_button flux-btn-c1">
          <span className = "flux_text-button">{props.btn_txt}</span>
        </button>
      </div>

      <div>
        <img src = {props.img} className = "flux_image-container" />
      </div>
    </div>
  )
}

export default Section ;
