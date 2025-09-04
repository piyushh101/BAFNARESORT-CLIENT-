import React from "react";
import "./NavbarAbout.css";

import img1 from "../ASSETS/HELLO1.jpg";
import img2 from "../ASSETS/HELLO3.jpg";
import img3 from "../ASSETS/HELLO4.jpg";
import img4 from "../ASSETS/VEG.jpg";
import nightImg from "../ASSETS/HELLO2.jpg";

export default function NavbarAbout() {
  return (
    <div className="about-page">
      {/* 1) Full-bleed night hero */}
      <section
        className="about-hero"
        style={{ backgroundImage: `url(${nightImg})` }}
      >
        <div className="about-hero-overlay">
          <h1>About Us</h1>
          <p>Luxury &amp; Comfort in the Heart of Jagdalpur</p>
        </div>
      </section>

      {/* 2) Content container */}
      <section className="about-content">
        <div className="about-grid">
          {/* Left: text */}
          <div className="about-text">
            <h2>Bafna Resort</h2>
            <p>
              Welcome to <strong>Bafna Resort</strong>, a perfect blend of
              luxury and comfort in the heart of Jagdalpur. With{" "}
              <strong>45 well-appointed rooms</strong> including Deluxe,
              Superior, and Executive categories, our resort is designed to
              cater to leisure travelers, families, and business guests alike.
            </p>

            <p>
              Our property features the <strong>Aahaar Pure Veg Restaurant</strong>, a{" "}
              <strong>Banquet Hall</strong> for events, and a spacious{" "}
              <strong>Party Lawn</strong>. Every detail is thoughtfully crafted
              to ensure your stay is truly memorable.
            </p>

            <h3>Why Choose Us?</h3>
            <ul>
              <li>🛏️ 45 Modern Rooms (Deluxe, Superior &amp; Executive)</li>
              <li>🍴 Aahaar Pure Veg Restaurant</li>
              <li>🎉 Banquet Hall for events &amp; conferences</li>
              <li>🌿 Party Lawn for celebrations</li>
              <li>📍 Prime location in Jagdalpur</li>
            </ul>

            <p>
              We redefine hospitality with spacious rooms, elegant interiors,
              warm service, and modern amenities.
            </p>
          </div>

          {/* Right: image grid with hover effects */}
          <div className="about-images">
            {[img1, img2, img3, img4].map((src, i) => (
              <figure className="image-card" key={i} aria-label="gallery image">
                <img src={src} alt="" />
              </figure>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
