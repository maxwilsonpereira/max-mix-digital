import React, { useEffect, useState } from 'react';

import agile from '../../assets/images/homePage/agile.jpg';
import matrix from '../../assets/images/homePage/matrix.jpg';
import github from '../../assets/images/homePage/github.jpg';
import magritte from '../../assets/images/homePage/magritte.jpg';

import classes from './style.module.scss';

// const frases = [
//   'an application is a work of art',
//   'because you are as powerful as your imagination',
// ];

// localStorage.setItem("page5CurFrase", 0);

function IntroPage5(props) {
  // const [curFrase, setCurFrase] = useState([]);
  // const currentFrase = localStorage.getItem('page5CurFrase');
  const [imageUp, setImageUp] = useState(github);
  const [imageDown, setImageDown] = useState(agile);

  // useEffect(() => {
  //   if (Number(currentFrase) === 0) {
  //     setCurFrase(frases[0]);
  //     // localStorage.setItem("page5CurFrase", 1);
  //   } else {
  //     setCurFrase(frases[1]);
  //     // localStorage.setItem("page5CurFrase", 0);
  //   }
  // }, [currentFrase]);

  useEffect(() => {
    if (props.image === 'image2') {
      setImageUp(magritte);
      setImageDown(matrix);
    } else {
      setImageUp(github);
      setImageDown(agile);
    }
  }, [props.image]);

  return (
    <div className={[classes.grid, classes[props.animation]].join(' ')}>
      <div className={classes.gridLeftCropper}>
        <div className={classes.leftGridUp} />
      </div>
      <div className={classes.leftGridDown}>
        <img className={classes.images} src={imageDown} alt="" />
      </div>
      <div className={classes.gridRightUp}>
        <img className={classes.images} src={imageUp} alt="" />
      </div>
      <div
        className={[classes.gridRightDown, classes[props.enterText]].join(' ')}
      >
        <div className={classes.gridLeft}>
          <p className={classes.sentences}>memento mori</p>
        </div>
      </div>
    </div>
  );
}
export default IntroPage5;
