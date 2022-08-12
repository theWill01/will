import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Layouts.scss";
import Project from "../assets/images/project.png";
export default function SecondLayout() {

  return (
    <div className="second">
      <div className="belt">
        <h4>PROJECTS </h4>
      </div>
      <section className="project flex align-middle justify-center">
        <span className="title"><img src={Project} alt="#" /></span>
        <span className="meat">
          <p>
            This project is a website where the users can order food from anywhere to be brought to wherever they are. i built this website from scratch with React js and sass.
            feel free to check out the code on github.
          </p>
        </span>
        <Link to="#" className="code">
          view code on github
        </Link>
      </section>

    </div>
  );
}
