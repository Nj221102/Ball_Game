import React, { useState } from "react";
import "./App.css";

const BallButton = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  function handleClick() {
    window.alert("you win!");
  }

  const moveBall = () => {
    const newX = Math.floor(Math.random() * (400 - 50)) + 1;
    const newY = Math.floor(Math.random() * (400 - 50)) + 1;
    setPosition({ x: newX, y: newY });
  };

  return (
    <div className="ball-container">
      <button
        className="ball"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
        onMouseEnter={moveBall}
        onClick={handleClick}
      ></button>
    </div>
  );
};

export default BallButton;