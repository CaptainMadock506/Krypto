import React from 'react'
import Card from "../Components/Card"
import olivia from '../Assets/olivia.png'
import evans from '../Assets/evans.png'
import jess from '../Assets/jessica.png'
import "../css/Utils.css"
import "../css/Testimony.css"
const Testimony = () => {
  return(
    <div>
      <div className = "flux_testimony-container">
        <h3 className = "flux_text-inotation">testimonials</h3>
        <h1 className = "flux_text-sub_header">read what others  have to say</h1>
      </div>
      <div clasName = "flux_card-container">
        <Card
        img = {olivia}
        header = "Olivia Cole"
        para = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. "
        />

        <Card
        img = {evans}
        header = "Evans Collins"
        para = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. "
        />

        <Card
        img = {jess}
        header = "Jessica Lane"
        para = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. "
        />
      </div>
      <div className = "flux_gs-container">
          <h3 className = "flux_text-inotation">are you ready?</h3>
          <h1 className = "flux_text-sub_header">be a part of the  next big thing</h1>
          <button className = "flux_button flux-btn-gs">
            <span className = "flux_text-button"> get started </span>
          </button>
      </div>
    </div>
  )
}

export default Testimony;
