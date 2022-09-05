import React from 'react';
import "../css/Card.css";

const Card = (props) =>{

  return (
    <div className = "flux_main-card-container">
      <div className = "flux_card-container-img">
        <img src = {props.img} className = "flux_card-float-img" />
      </div>
      <div className = "flux_card-body">
        <h3 className = "flux_card-header flux_text-button">{props.header}</h3>
        <p className = "flux_card-para flux_text-para">{props.para}</p>
      </div>
    </div>
  )
}

export default Card ;
