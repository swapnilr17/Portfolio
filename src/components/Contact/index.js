import React, {useState} from 'react';
import './index.scss';
import emailjs, {init} from 'emailjs-com';
const Contact = () => {

  const[send,setSend] = useState('send')
  const[form,setForm] = useState({
    name:"",
    email:"",
    subject:"",
    message:""

  })

  init("user_bn3tlkkTd8aT06UOHORve");
    function sendEmail(e) {
        
        e.preventDefault();
        emailjs.sendForm('service_1e3bu03',"template_cca3an5", e.target, 'user_bn3tlkkTd8aT06UOHORve')
          .then((result) => {
              console.log(result.text);
              setSend('send')
              setForm({
                name:"",
                email:"",
                subject:"",
                message:""  
              });
          }, (error) => {
              console.log(error.text);
          });
      }

      function click(e) {
        setSend('sending...');
      }

      function handleChange(e){
        const value = e.target.value;
  setForm({
    ...form,
    [e.target.name]: value
  });
      }

  return(
    <div class="contact" id="contact">
      <div className="contact-container">
      <div className="contact-data">
        <div className="contact-details">
          <div className="detail-title">Swapnil Rawat</div>
            <div className="detail"><img src={require('../../assets/images/phone-white.png').default}/>+91 7505480288</div>
          <div className="detail"><img src={require('../../assets/images/email-white.png').default}/>swapnilr1700@gmail.com</div>
          <div className="detail"><img src={require('../../assets/images/address-white.png').default}/>Dehradun, Uttarakhand</div>
        </div>
        <div className="contact-form">
        <form id ="form" onSubmit={sendEmail}>
                        <span>Get In Touch</span>
                        <input required type="text" name ="name" id="name" placeholder="Full Name" value={form.name} onChange={handleChange}/>
                        <input required type="text" name ="email" id="email" placeholder="Email" value={form.email} onChange={handleChange}/>
                        <input required type="text" name ="subject" id="subject" placeholder="Subject" value={form.subject} onChange={handleChange}/>
                        <textarea required name ="message" id="message" placeholder="Message" value={form.message} onChange={handleChange}/>
                        <button type ="submit" name="submit" value="Submit" onClick={click}>{send}</button>             
        </form>
        </div>
      </div>
      </div>
    </div>
  )


}

export default Contact;
