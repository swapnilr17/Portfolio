import React, {useState} from 'react';
import './index.scss';
import profileImg from '../../assets/images/profile.svg';
import phoneImg from '../../assets/images/phone-white.png';
import emailImg from '../../assets/images/email-white.png';
import addressImg from '../../assets/images/address-white.png';

const Contact = () => {

  const [form, setForm] = useState({
    name:"",
    email:"",
    subject:"",
    message:""
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e){
    const value = e.target.value;
    setForm({
      ...form,
      [e.target.name]: value
    });
  }

  function handleSubmit(e) {
    setSubmitted(true);
  }

  return(
    <div className="contact" id="contact">
      <div className="contact-container">
      <div className="contact-data">
        <div className="contact-details">
          <div className="detail-image"><img src={profileImg} alt="phone" width="250px" height="250px"/></div>
          <div className="detail-title">Swapnil Rawat</div>
            <div className="detail"><img src={phoneImg} alt="phone"/>+91 7505480288</div>
          <div className="detail"><img src={emailImg} alt="email"/>swapnilr1700@gmail.com</div>
          <div className="detail"><img src={addressImg} alt="address"/>Dehradun, Uttarakhand</div>
        </div>
        <div className="contact-form">
        {submitted ? (
              <div className="form-success">Thank you! Your message has been sent.</div>
            ) : (
              <form id ="form" action="https://formsubmit.co/swapnilr1700@gmail.com" method="POST" onSubmit={handleSubmit}>
                        <span>Get In Touch</span>
                        <input required type="text" name ="name" id="name" placeholder="Full Name" value={form.name} onChange={handleChange}/>
                        <input required type="email" name ="email" id="email" placeholder="Email" value={form.email} onChange={handleChange}/>
                        <input required type="text" name ="subject" id="subject" placeholder="Subject" value={form.subject} onChange={handleChange}/>
                        <textarea required name ="message" id="message" placeholder="Message" value={form.message} onChange={handleChange}/>
                        {/* Prevent spam with a honeypot field */}
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_next" value={window.location.href} />
                        <button type ="submit" name="submit" value="Submit">Send</button>             
        </form>
            )}
        </div>
      </div>
      </div>
    </div>
  )


}

export default Contact;
