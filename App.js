// App.js

import React, { useState } from "react";
import CommandForm from "./CommandForm";
import ReportOutput from "./ReportOutput";

const App = () => {
  const [position, setPosition] = useState({ x: null, y: null });
  const [direction, setDirection] = useState(null);
  const [isPlaced, setIsPlaced] = useState(false);

  const handlePlace = (x, y, direction) => {
    setPosition({ x: parseInt(x), y: parseInt(y) });
    setDirection(direction.toUpperCase());
    setIsPlaced(true);
  };

  const handleMove = () => {
    if (direction === "NORTH") {
      setPosition((prevPosition) => ({
        ...prevPosition,
        y: prevPosition.y + 1,
      }));
    } else if (direction === "SOUTH") {
      setPosition((prevPosition) => ({
        ...prevPosition,
        y: prevPosition.y - 1,
      }));
    } else if (direction === "EAST") {
      setPosition((prevPosition) => ({
        ...prevPosition,
        x: prevPosition.x + 1,
      }));
    } else if (direction === "WEST") {
      setPosition((prevPosition) => ({
        ...prevPosition,
        x: prevPosition.x - 1,
      }));
    }
  };

  const handleLeft = () => {
    const directions = ["NORTH", "WEST", "SOUTH", "EAST"];
    const currentDirectionIndex = directions.indexOf(direction);
    const newDirectionIndex = (currentDirectionIndex + 1) % 4;
    setDirection(directions[newDirectionIndex]);
  };

  const handleRight = () => {
    const directions = ["NORTH", "WEST", "SOUTH", "EAST"];
    const currentDirectionIndex = directions.indexOf(direction);
    const newDirectionIndex = (currentDirectionIndex - 1 + 4) % 4;
    setDirection(directions[newDirectionIndex]);
  };

  const handleReport = () => {
    console.log(`Current Position: (${position.x}, ${position.y})`);
    console.log(`Current Direction: ${direction}`);
  };

  return (
    <div className="app">
      <h1>Toy Robot Simulation</h1>
      <CommandForm
        onPlace={handlePlace}
        onMove={handleMove}
        onLeft={handleLeft}
        onRight={handleRight}
        onReport={handleReport}
        isPlaced={isPlaced}
      />
      <ReportOutput position={position} direction={direction} />
    </div>
  );
};

export default App;
