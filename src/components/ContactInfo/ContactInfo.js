import './ContactInfo.css';
import React, {useState} from 'react';
import { Link } from 'react-router-dom'

function ContactInfo() {
    return (
       <div className="contact_us">
           <p className="ptext">CONTACT US ON 24/7</p>
           <h1 className="ptext">+91-9440123456</h1>
           <hr className="line"/>
           <p className="ptext">To Get Quote</p>
           <button type="submit" className="button"><Link to='/contact'>Click Here</Link></button>
       </div>
    )
}
export default ContactInfo;
