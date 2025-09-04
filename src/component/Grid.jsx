import React from "react";
import Typewriter from "typewriter-effect";
import "./grid.css";

import leftTop from "../ASSETS/VEG.jpg";
import leftBottom from "../ASSETS/HOME2.jpg";
import rightImg from "../ASSETS/RIGHT.jpg";

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Left Column (Text with Typewriter) */}
        <div className="about-text">
          <h5>ABOUT US</h5>
          <h2>
            Welcome To <span>Bafna Resort</span>
          </h2>

          <div className="about-typewriter">
            <Typewriter
              options={{
                strings: [
                  "Where comfort meets elegance. Nestled in a serene location, our resort is designed to offer a luxurious yet homely experience for every guest. With modern rooms, a pure veg restaurant, and world-class facilities, we ensure your stay is truly memorable."
                ],
                autoStart: true,
                loop: true,
                delay: 40,
              }}
            />
          </div>
        </div>

        {/* Right Column (Image Grid) */}
        <div className="about-images-grid">
          <div className="left-stack">
            <img src={leftTop} alt="Resort Left Top" />
            <img src={leftBottom} alt="Resort Left Bottom" />
          </div>
          <div className="right-vertical">
            <img src={rightImg} alt="Resort Right Vertical" />
          </div>
        </div>
      </div>
    </section>
  );
}
