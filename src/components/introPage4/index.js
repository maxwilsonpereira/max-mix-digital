import React, { useState, useEffect, memo } from 'react';

import classes from './style.module.scss';
import video from '../../assets/videos/videoPage4.mp4';

import skills from './_skills';
const frases = ['presenting my main skills', 'Found what you are looking for?'];

// localStorage.setItem("page4CurFrase", 0);

function IntroThirdPage(props) {
  const [curFrase, setCurFrase] = useState([]);
  const currentFrase = localStorage.getItem('page4CurFrase');
  const [skillsElement, setSkillsElement] = useState();

  useEffect(() => {
    if (Number(currentFrase) === 0) {
      setCurFrase(frases[0]);
      // localStorage.setItem("page2CurFrase", 1);
    } else {
      setCurFrase(frases[1]);
      // localStorage.setItem("page2CurFrase", 0);
    }
  }, [currentFrase]);

  useEffect(() => {
    if (props.animateSkills) {
      setSkillsElement(
        <div className={classes.skillsContainer}>
          {skills.map((cur, index) => (
            <>
              <div
                className={[
                  classes.skillNameFont,
                  classes[`skillNameFont${index}`],
                ].join(' ')}
                key={cur.name}
              >
                {cur.name}
              </div>
              <div
                className={[classes.skillLevel, classes[`skill${index}`]].join(
                  ' '
                )}
              />
            </>
          ))}
        </div>
      );
    }
  }, [props.animateSkills]);

  return (
    <>
      <div className={[classes.grid, classes[props.animation]].join(' ')}>
        <div className={classes.gridRight}>{skillsElement}</div>

        {/* <div className={classes.gridLeftUp}>
          <h1>{curFrase}</h1>
        </div> */}

        <div
          className={[classes.gridLeftUp, classes[props.enterText]].join(' ')}
        >
          <h1>{curFrase}</h1>
        </div>
        <div className={[classes.gridLeftDown, classes[props.image]].join(' ')}>
          <div className={classes.gridLeft}>
            <p className={classes.sentences}>eudaimonia</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(IntroThirdPage);
