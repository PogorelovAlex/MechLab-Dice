import { React, useRef,useContext} from "react";
import "./cube.css";
import {CubeContext} from '../context/CubeContext';
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";


import OneDotFace from "./cubeFaces/oneDot/OneDotFace";
import TwoDotFace from "./cubeFaces/twoDots/TwoDotFace";
import ThreeDotFace from "./cubeFaces/threeDots/ThreeDotFace";
import FourDotFace from "./cubeFaces/fourDots/FourDotFace";
import FiveDotFace from "./cubeFaces/fiveDots/FiveDotFace";
import SixDotFace from "./cubeFaces/sixDots/SixDotFace";

export default function Cube() {
  const { dots } = useContext(CubeContext);
  const cube = useRef(null);

  const angleArray = [
    [0, 0, 0],
    [-310, -362, -38],
    [-400, -320, -2],
    [135, -217, -88],
    [-224, -317, 5],
    [-47, -219, -81],
    [-133, -360, -53],
  ];

  const handlerCubeAnimation = () => {
    cube.current.style.animation = "animate 0.2s linear";
    const randomAngle = Math.floor(Math.random() * 6) + 1;
    cube.current.style.transform =
      "rotateX(" +
      angleArray[randomAngle][0] +
      "deg) rotateY(" +
      angleArray[randomAngle][1] +
      "deg) rotateZ(" +
      angleArray[randomAngle][2] +
      "deg)";
    cube.current.style.transition = "0.2s linear";
    cube.current.style.animation = "";
  };
  return (
    <div className="wrapper">
      <div className="container">
        <div className="cube" ref={cube} id="cube">
          {Object.keys(dots).map((item) => {
            let dotFace = null;
            switch (dots[item]) {
              case '1':
                dotFace = <OneDotFace />;
                break;
              case "2":
                dotFace = <TwoDotFace />;
                break;
              case "3":
                dotFace = <ThreeDotFace />;
                break;
              case "4":
                dotFace = <FourDotFace />;
                break;
              case "5":
                dotFace = <FiveDotFace />;
                break;
              case "6":
                dotFace = <SixDotFace />;
                break;

              default:
                dotFace = "Invalid Number";
            }
            return <div key={`${item}`} className={item}>{dotFace}</div>;
          })}
        </div>
      </div>
      <div className="footer">
        <Button
          sx={{
            width: "150px",
            height: "50px",
            marginRight: "35px",
            fontSize: "22px",
            backgroundColor: "#64ae93",
          }}
          variant="contained"
          onClick={handlerCubeAnimation}
        >
          ROLL
        </Button>
        <Link
          style={{ display: "block", textDecoration: "none" }}
          to={`/options`}
        >
          <IconButton
            sx={{
              marginLeft: "25px",
              fontSize: "52px",
              backgroundColor: "#64ae93",
            }}
          >
            <SettingsIcon fontSize="inherit" />
          </IconButton>
        </Link>
      </div>
    </div>
  );
}
