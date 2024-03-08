import React from "react";

const ReportOutput = ({ position, direction }) => {
  return (
    <div className="report-output">
      <h2>Report Output</h2>
      <p>
        Position: {position.x}, {position.y}
      </p>
      <p>Direction: {direction}</p>
    </div>
  );
};

export default ReportOutput;
