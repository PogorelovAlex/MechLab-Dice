import React from 'react'
import CircleIcon from "@mui/icons-material/Circle";
import './twoDotFace.css'

function TwoDotFace() {
  return (
    <div className="two-dots">
          <span >
              <CircleIcon />
            </span>
            <span>
              <CircleIcon />
            </span>
    </div>
  )
}

export default TwoDotFace