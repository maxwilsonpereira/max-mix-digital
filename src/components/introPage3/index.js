import React, { useState, useEffect, memo } from 'react';

import classes from './style.module.scss';

const frases = ['explore a bit of my world', "don't forget to check the menu"];

// localStorage.setItem("page3CurFrase", 0);

function IntroThirdPage(props) {
  const [curFrase, setCurFrase] = useState([]);
  const currentFrase = localStorage.getItem('page3CurFrase');

  useEffect(() => {
    if (Number(currentFrase) === 0) {
      setCurFrase(frases[0]);
      // localStorage.setItem("page3CurFrase", 1);
    } else {
      setCurFrase(frases[1]);
      // localStorage.setItem("page3CurFrase", 0);
    }
  }, [currentFrase]);

  return (
    <div className={[classes.grid, classes[props.animation]].join(' ')}>
      {/* CROPPER class NEEDED to crop the 50% right of the screen on enter: */}
      <div className={classes.gridLeftCropper}>
        <div className={classes.gridLeft}>
          <p className={classes.sentences}>carpe diem</p>
        </div>
      </div>
      <div
        className={[classes.gridRightUp, classes[props.enterText]].join(' ')}
      >
        <h1>{curFrase}</h1>
      </div>
      <div className={classes.gridRightDown}></div>
    </div>
  );
}
export default memo(IntroThirdPage);
