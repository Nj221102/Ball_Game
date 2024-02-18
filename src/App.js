import React, { useState } from "react";
import "./App.css";

const BallButton = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [win_count, setWin_count] =  useState(0)
    
  function handleClick() {
    window.alert("you win!");
  }
  const onWin = () => {
    setWin_count(win_count+1);
    moveBall();
  }

  const moveBall = () => {
    const newX = Math.floor(Math.random() * (400 - 50)) + 1;
    const newY = Math.floor(Math.random() * (400 - 50)) + 1;
    setPosition({ x: newX, y: newY });
  };

  return (
    <div className="body">
      <h1>Click ball to win!</h1>
        <div className="ball-container">
      <button
        className="ball"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
        onMouseEnter={moveBall}
        onClick={handleClick && onWin}
        
      ></button>
    </div>
    <h2>Win counter : {win_count}</h2>
    </div>
    
  );
};

export default BallButton;