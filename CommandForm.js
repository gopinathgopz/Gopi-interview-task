import React, { useState } from "react";

const CommandForm = ({
  onPlace,
  onMove,
  onLeft,
  onRight,
  onReport,
  isPlaced,
}) => {
  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const [direction, setDirection] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const command = e.target.elements.command.value.toUpperCase();
    switch (command) {
      case "PLACE":
        onPlace(x, y, direction);
        break;
      case "MOVE":
        onMove();
        break;
      case "LEFT":
        onLeft();
        break;
      case "RIGHT":
        onRight();
        break;
      case "REPORT":
        onReport();
        break;
      default:
        console.log("Invalid command");
    }
    setX("");
    setY("");
    setDirection("");
  };

  return (
    <div className="command-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="X"
          value={x}
          onChange={(e) => setX(e.target.value)}
        />
        <input
          type="text"
          placeholder="Y"
          value={y}
          onChange={(e) => setY(e.target.value)}
        />
        <input
          type="text"
          placeholder="Direction"
          value={direction}
          onChange={(e) => setDirection(e.target.value)}
        />
        <input type="text" placeholder="Command" name="command" />
        <button type="submit" disabled={!isPlaced}>
          Execute Command
        </button>
      </form>
    </div>
  );
};

export default CommandForm;
