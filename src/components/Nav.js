import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../assets/styles/Nav.scss";

export default function Nav() {
  const [page, setPage] = useState("home");

  const handlePage = (value) => {

    setPage(value);

  };


  

  return (
    <div className="nav">
      <ul>
        <li>
          <NavLink to="/" onClick={(e) => handlePage("home")}>
            <h1 className={page === "home" ? "link" : "none"}> About</h1>
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" onClick={(e) => handlePage("projects")}>
            <h1 className={page === "projects" ? "link" : "none"}>Projects</h1>
          </NavLink>{" "}
        </li>
        <li>
          <NavLink to="/contact" onClick={(e) => handlePage("contact")}>
            <h1 className={page === "contact" ? "link" : "none"}>contact</h1>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
