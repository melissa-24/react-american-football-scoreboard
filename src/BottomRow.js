import React, { useState } from "react";
import "./App.css";

const BottomRow = () => {
  const [balls] = useState(" ");
  const [strikes] = useState(" ");
  const [outs] = useState(" ");

  

  return (
    <div className="bottomRow">
      <div className="balls">
        <h3 className="balls_title">Balls</h3>
        <div className="balls_value">{balls}</div>
      </div>
      <div className="strikes">
        <h3 className="strikes_title">Strikes</h3>
        <div className="strikes_value">{strikes}</div>
      </div>
      <div className="outs">
        <h3 className="outs_title">Outs</h3>
        <div className="outs_value">{outs}</div>
      </div>
    </div>
  );
};

export default BottomRow;
