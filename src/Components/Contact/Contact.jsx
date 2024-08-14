import React from 'react'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
import './Contact.css'
const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "dd57db1d-988e-4f1e-b47a-8e4add0c605b");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Message Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Send us a message <img src={msg_icon}></img></h3>
                <p>Feel free to reach out through contact form or find our contact information below. Your feedback,
                    questions and suggestions are important to us as we strive to provide exceptional service to our university community.
                </p>
                <ul>
                    <li><img src={mail_icon} />ibad1818@gmail.com</li>
                    <li><img src={phone_icon} />+92-313-9529602</li>
                    <li><img src={location_icon} />Salwan Building Saddar Road<br />Peshawar Cantt, KPK, Pakistan</li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Your name</label>
                    <input type="text" name='name' placeholder='Enter your name' required />
                    <label>Phone Number</label>
                    <input type="tel" name='phone' placeholder='Enter your mobile number' required />
                    <label>Write your message here</label>
                    <textarea name="message" rows='6' placeholder='Enter your message'></textarea>
                    <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Contact