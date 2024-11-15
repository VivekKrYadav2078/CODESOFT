import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        {/* <div className="footer-top">
            <div className="footer-top-left">
                <p>I am a fronted developer from, India. I am Computer Science Engineering Student with keen interest in Web Development</p>
            </div>
            <div className="footer-top-right">


            </div>
        </div> */}
        <hr />
        <div className="footer-bottom">
            <p className='footer-bottom-left'>© 2024 Vivek Kumar Yadav. All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Terms of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer