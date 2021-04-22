import React, { memo } from "react";

import classes from "./style.module.scss";

// import maxMixLogo from "../../assets/images/png/maxMixLogo.png";
// import Menu from "../menu";
// import ArrowDown from "../UI/arrowDown";

function FirstIntroBlack(props) {
  return (
    <>
      {/* <Menu /> */}
      <div className={classes.blackFadeOut} />
      <div className={classes.loadingLine} />
      {/* <span className={classes.fadeInComponent}>{componentToShow}</span> */}
      <span className={classes.fadeInComponent}>
        {/* {props.arrowDown} */}
        {props.showComponent}
      </span>
    </>
  );
}
export default memo(FirstIntroBlack);
