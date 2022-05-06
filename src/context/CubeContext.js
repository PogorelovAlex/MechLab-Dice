import { createContext, useEffect, useState } from "react";

export const CubeContext = createContext();

const CubeContextProvider = (props) => {
  const [dots, setDots] = useState({
    front: "1",
    back: "6",
    top: "2",
    left: "3",
    right: "5",
    bottom: "4",
  });
  useEffect(() => {
    setDots(JSON.parse(localStorage.getItem("dots")));
  }, []);

  useEffect(() => {
    if (localStorage.getItem("dots") === null) {
      localStorage.setItem("dots", JSON.stringify(dots));
    }
  }, []);

  const updateDots = (value) => {
    setDots(value);
    localStorage.setItem("dots", JSON.stringify(value));
  };

  return (
    <CubeContext.Provider
      value={{
        dots,
        updateDots,
      }}
    >
      {props.children}
    </CubeContext.Provider>
  );
};

export default CubeContextProvider;
