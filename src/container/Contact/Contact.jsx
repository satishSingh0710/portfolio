import { React, useState, useRef } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser'
import { images } from "../../constants";
import 'react-toastify/dist/ReactToastify.css';
import "./Contact.scss";

function Contact() {
   const [formData, setFormData] = useState({ name: '', phone: '', otp: '', email: '' })
   const [showOtp, setShowOtp] = useState(false)
   const [verifyPhone, setVerifyPhone] = useState(false)
   const [confirmationResult, setConfirmationResult] = useState(null)
   const [otpVerify, setOtpVerify] = useState(false)
   const form = useRef();

   const handleSubmit = (e) => {
      e.preventDefault();

      const SERVICE_ID = 'service_g5aojzz';
      const PUBLIC_KEY = '2RYqiqwpgyRiMwBQT';
      emailjs.sendForm(SERVICE_ID, 'template_948bk6r', form.current, PUBLIC_KEY)
         .then((result) => {
            
            toast.success('Message successfully sent.')
         }, (error) => {
            console.log(error);
            toast.error('Failed to send message.')
         });
   }

   return (
      <>
         <h2 className="head-text">Let's Connect!!</h2>
         <div className="app_inside-footer">
            <div className="app__footer-cards">

               <a className="app__footer-card p-text" href="https://www.linkedin.com/in/satish-singh-0857a3145/"
                  target='_blank' >
                  <img src={images.linkedln} />
                  <a className="p-text">Linkedln</a>
               </a>
               <a className="app__footer-card p-text" href="https://github.com/satishSingh0710" target='_blank'>
                  <img src={images.github} />
                  <a href="https://github.com/satishSingh0710" className="p-text" target='_blank'>
                     GitHub
                  </a>
               </a>
               <a className="app__footer-card" href="https://twitter.com/satishsingh0710" target='_blank'>
                  <img src={images.twitter} />
                  <a className="p-text" >
                     Twitter
                  </a>
               </a>
               <a className="app__footer-card p-text" href="https://www.instagram.com/lost_lord_07" target='_blank'>
                  <img src={images.insta} />
                  <a className="p-text" >
                     Instagram
                  </a>
               </a>
            </div>
            <div className="footer-form">
               <form ref={form} onSubmit={handleSubmit}>
                  <div><label htmlFor="name">Name</label>
                     <input type='text' name='name' id='name' required /></div>
                  <div><label htmlFor="email">Email</label>
                     <input type='email' name='email' id='email' required /></div>
                  <div><label htmlFor="message">Message</label>
                     <textarea type='text' name='message' id='message' required /></div>
                  <div><button>Send Message</button></div>
               </form>
            </div>
         </div>
      </>
   );
}
export default AppWrap(
   MotionWrap(Contact, "app__footer"),
   "contact",
   "work__primarybg"
);
