import React from 'react'
import img1 from '../../assets/image (1).png'
import img2 from '../../assets/image (2).png'
import img3 from '../../assets/image (3).png'
import img4 from '../../assets/image (4).png'
import img5 from '../../assets/image (5).png'
import './carousel.css'

const carousel = () => {
  return (
    <div className="rectangleimage-frame">
    <div className="image-frame-b">
      <img
        className="image-icon"
        loading="eager"
        alt=""
        src={img1}
      />
    </div>
    <img className="image-icon1" alt="" src={img2} />
    <div className="image-frame-b1">
      <img className="image-icon2" alt="" src={img3} />
    </div>
    <div className="footer-image">
      <img className="image-icon3" alt="" src={img4} />
    </div>
    <img className="image-icon4" alt="" src={img5} />
  </div>
  )
}

export default carousel