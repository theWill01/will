import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Layouts.scss";
import BG from "../assets/images/white.jpg";

export default function FirstLayout() {

  const connect = (e) => {
    e.preventDefault();
    window.location.replace('/#contact');
  }



  return (
    <section className="first">
      <div className="banner w-full">
        <img src={BG} alt="background" id="bgImg" className="w-full " />
        <div className="hero">WELCOME TO MY PORTFOLIO</div>
        <div className="card">
          <div className="about">
            <h4>About Me</h4>
          </div>
          <p>
            My name is will and i am a web Developer with over 2+ years of
            experience designing, building and customizing websites,
            specifically with the React Framework.
          </p>
          <p>
            I have a passion for building responsive, engaging websites that
            focus on user experience, content and design. . I also understand
            the web and how to apply the best SEO practices, and i stay up to
            date with the latest digital solutions.
          </p>
        </div>
        <Link to="#" onClick={connect}>
          <div className="connect">Let's Connect</div>
        </Link>
        <div className="card2">
          <div className="skills">
            <h2>SKILLS</h2>
          </div>

          <ul>
            <li>HTML </li>
            <li>CSS/SASS </li>
            <li>TAILWINDCSS </li>
            <li>JAVASCRIPT </li>
            <li>REACT.JS </li>
          </ul>
        </div>
  
      </div>
    </section>
  );
}
