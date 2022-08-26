import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Right from "../assets/images/right-arrow.png";
import emailjs from "@emailjs/browser";
export default function Contact() {
  const [isIn, setIsIn] = useState(false);
  const [current, setCurrent] = useState(false);
  const form = useRef();

  const toggle = () => setCurrent((prevCurrent) => !prevCurrent);


  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "portfolio_service",
        "contact_form",
        form.current,
        "3v9gWjsroqSjdntsT"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  useEffect(() => {
    setIsIn(true);
  }, []);
  return (
    <div className="contact">
      <p className={isIn ? "ad" : "ad2"}>
        i am always open to take on freelance projects{" "}
      </p>

      <form ref={form}>
        <div className="inputBox">
          <input
            type="text"
            name="user_name"
      
   
            onClick={toggle}
            required="required"
          />
          <span>full name</span>
        </div>

        <div className="inputBox">
          <input
            type="email"
            name="user_email"
  
            required="required"
          />

          <span>email</span>
        </div>
        <div className="textBox">
          <textarea
            name="message"
 
            required="required"
          />

          <span>
            <h3>Leave a message</h3>
          </span>
        </div>
        <Link className="btn" to="#" onClick={sendEmail}>
          <h5>LET'S CONNECT</h5>
          <img className="right" src={Right} alt="*" />
        </Link>
      </form>
    </div>
  );
}
