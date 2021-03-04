import { useState } from "react";

export const Cell = ({ value }) => {
  const [color, setColor] = useState(value);

  return <div
    className="cell"
    style={{ backgroundColor: color }}
    onClick={() => setColor("#333")}
  />;
};