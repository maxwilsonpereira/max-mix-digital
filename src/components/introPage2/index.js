import React, { useState, useEffect, memo } from "react";

import classes from "./style.module.scss";

// LOGO MAKER:
// https://editor.freelogodesign.org/

import Img1 from "../../assets/images/png/page2a1.png";
import Img2 from "../../assets/images/png/page2b1.png";
import Img3 from "../../assets/images/png/page2c1.png";
import Img4 from "../../assets/images/png/page2a2.png";
import Img5 from "../../assets/images/png/page2b2.png";
import Img6 from "../../assets/images/png/page2c2.png";

const images = [Img1, Img2, Img3, Img4, Img5, Img6];

const frases = [
  "turn your dreams into reality",
  "web and app development that fits your needs",
];

// localStorage.setItem("imageCurrentPage2", 1);

function IntroSecondPage(props) {
  const [curFrase, setCurFrase] = useState([]);
  const currentFrase = localStorage.getItem("page2CurFrase");
  const [image, setImage] = useState(null);
  const [imageCurrent, setImageCurrent] = useState(0);

  useEffect(() => {
    if (Number(currentFrase) === 0) {
      setCurFrase(frases[0]);
      // localStorage.setItem("page2CurFrase", 1);
    } else {
      setCurFrase(frases[1]);
      // localStorage.setItem("page2CurFrase", 0);
    }
  }, [currentFrase]);

  useEffect(() => {
    let isMounted = true; // note this flag denote mount status
    setImage(
      <img className={classes.pngImages} src={images[imageCurrent]} alt="" />
    );

    const timer = setTimeout(() => {
      if (isMounted) {
        imageToggle();
      }
    }, 4000);

    return () => {
      isMounted = false; // use effect cleanup to set flag false, if unmounted
      clearTimeout(timer);
    };
  }, [imageCurrent]);

  function imageToggle() {
    if (imageCurrent === 5) {
      setImageCurrent(0);
    } else {
      setImageCurrent(imageCurrent + 1);
    }
  }

  return (
    // <div className={classes.containerAbsolute}>
    <div className={[classes.grid, classes[props.animation]].join(" ")}>
      <div className={classes.gridLeft}>
        {/* <h1>web and app development that fits your needs</h1> */}
        <div className={classes.imgsContainer}>
          {/* <img className={classes.pngImages} src={Img1} /> */}
          <br />
          {image}
        </div>
      </div>
      <div className={classes.gridRightUp}>
        <h1>{curFrase}</h1>
      </div>
      <div className={classes.gridRightDown}>
        <div
          className={[classes.backImage, classes[props.zoomImage]].join(" ")}
        ></div>
      </div>
    </div>
    // </div>
  );
}

export default memo(IntroSecondPage);
