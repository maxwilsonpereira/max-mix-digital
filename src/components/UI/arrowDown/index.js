// USED ON INTRO PAGE:
import React, { useState, useEffect } from "react";
// npm i react-redux
import { connect } from "react-redux";

import classes from "./style.module.css";

function ArrowDown(props) {
  const [arrowDownIcon, setArrowDownIcon] = useState("");

  // function arrowDownClicked() {
  //   setTimeout(() => {}, 200);
  // }

  useEffect(() => {
    // To avoid atempt to render if component is unmounted:
    let isMounted = true;
    // props.directionDown comes from mapStateToProps
    // alert(props.directionDown);
    // if (props.firstPage || !props.lastPage) {
    if (props.directionDown) {
      setArrowDownIcon(
        <div onClick={props.arrowDownHandler} className={classes.arrowDown}>
          <div className={classes.boxAux}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      );
    } else {
      // FADE OUT ARROW DOWN:
      // setArrowDownIcon(
      //   <div className={[classes.arrowDown, classes.fadeOut].join(" ")}>
      //     <div className={classes.boxAux}>
      //       <span></span>
      //       <span></span>
      //       <span></span>
      //     </div>
      //   </div>
      // );
      // SHOW ARROW UP ON LAST PAGE AFTER  SECONDS:
      // setTimeout(() => {
      //   if (isMounted) {
      setArrowDownIcon(
        <div
          onClick={props.arrowUpHandler}
          className={[classes.arrowUp, classes.fadeOutFadeIn].join(" ")}
        >
          <div className={classes.boxAux}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      );
      //   }
      // }, 6000);
    }
  }, [props.directionDown]);

  return <>{arrowDownIcon}</>;
}

const mapStateToProps = (state) => {
  return {
    lastPage: state.global.lastPage,
    firstPage: state.global.firstPage,
    directionDown: state.global.directionDown,
  };
};

export default connect(mapStateToProps)(ArrowDown);
