import React, { useState, memo } from "react";

// npm i node-sass
import classes from "./style.module.scss";

const titles = [
  "max mix digital",
  "web development",
  "media and sound",
  "max mix digital",
];
const descriptions = [
  "developing with passion",
  "because every single detail matters",
  "music and image arouse sensations",
  "developing with passion",
];

function IntroFirstPage() {
  const [zoomImg, setZoomImg] = useState([
    "zooomOut",
    "zooomOut",
    "zooomOut",
    "zooomOut",
  ]);
  const [stopAnimation, setStopAnimation] = useState("");

  let resizeTimer;
  window.addEventListener("resize", () => {
    setStopAnimation("resizeAnimationStopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      setStopAnimation("");
    }, 200);
  });

  function zoomInImg(index) {
    // SPLICE()
    // changes the contents of an array by removing or replacing
    // existing elements and/or adding new elements in place.
    // .splice(index, howManyElementsToRemove, NewElemet)
    const auxArray = ["zooomOut", "zooomOut", "zooomOut", "zooomOut"];
    auxArray.splice(index, 0, "imgZoomIn");
    setZoomImg(auxArray);
  }

  return (
    <div className={classes.containerAbsolute}>
      <div id={classes.slider}>
        <figure>
          {titles.map((title, index) => (
            <div
              key={index}
              className={[
                classes[`backgroundImage${index + 1}`],
                classes[zoomImg[index]],
                classes[stopAnimation],
              ].join(" ")}
            >
              <h1
                onMouseOver={() => zoomInImg(index)}
                onMouseOut={() => setZoomImg("imgZoomOut")}
              >
                {title}
                <span className={classes.descriptions}>
                  <br />
                  {descriptions[index]}
                </span>
              </h1>
            </div>
          ))}
        </figure>
      </div>
    </div>
  );
}

export default memo(IntroFirstPage);
