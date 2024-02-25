import React from 'react'
import circleLogo from '../assets/image 2.png'

const Footer = () => {
  return (
    <div className="footer">
        <div className="elementsInFooter">
            <img src={circleLogo} alt="" className="circleTrashify" />
            <div className="footerPages">
              <span className='footerPage'>EXPLORE</span>
                <span className='footerPage'>ABOUT US</span>
                <span className='footerPage'>RESOURCES</span>
            </div>
            <div className="madeToronto">
                <span>Made with ❤️ in Toronto</span>
            </div>
            <div className="trashifyExistance">
                <span>Trashify © 2024 | All rights reserved</span>
            </div>
        </div>
    </div>
  )
}

export default Footer
