import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import "./fiveDotFace.css";

function FiveDotFace() {
  return (
    <div className="five-dots">
      <span>
        <CircleIcon />
      </span>
      <span>
        <CircleIcon />
      </span>
      <span>
        <CircleIcon />
      </span>
      <span>
        <CircleIcon />
      </span>
      <span>
        <CircleIcon />
      </span>
    </div>
  );
}

export default FiveDotFace;
