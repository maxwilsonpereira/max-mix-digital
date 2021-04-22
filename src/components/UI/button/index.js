import React from "react";
// import { useHistory } from "react-router-dom";
// import { HashLink as Link } from "react-router-hash-link";

import classes from "./style.module.css";
import clickSound from "../../../assets/sounds/click.mp3";

export default function ButtonBuy(props) {
  // let history = useHistory();
  const playAudioHandler = (event) => {
    let audio = new Audio(clickSound);
    // PLAY CLICK, THEN EXECUTE FUNCTION:
    setTimeout(() => {
      props.function(event);
    }, 200);
    audio.play();
  };
  return (
    <button
      onClick={playAudioHandler}
      className={[classes.ButtonBuy, classes[props.btnColor]].join(" ")}
    >
      {props.children}
    </button>
  );
}
