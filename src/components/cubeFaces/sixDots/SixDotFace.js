import React from 'react'
import CircleIcon from "@mui/icons-material/Circle";
import './sixDotFace.css'

function SixDotFace() {
  return (
    <div className="six-dots">
           <pre className="firstPre">
            <span  >
              <CircleIcon />
            </span>
            <span  >
              <CircleIcon />
            </span>
            <span  >
              <CircleIcon />
            </span>
                  </pre>
          <br></br>
          <pre className="secondPre">
            <span  >
              <CircleIcon />
            </span>
            <span  >
              <CircleIcon />
            </span>
            <span  >
              <CircleIcon />
            </span>
          </pre> 
    </div>
  )
}

export default SixDotFace