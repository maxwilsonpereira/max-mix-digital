import React, { useState, useEffect, memo } from "react";

import classes from "./style.module.scss";

const frases = [
  "make your brand famous worldwide",
  "because you are as powerful as your imagination",
];

// localStorage.setItem("page5CurFrase", 0);

function IntroPage5(props) {
  const [curFrase, setCurFrase] = useState([]);
  const currentFrase = localStorage.getItem("page5CurFrase");

  useEffect(() => {
    if (Number(currentFrase) === 0) {
      setCurFrase(frases[0]);
      // localStorage.setItem("page5CurFrase", 1);
    } else {
      setCurFrase(frases[1]);
      // localStorage.setItem("page5CurFrase", 0);
    }
  }, [currentFrase]);

  return (
    <div className={[classes.grid, classes[props.animation]].join(" ")}>
      <div className={classes.gridLeftCropper}>
        <div className={classes.leftGridUp}></div>
      </div>
      <div
        className={[classes.leftGridDown, classes[props.imageDown]].join(" ")}
      ></div>
      <div
        className={[classes.gridRightUp, classes[props.image]].join(" ")}
      ></div>
      <div
        className={[classes.gridRightDown, classes[props.enterText]].join(" ")}
      >
        <h1>{curFrase}</h1>
      </div>
    </div>
  );
}
export default memo(IntroPage5);
