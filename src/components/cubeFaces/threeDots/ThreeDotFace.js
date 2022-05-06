import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import "./threeDotFace.css";

function ThreeDotFace() {
  return (
    <div className="three-dots">
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

export default ThreeDotFace;
