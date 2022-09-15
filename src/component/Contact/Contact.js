import React, { useRef } from "react"
import contact1 from "./contact1.png"
import "./Contact.css"
import emailjs from 'emailjs-com'
import { FiFacebook, FiInstagram, FiLinkedin, FiGithub } from 'react-icons/fi'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template', form.current, 'user_aSGq1vSpz4lqdmnqOqI8M')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  };
  return (
    <>
      <section className='Contact' id='contact'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>CONTACT</h4>
            <h1>Contact With Me</h1>
          </div>

          <div className='content d_flex'>
            <div className='left'>
              <div className='box box_shodow'>
                <div className='img'>
                  <img src={contact1} alt='' />
                </div>
                <div className='details'>
                  <h1>Gaurav Jangam</h1>
                  <p>Software Developer</p>
                  <p>I am available for freelance work. Connect with me via.</p> <br />
                  <p>Phone: 8856890678</p>
                  <p>Email: gauravjangam444@gmail.com</p> <br />
                  <span>FIND WITH ME</span>
                  <div className='button cbutton f_flex'>
                    <a target='_blank' rel='noreferrer' href='https://github.com/gaurav-jangam/'>
                      <button className='btn_shadow'>
                        <FiGithub size={20} />
                      </button>
                    </a>
                    <a target='_blank' rel='noreferrer' href='https://www.facebook.com/gaurav.jangam.1/'>
                      <button className='btn_shadow'>
                        <FiInstagram size={20} />
                      </button>
                    </a>
                    <a target='_blank' rel='noreferrer' href='https://www.instagram.com/im_gauravvvv/'>
                      <button className='btn_shadow'>
                        <FiLinkedin size={20} />
                      </button>
                    </a>
                    <br />
                    <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/gaurav-jangam/'>
                      <button className='btn_shadow'>
                        <FiFacebook size={20} />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className='right box_shodow'>
              <form ref={form} onSubmit={sendEmail}>
                <div className='f_flex'>
                  <div className='input row'>
                    <span>YOUR NAME</span>
                    <input type='text' name='fullname' />
                  </div>
                  <div className='input row'>
                    <span>PHONE NUMBER </span>
                    <input type='number' name='phone' />
                  </div>
                </div>
                <div className='input'>
                  <span>EMAIL </span>
                  <input type='email' name='email' />
                </div>
                <div className='input'>
                  <span>SUBJECT </span>
                  <input type='text' name='subject' />
                </div>
                <div className='input'>
                  <span>YOUR MESSAGE </span>
                  <textarea cols='30' rows='10' name='message'></textarea>
                </div>
                <button className='btn_shadow'>
                  SEND MESSAGE <i className='fa fa-long-arrow-right'></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
