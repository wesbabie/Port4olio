import React from "react";

export default function About() {
  return (
    <>
      <div className="about" id="about">
        <h1 className="text-4xl" >About Me</h1>
        <div className="hero-content">
          <div>
            <p className="text-xl leading-normal">
              Hi! i’m Odunayo Fatunsi, i am a graduate of computer science from
              Achievers University, Owo, Ondo State, Nigeria.
            </p>
            <p className="text-xl leading-normal">
              I’ve always had interest in things that concerns the internet, how
              websites are made and what makes them work the way they do.
            </p>
            <p className="text-xl leading-normal">
              I gained interest in Front-End Development during my Final Year At
              the university, and i have since developed my skills to a level
              which i am proud of and intend to further develop!
            </p>
          </div>

          <img
            src={require("../images/me.png")}
            alt="boy"
            width={500}
            height={500}
          />
        </div>
      </div>
    </>
  );
}
