// src/BluePhantomCard.js

import React from "react";
import "./BluePhantomCard.css"; // Import the updated CSS file

const BluePhantomCard = () => {
  return (
    <div className="card-container">
      {/* Each card will have a sticky position */}
      <div className="card">
        <div className="left-section">
          <h4>HEALTHCARE</h4>
          <h1>CAE Blue Phantom</h1>
          <p>
            CAE Blue Phantom is a cutting-edge simulation technology designed to
            revolutionize medical training and education. Utilizing advanced
            virtual reality and artificial intelligence, CAE Blue Phantom
            provides.
          </p>
          <div className="info">
            <p>
              <strong>Industry:</strong> Wellness & Fitness
            </p>
            <p>
              <strong>Country:</strong> Germany, Issum
            </p>
          </div>
          
          <button className="read-case-button">READ CASE</button>
        </div>
        <div
          className="right-section"
          style={{
            backgroundImage: `url('./assets/case.jpg')`, // Update the path to your background image
            backgroundSize: "contain",
            backgroundPosition: "center",
            height: "100%",
          }}
        ></div>
      </div>
      {/* Repeat more cards as needed */}
      <div className="card">
        
      <div className="left-section">
          <h4>HEALTHCARE</h4>
          <h1>CAE Blue Phantom</h1>
          <p>
            CAE Blue Phantom is a cutting-edge simulation technology designed to
            revolutionize medical training and education. Utilizing advanced
            virtual reality and artificial intelligence, CAE Blue Phantom
            provides.
          </p>
          <div className="info">
            <p>
              <strong>Industry:</strong> Wellness & Fitness
            </p>
            <p>
              <strong>Country:</strong> Germany, Issum
            </p>
          </div>
          
          <button className="read-case-button">READ CASE</button>
        </div>
        <div
          className="right-section"
          style={{
            backgroundImage: `url('./assets/case.jpg')`, // Update the path to your background image
            backgroundSize: "contain",
            backgroundPosition: "center",
            height: "100%",
          }}
        ></div>
      </div>
      <div className="card">
      <div className="left-section">
          <h4>HEALTHCARE</h4>
          <h1>CAE Blue Phantom</h1>
          <p>
            CAE Blue Phantom is a cutting-edge simulation technology designed to
            revolutionize medical training and education. Utilizing advanced
            virtual reality and artificial intelligence, CAE Blue Phantom
            provides.
          </p>
          <div className="info">
            <p>
              <strong>Industry:</strong> Wellness & Fitness
            </p>
            <p>
              <strong>Country:</strong> Germany, Issum
            </p>
          </div>
          
          <button className="read-case-button">READ CASE</button>
        </div>
        <div
          className="right-section"
          style={{
            backgroundImage: `url('./assets/case.jpg')`, // Update the path to your background image
            backgroundSize: "contain",
            backgroundPosition: "center",
            height: "100%",
          }}
        ></div>
      </div>
    </div>
  );
};

export default BluePhantomCard;
