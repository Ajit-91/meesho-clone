import React from 'react'
import "../assets/css/brandCol.css"
import brandImg from "../assets/images/brandImg.png"
const BrandCol = () => {
  return (
    <div className='brandCol'>
        <img 
        src={brandImg} 
        width={"130px"}
        alt="brand-img"
        />
    </div>
  )
}

export default BrandCol