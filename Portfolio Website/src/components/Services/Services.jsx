import React from 'react'
import Services_Data from '../../assets/services_data'
import './Services.css'
const Services = () => {
  return (
    <div className='services'>
        <div className="services-title">
            <h1>My Service</h1>
        </div>
        <div className="services-container">
            {Services_Data.map((service,index)=>{
                return <div key={index} className="service-format">
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <p>{service.s_desc}</p>
                   <div className="services-readmore">
                    <p>Read More</p>
                    <img src="" alt="" /></div> 
                </div>

            })}
        </div>
    </div>
  )
}

export default Services