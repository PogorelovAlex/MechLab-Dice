import CubeContextProvider from "./context/CubeContext";
import Cube from "./components/Cube";
import CubeOptions from "./components/CubeOptions";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [dots, setDots] = useState({
    front: "1",
    back: "6",
    top: "2",
    left: "3",
    right: "5",
    bottom: "4",
  });
  const handleDotsOptions = (value) => {
    setDots(value);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <CubeContextProvider>
          <Routes>
            <Route exact path="/" element={<Cube />} />
            <Route
              exact
              path="/options"
              element={
                <CubeOptions
                  dots={dots}
                  handleDotsOptions={handleDotsOptions}
                />
              }
            />
          </Routes>
        </CubeContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
