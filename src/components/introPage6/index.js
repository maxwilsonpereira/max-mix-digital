import React, { useState, useEffect } from "react";
// npm i react-redux
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions/actionsIndex";

import classes from "./style.module.scss";

const frases = ["Are you ready to turn your idea into reality?", "Contact us!"];

// localStorage.setItem("page6CurFrase", 0);

function IntroPage6(props) {
  const [grid2, setGrid2] = useState(null);

  useEffect(() => {
    let isMounted = true; // note this flag denote mount status

    if (props.startImage2) {
      setTimeout(() => {
        if (isMounted) {
          setGrid2(
            <div
              className={[classes.grid2, classes[props.animation]].join(" ")}
            >
              <div className={classes.grid2Right}></div>
              <div className={classes.grid2Left}>
                <h2 onClick={showMenu} className={classes.clickContact}>
                  {frases[1]}
                </h2>
              </div>
            </div>
          );
        }
      }, 3000);
    }

    return () => {
      isMounted = false;
    }; // use effect cleanup to set flag false, if unmounted
  }, [props.startImage2]);

  useEffect(() => {
    if (props.animation === "exitPage6") {
      setGrid2(
        <div className={[classes.grid2, classes[props.animation]].join(" ")}>
          <div className={classes.grid2Right}></div>
          <div className={classes.grid2Left}>
            <h2 onClick={showMenu} className={classes.clickContact}>
              {frases[1]}
            </h2>
          </div>
        </div>
      );
    }
  }, [props.animation]);

  function showMenu() {
    props.onShowMenuToTrue();
    setTimeout(() => {
      props.onShowMenuToFalse();
    }, 200);
  }
  return (
    <>
      <div className={[classes.grid, classes[props.animation]].join(" ")}>
        <div className={classes.gridLeft}>
          <h1>{frases[0]}</h1>
        </div>
        <div className={classes.gridRight}></div>
      </div>
      {grid2}
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onShowMenuToTrue: () => dispatch(actionTypes.showMenuToTrue()),
    onShowMenuToFalse: () => dispatch(actionTypes.showMenuToFalse()),
  };
};

export default connect(null, mapDispatchToProps)(IntroPage6);
