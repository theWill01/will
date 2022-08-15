import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./App.scss";
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <main className="w-full h-full flex align-middle justify-center">
        <section className="box flex">
          <div className="anchor1 flex justify-between flex-col">
            <Link to="#" className="git">
              <h3> GitHub</h3>
            </Link>
            <Link to="#">
              <h3>LinkedIn</h3>
            </Link>
          </div>

          <div className="container">
            <div className="anchor2 flex justify-between">
              <Link to="/">
                <h3>Will Albert</h3>
              </Link>
              <Link to="#" className="twitter">
                <h3> Twitter</h3>
              </Link>
            </div>
            <div className="content flex">
         
              <div className="navigation">
                <Nav />
              </div>
              <div className="head">
                <h1>Hello, i'm Will'</h1>
              </div>
              <div className="display">
                <Routes>
                  <Route path="/" element={<About />} />

                  <Route path="/projects" element={<Projects />} />

                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
