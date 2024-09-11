// src/Container.js

import React from "react";
import BluePhantomCard from "../BluePhantomCard/BluePhantomCard";
import "./Container.css";

const Container = () => {
  return (
    <div className="container">
      <div className="head">
        <h1>Our latest Case Studies</h1>
      </div>
      <BluePhantomCard />
    </div>
  );
};

export default Container;
