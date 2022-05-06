import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import "./fourDotFace.css";

function FourDotFace() {
  return (
    <div className="four-dots">
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

export default FourDotFace;
