import { React, useContext } from "react";
import "./cubeOptions.css";
import {CubeContext} from '../context/CubeContext';
import { Form} from "react-bootstrap";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function CubeOptions() {
     const { dots,updateDots } = useContext(CubeContext);
  const [newCube, setNewCube] = useState(dots);
   
  const onInputChange = (e) => {
    setNewCube({ ...newCube, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    updateDots(newCube);
  };
  return (
    <div className="wrapper-options">
      <div className="container">
        <div className="cube-options" id="cube">
          <Form onSubmit={handleSubmit}>
            {Object.keys(dots).map((item) => {
              return (
                <div key={`${item}`} className={item}>
                  <Form.Control
                    key={item}
                    type="text"
                    name={item}
                    value={newCube[item]}
                    onChange={(e) => onInputChange(e)}
                    required
                  />
                </div>
              );
            })}
          </Form>
        </div>
      </div>
      <div className="footer-options">
        <Button
          sx={{
            width: "150px",
            height: "50px",
            marginRight: "35px",
            fontSize: "22px",
            backgroundColor: "#64ae93",
          }}
          variant="contained"
          onClick={handleSubmit}
        >
          SAVE
        </Button>
        <Link style={{ display: "block", textDecoration: "none" }} to={`/`}>
          <Button
            sx={{
              width: "150px",
              height: "50px",
              marginRight: "35px",
              fontSize: "22px",
              backgroundColor: "#64ae93",
            }}
            variant="contained"
          >
            BACK
          </Button>
        </Link>
      </div>
    </div>
  );
}
