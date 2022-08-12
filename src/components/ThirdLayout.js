import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Map from "../assets/images/remote.png";
import "../assets/styles/Layouts.scss";
import RightArrow from "../assets/images/right-arrow.png";
export default function ThirdLayout() {

  const YOUR_SERVICE_ID = "portfolio_service";
  const YOUR_TEMPLATE_ID = "contact_form";
  const YOUR_PUBLIC_KEY = "3v9gWjsroqSjdntsT";

  const [inputs, setInputs] = useState({
    from_name: "",
    user_email: "",
    message: "",
  });

  const handleInputs = (e) => {
    e.persist();
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  }
  const sendEmail = (e) => {
    e.preventDefault();

    const formData = {
      from_name: inputs.from_name,
      user_email: inputs.user_email,
      message: inputs.message,
    };

        emailjs
          .sendForm(
            YOUR_SERVICE_ID,
            YOUR_TEMPLATE_ID,
            formData,
            YOUR_PUBLIC_KEY
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

  return (
    <section className="third">
      <div className="belt">
        <h4>CONTACT </h4>
      </div>

      <div className="inner">
        <div className="map">
          <div className="ripple1">
            <div className="mid"></div>
          </div>

          <div className="ripple2">
            <div className="mid"></div>
          </div>

          <div className="ripple3">
            <div className="mid"></div>
          </div>

          <div className="ripple4">
            <div className="mid"></div>
          </div>
          <div className="ripple5">
            <div className="mid"></div>
          </div>
          <div className="ripple6">
            <div className="mid"></div>
          </div>
          <div className="ripple7">
            <div className="mid"></div>
          </div>
          <img src={Map} alt="map" id="map" />
        </div>

        <div className="contact">
          <form className="contact-form"  onSubmit={()=>sendEmail}>
            <fieldset className="input">
              <legend className="leg">Name</legend>
              <input
                placeholder="name"
                className="inputClass"
                name="from_name"
                value={inputs.from_name}
                onChange={() => handleInputs()}
              />
            </fieldset>

            <fieldset className="input">
              <legend className="leg">Email</legend>
              <input
                className="inputClass"
                placeholder="email"
                name="user_email"
                value={inputs.user_email}
                onChange={() => handleInputs()}
              />
            </fieldset>

            <fieldset className="msg">
              <legend className="leg">Message</legend>
              <textarea
                rows="6"
                placeholder="leave a message"
                className="msgInput"
                name="message"
                value={inputs.message}
                onChange={() => handleInputs()}
              />
            </fieldset>

            <button
              type="submit"
              className="button"
              style={{ textDecoration: "none" }}
            >
              <h2>Let's Connect </h2>
              <img src={RightArrow} alt="#" id="rightArrow" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
