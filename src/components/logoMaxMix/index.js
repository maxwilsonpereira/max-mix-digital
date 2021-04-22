import React, { memo } from "react";

// // npm install --save react-router-dom
import { Link } from "react-router-dom";

import classes from "./style.module.scss";

import maxMixLogo from "../../assets/images/png/maxMixLogo.png";

function FirstIntroBlack(props) {
  return (
    <>
      <Link to="/">
        <img
          className={[classes.maxMixLogo, classes[props.hoverNotActive]].join(
            " "
          )}
          src={maxMixLogo}
          alt=""
        />
      </Link>
    </>
  );
}

export default memo(FirstIntroBlack);
