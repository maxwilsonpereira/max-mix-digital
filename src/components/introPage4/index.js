import React, { useState, useEffect, memo } from "react";

import classes from "./style.module.scss";
import video from "../../assets/videos/videoPage4.mp4";

const frases = [
  "allow opportunities to come to you",
  "don't overthink, just do it",
];

// localStorage.setItem("page4CurFrase", 0);

function IntroThirdPage(props) {
  const [curFrase, setCurFrase] = useState([]);
  const currentFrase = localStorage.getItem("page4CurFrase");

  useEffect(() => {
    if (Number(currentFrase) === 0) {
      setCurFrase(frases[0]);
      // localStorage.setItem("page4CurFrase", 1);
    } else {
      setCurFrase(frases[1]);
      // localStorage.setItem("page4CurFrase", 0);
    }
  }, [currentFrase]);

  return (
    <>
      <div className={[classes.grid, classes[props.animation]].join(" ")}>
        <div className={classes.gridRight}>
          <video
            autoPlay="autoplay"
            loop="loop"
            muted
            className={classes.video}
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video!
          </video>
        </div>

        <div className={classes.gridLeftUp}>
          <h1>{curFrase}</h1>
        </div>
        <div
          className={[classes.gridLeftDown, classes[props.image]].join(" ")}
        ></div>
      </div>
    </>
  );
}

export default memo(IntroThirdPage);
