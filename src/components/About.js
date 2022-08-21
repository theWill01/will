import React, {useState, useEffect} from "react";
import "../assets/styles/Layouts.scss";


export default function About() {

  const [enter, setEnter] = useState(false);

  useEffect(() => {
    setEnter(true);
  

  }, [])
  
  return (
    <div className="about">
      <section className={enter ? "first" : "current"}>
        <p>
          I am a web Developer with years of experience designing,
          building and customizing websites, specifically with the  React
          Framework.
        </p>

 
      </section>
    </div>
  );
}
