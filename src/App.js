import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./App.scss";
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Wave from "./assets/images/wave(1).svg";
import Grass from "./assets/images/wav3.svg";
import Bird from "./assets/images/bird.gif";

function App() {
  const [element, setElement] = useState(false);

  useEffect(() => {
    setElement(true);
  }, []);

  return (
    <div className="App">
      <main className="w-full h-full flex align-middle justify-center">
        <section className="box flex">
          <div className="anchor1">
            <Link to="#" className="anchors">
              <span className="git">
                <h3> GitHub</h3>
              </span>
            </Link>
            <Link to="#" className="anchors">
              <span className="linkedIn">
                <h3>Linked-in</h3>
              </span>
            </Link>
          </div>

          <section className="container">
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
                <h1 className="flex text-2xl">Will Albert</h1>
                <p>Developer & Designer</p>
              </div>
              <div className="display">
                <div className="canvas">
                  <div className="birds">
                    <img src={Bird} alt="#" />
                    <img src={Bird} alt="#" />
                    <img src={Bird} alt="#" />
                    <img src={Bird} alt="#" />
                    <img src={Bird} alt="#" />
                    <img src={Bird} alt="#" />
                  </div>
                  <div className={element ? "true" : "false"}></div>
                  <div className="mountain">
                    <div className="hill">
                      <div className="hillGrass1">
                        <img src={Wave} alt="#" />
                        <img src={Wave} alt="#" />
                        <img src={Wave} alt="#" />
                        <img src={Wave} alt="#" />
                        <img src={Wave} alt="#" />
                        <img src={Wave} alt="#" />
                        <img src={Wave} alt="#" />
                      </div>
                      <div className="hillWater">
                        <div className="river">
                          <div className="flow"></div>
                          <div className="flow"></div>
                          <div className="flow"></div>
                          <div className="flow"></div>
                          <div className="flow"></div>
                          <div className="flow"></div>
                        </div>
                        <div className="splash">
                          <div className="drops"></div>
                          <div className="drops"></div>
                          <div className="drops"></div>
                          <div className="drops"></div>
                          <div className="drops"></div>
                        </div>
                        <div className="waves">
                          <div className="wave1">
                            <div></div>
                            <div></div>
                          </div>
                        </div>
                      </div>
                      <div className="hillGrass2">
                        {" "}
                        <img src={Wave} alt="#" />
                        <img src={Wave} alt="#" />
                      </div>
                    </div>
                    <div className="valley">
                      <div className="valleyGrass1">
                        <img src={Wave} alt="#" />
                        <img src={Wave} alt="#" />
                        <img src={Wave} alt="#" />
                        <img src={Wave} alt="#" />
                        <img src={Wave} alt="#" />
                        <img src={Wave} alt="#" />
                        <img src={Wave} alt="#" />
                      </div>
                      <div className="valleyWater">
                        <div className="rush">
                          <hr />
                          <hr />
                          <hr />
                          <hr />
                          <hr />
                          <hr />
                          <hr />
                          <hr />
                          <hr />
                          <hr />
                          <hr />
                          <hr />
                          <hr />
                          <hr />
                          <hr />
                          <hr />
                          <hr />
                          <hr />
                          <hr />
                          <hr />
                          <hr />
                          <hr />
                          <hr />
                          <hr />
                          <hr />
                          <hr />
                          <hr />
                          <hr />
                          <hr />
                          <hr />
                          <hr />
                          <hr />
                          <hr />
                          <hr />
                          <hr />
                          <hr />
                          <hr />
                          <hr />
                          <hr />
                          <hr />
                          <hr />
                          <hr />
                          <hr />
                          <hr />
                        </div>{" "}
                        <div className="vw">
                          <div className="flow"></div>
                          <div className="flow"></div>
                          <div className="flow"></div>
                          <div className="flow"></div>
                          <div className="flow"></div>
                          <div className="flow"></div>
                        </div>
                        <div className="vsplash">
                          <div className="drops"></div>
                          <div className="drops"></div>
                          <div className="drops"></div>
                          <div className="drops"></div>
                          <div className="drops"></div>
                        </div>
                      </div>
                      <div className="valleyGrass2">
                        <img src={Wave} alt="#" />
                        <img src={Wave} alt="#" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cover">
                  <Routes>
                    <Route path="/" element={<About />} />

                    <Route path="/projects" element={<Projects />} />

                    <Route path="/contact" element={<Contact />} />
                  </Routes>
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;
