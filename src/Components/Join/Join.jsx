import React from 'react'
import { useRef } from 'react'
import "./Join.css"
import emailjs from '@emailjs/browser';

function Join() {
    const form=useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_t5vuy2o', 'template_2gpgy2v', form.current, 'VZ4veh8ka7dXrd213')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <div>
      <div  id="join-us" className="join">
        <div className="left-j">
            <hr />
            <div>
                <span className='stroke-text'>Ready To </span>
                <span>Level Up</span>
            </div>
            <div>
                <span>Your Body </span>
                <span className='stroke-text' >With Us</span>
            </div>
        </div>
        <div className="join-r"></div>
        <form  ref={form} action="" className="email-container" onSubmit={sendEmail}>
            <input type="text" className='' name='user_email' placeholder='Enter Your Email adresss' />
            <button className='btn btn-j'>Join Now </button>

        </form>

      </div>
    </div>
  )
}

export default Join
