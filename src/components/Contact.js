import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Right from "../assets/images/right-arrow.png";
export default function Contact() {
  const [isIn, setIsIn] = useState(false);

  const [inputs, setInputs] = useState({
    fullName: "",
    email: "",
    message: "",
  });

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
        <fieldset>
          <legend>name</legend>
          <input
            type="text"
            placeholder="full name"
            name="fullName"
            value={inputs.fullName}
            onChange={handleChange}
          />
        </fieldset>

        <fieldset>
          <legend>email</legend>

          <input
            type="email"
            placeholder="email"
            name="email"
            value={inputs.email}
            onChange={handleChange}
          />
        </fieldset>
        <fieldset className="msg">
          <legend>message</legend>

          <textarea
            placeholder="Leave a message"
            name="message"
            value={inputs.message}
            onChange={handleChange}
          />
        </fieldset>
        <Link className="btn" to="#" onClick={submit}>
          <h5 >LET'S CONNECT</h5>
          <img className="right" src={Right} alt="*" />
        </Link>
      </form>
    </div>
  );
}
