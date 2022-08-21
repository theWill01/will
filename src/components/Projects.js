import React, {useEffect, useState} from "react";
import "../assets/styles/Layouts.scss";
export default function Projects() {
  const [fadeIn, setFadeIn] = useState(false);



  useEffect(() => {
    setFadeIn(true);

  }, []);
  return (
    <div className="projects">
      <h1 className={fadeIn ? "title" : ""}>EAT</h1>
      <h5 className={fadeIn ? "subTitle" : ""}>
        Developed & Designed From Scratch
      </h5>
    </div>
  );
}
