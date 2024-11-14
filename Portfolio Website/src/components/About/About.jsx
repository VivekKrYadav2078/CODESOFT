import React from 'react'
import './About.css' 
import pic from '../../assets/pic.jpg'

const About = () => {
  return (
    <div className='about'>
    <div className="about-title"><h1>About Me</h1>
   
    </div>
    <div className="about-section">
      <div className="about-left">
        <img src={pic} alt="" />
      </div>
      <div className="about-right">
        <div className="about-para">
          <p>I am an Fresher Frontend Developer with a expertise in the field. Looking for the collaborating with prestigious organizations, to contribute to their success and growth.</p>

          <p>My passion for web development is not only reflected in my hardwork but also in the enthusiasm and dedication I bring to each project.</p>
        </div>
        <div className="about-skills">
            <div className="about-skill hrstyle1"><p>HTML & CSS</p><hr /></div>
            <div className="about-skill hrstyle2"><p>JavaScript</p><hr /></div>
            <div className="about-skill hrstyle3"><p>React Js</p><hr /></div>
        </div>
      </div>
    </div>
    <div className="about-achievements">
        <div className="about-achievement">
            <h1>1+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr/>
        <div className="about-achievement">
            <h1>5+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
    </div>
</div>
  )
}

export default About