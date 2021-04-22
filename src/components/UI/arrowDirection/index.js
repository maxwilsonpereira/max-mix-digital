// USED ON PROJECTS PAGE:
import React, { useState, useEffect, memo } from "react";

import classes from "./style.module.css";
function ArrowDown(props) {
  const [arrowDownIcon, setArrowDownIcon] = useState("");

  useEffect(() => {
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
      setArrowDownIcon(
        <div className={classes.invertDirection}>
          <div onClick={props.arrowUpHandler} className={classes.arrowDown}>
            <div className={classes.boxAux}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      );
    }
  }, [props.directionDown]);

  return <div className={classes[props.onlyShowMobile]}>{arrowDownIcon}</div>;
}
export default memo(ArrowDown);
