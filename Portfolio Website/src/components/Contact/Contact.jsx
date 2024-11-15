import React from 'react'
import './Contact.css'
import contact_icon from '../../assets/call.svg'
import location_icon from '../../assets/location.svg'
import mail_icon from '../../assets/mail.svg'

const Contact = () => {
   
    const onSubmit = async (event) => {
        
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key","eea94112-4461-4a60-9460-42b4e10ab5a0");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message)
        }
      };
    

    return (
        <div className='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm currently available to take on new projects, so feelfree to send me a message about anything that you want me to work on. You can contact anytime.</p>

                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon}alt="" />
                            <p>vkyadav2078@gmail.com</p>

                        </div>
                        <div className="contact-detail">
                            <img src={contact_icon} alt="" />
                            <p>+91 6291509765</p>

                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" />
                            <p>Kolkata, West Bengal, India</p>

                        </div>
                    </div>
                </div>
                <form className="contact-right" onSubmit={onSubmit}>
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter Your Name' name='name'/>
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter Your Email' name='email'/>
                    <label htmlFor="">Write Your Message Here</label>
                    <textarea name="message" rows="8" placeholder='Enter Your Message'></textarea>
                    <button className='contact-submit' type='submit'>Submit Now</button>

                </form>


            </div>
        </div>
    )
}

export default Contact