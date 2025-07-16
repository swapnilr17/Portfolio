import React, {useState, useRef, useEffect} from 'react';
import './index.scss';
import profileImg from '../../assets/images/profile.svg';
import phoneImg from '../../assets/images/phone-white.png';
import emailImg from '../../assets/images/email-white.png';
import addressImg from '../../assets/images/address-white.png';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const modalRef = useRef(null);
  const timerRef = useRef(null);


  function handleChange(e) {
    const value = e.target.value;
    setForm({
      ...form,
      [e.target.name]: value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await fetch('https://w24gvklj4m.execute-api.us-east-1.amazonaws.com/default/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message
        })
      });
      if (res.ok) {
        setSubmitted(true);
        setForm({ name: '', email: '', subject: '', message: '' });
        timerRef.current = setTimeout(() => {
          setSubmitted(false);
        }, 3000);
      } else {
        // Optionally handle error
        alert('Failed to send message.');
      }
    } catch (err) {
      alert('Error sending message.');
    }
  }

  function closeModal() {
    setSubmitted(false);
    if (timerRef.current) clearTimeout(timerRef.current);
  }

  // Show modal if redirected with ?submitted=true
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('submitted') === 'true') {
      setSubmitted(true);
      setForm({ name: '', email: '', subject: '', message: '' });
      timerRef.current = setTimeout(() => {
        setSubmitted(false);
        // Remove the query param from URL after closing
        const url = new URL(window.location);
        url.searchParams.delete('submitted');
        window.history.replaceState({}, document.title, url.pathname);
      }, 3000);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    }
    if (submitted) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [submitted]);

  return (
    <div className="contact" id="contact">
      {submitted && (
        <div className="modal-overlay">
          <div className="modal-box" ref={modalRef}>
            <div className="modal-check-circle">
              <span className="modal-check">✔</span>
            </div>
            <span>Submitted Successfully!</span>
            <button className="modal-close" onClick={closeModal}>×</button>
          </div>
        </div>
      )}
      <div className="contact-container">
        <div className="contact-data">
          <div className="contact-details">
            <div className="detail-image"><img src={profileImg} alt="phone" width="250px" height="250px" /></div>
            <div className="detail-title">Swapnil Rawat</div>
            <div className="detail"><img src={phoneImg} alt="phone" />+91 7505480288</div>
            <div className="detail"><img src={emailImg} alt="email" />swapnilr1700@gmail.com</div>
            <div className="detail"><img src={addressImg} alt="address" />Dehradun, Uttarakhand</div>
          </div>
          <div className="contact-form">
            <form id="form" autoComplete="off" onSubmit={handleSubmit}>
              <span>Get In Touch</span>
              <input required type="text" name="name" id="name" placeholder="Full Name" value={form.name} onChange={handleChange} />
              <input required type="email" name="email" id="email" placeholder="Email" value={form.email} onChange={handleChange} />
              <input required type="text" name="subject" id="subject" placeholder="Subject" value={form.subject} onChange={handleChange} />
              <textarea required name="message" id="message" placeholder="Message" value={form.message} onChange={handleChange} />
              <button type="submit" name="submit" value="Submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
