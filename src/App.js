import React, { useEffect, useState } from "react";
import "./App.scss";
import Nav from "./components/Nav";
import FirstLayout from "./components/FirstLayout";
import SecondLayout from "./components/SecondLayout";
import ThirdLayout from "./components/ThirdLayout";
import Footer from "./components/Footer";


function App() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="App">

      <main>
        <header className={scroll ? "scrolled" : "nav-wrapper"}>
          <Nav />
        </header>

        <section className="firstLayout" id="home">
          <FirstLayout />
        </section>
        <section className="secondLayout" id="pro">
          <SecondLayout />
        </section>
        <section className="thirdLayout" id="contact">
          <ThirdLayout />
        </section>

        <section className="footer" >
          <Footer />
        </section>
      </main>
    </div>
  );
}

export default App;
