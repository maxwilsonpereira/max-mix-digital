import React, { useState, useEffect, memo } from 'react';
import { connect } from 'react-redux';
import classes from './style.module.scss';

// LOGO MAKER:
// https://editor.freelogodesign.org/

const frases = ['welcome to my profile page', 'thank you for your visit'];

// localStorage.setItem("imageCurrentPage2", 1);

function IntroSecondPage(props) {
  const [curFrase, setCurFrase] = useState([]);
  const currentFrase = localStorage.getItem('page2CurFrase');

  useEffect(() => {
    if (Number(currentFrase) === 0) {
      setCurFrase(frases[0]);
      // localStorage.setItem("page2CurFrase", 1);
    } else {
      setCurFrase(frases[1]);
      // localStorage.setItem("page2CurFrase", 0);
    }
  }, [currentFrase]);

  return (
    // <div className={classes.containerAbsolute}>
    <div className={[classes.grid, classes[props.animation]].join(' ')}>
      <div className={classes.gridLeft}>
        <p className={classes.sentences}>nosce te ipsum</p>
      </div>

      <div className={classes.gridRightUp}>
        <h1>{curFrase}</h1>
      </div>
      <div className={classes.gridRightDown}>
        <div
          className={[classes.backImage, classes[props.zoomImage]].join(' ')}
        ></div>
      </div>
    </div>
    // </div>
  );
}

const mapStateToProps = (state) => {
  return {
    firstPage: state.global.firstPage,
    lastPage: state.global.lastPage,
  };
};

export default connect(mapStateToProps)(memo(IntroSecondPage));
