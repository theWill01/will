import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Right from "../assets/images/right-arrow.png";
import emailjs from "@emailjs/browser";
export default function Contact() {
  const [isIn, setIsIn] = useState(false);
  const [current, setCurrent] = useState(false);
  const [inputs, setInputs] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const toggle = () => setCurrent((prevCurrent) => !prevCurrent);

  const handleChange = (e) => {
    e.preventDefault();
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  function submit(e) {
    e.preventDefault();
    const formData = [
      {
        names: inputs.fullName,
        email: inputs.email,
        message: inputs.message,
      },
    ];

    emailjs
      .sendForm(
        "portfolio_service",
        "contact_form",
        formData,
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

      <form>
        <div className="inputBox">
          <input
            type="text"
            name="user_name"
            value={inputs.fullName}
            onChange={handleChange}
            onClick={toggle}
            required="required"
          />
          <span>full name</span>
        </div>

        <div className="inputBox">
          <input
            type="email"
            name="user_email"
            value={inputs.email}
            onChange={handleChange}
            required="required"
          />

          <span>email</span>
        </div>
        <div className="textBox">
          <textarea
            name="message"
            value={inputs.message}
            onChange={handleChange}
            required="required"
          />

          <span>
            <h3 >Leave a message</h3>
          </span>
        </div>
        <Link className="btn" to="#" onClick={submit}>
          <h5>LET'S CONNECT</h5>
          <img className="right" src={Right} alt="*" />
        </Link>
      </form>
    </div>
  );
}
