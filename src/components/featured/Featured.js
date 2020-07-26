import React from "react";
import Carrousel from "./Carrousel";
import TimeUtil from "./TimeUtil";

const Featured = () => {
  return (
    <div style={{ position: "relative" }}>
      <Carrousel />
      <div className="artist_name">
        <div className="wrapper">Enrique Iglesias</div>
      </div>
      <TimeUtil />
    </div>
  );
};

export default Featured;
