import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionsIndex';

// Swipe Detection
// import Swipe from 'react-easy-swipe';
// https://reactjsexample.com/easy-handler-for-common-swipe-operations/
// npm install react-easy-swipe --save
import Swipe from 'react-easy-swipe';

import classes from './style.module.scss';
import classesIcon from './styleIcon.module.scss';

import LogoMaxMix from '../logoMaxMix';
import Menu from '../menu';
import ArrowDirection from '../UI/arrowDirection';
import MatrixEffect from '../UI/matrixEffect';

import Descriptions from '../../assets/images/about/descriptions';

function AboutComponent(props) {
  const [images, setImages] = useState([]);
  const [showContent, setShowContent] = useState('dontShowContent');
  const [activeImage, setActiveImage] = useState(-1);
  const [imgBoxPage, setImgBoxPage] = useState('imgBox');
  const [arrowUp, setArrowUp] = useState(null);
  const [arrowDown, setArrowDown] = useState(null);
  const [imbBoxElement, setImgBoxElement] = useState('imgBoxElementDown');
  const [menuAndLogo, setMenuAndLogo] = useState(null);

  let wheelActive = false;
  // let pageMobile = 1;
  let movementDirection = 'down';
  const transitionPaused = 2500; // time to all transitions have ended

  useEffect(() => {
    props.onFirstPageTrue();
    props.onLastPageFalse();

    localStorage.setItem('currentPageProjects', 1);
    localStorage.setItem('swipeActive', 'false');
    localStorage.setItem('directionDown', true);

    setTimeout(() => {
      setMenuAndLogo(
        <>
          <Menu
            wheelDirectionHandler={wheelDirectionHandler}
            keyDownHandler={keyDownHandler}
          />
          <LogoMaxMix />
        </>
      );
      setArrowDown(
        <ArrowDirection
          directionDown={true}
          onlyShowMobile="onlyShowMobile"
          arrowDownHandler={swipeUpHandler}
          arrowUpHandler={swipeDownHandler}
        />
      );
    }, 3500);
  }, []);

  // FIRST LOAD after 1,6 seconds (OVERTURE BLACK):
  useEffect(() => {
    let arrayAux = [];
    for (let i = 1; i < 7; i++) {
      arrayAux.push(
        <div className={[classes.images, classes[`image${i}`]].join(' ')}>
          <div className={classes.showBackground}></div>
        </div>
      );
    }
    // waiting OVERTURE black to come the img cubes:
    setTimeout(() => {
      setImages(arrayAux);
    }, 1800);

    setTimeout(() => {
      window.addEventListener('wheel', wheelDirectionHandler);
      document.addEventListener('keydown', keyDownHandler);
      // TIME TO ALLOW THE FIRST GOING DOWN AFTER THE INTRO:
    }, 4000);
    // REMOVING THE EVENTLISTENERS on "componentWillUnmount":
    return function cleanup() {
      window.removeEventListener('wheel', wheelDirectionHandler);
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, []);

  function wheelDirectionHandler(event) {
    const getCurPage = localStorage.getItem('currentPageProjects');
    if (event.deltaY < 0) {
      arrowUpHandler(getCurPage);
    } else if (event.deltaY > 0) {
      arrowDownHandler(getCurPage);
    }
  }
  function keyDownHandler(event) {
    const getCurPage = localStorage.getItem('currentPageProjects');
    // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"
    // const key = event.key;
    switch (event.key) {
      // case "ArrowLeft":
      // Left pressed
      // break;
      // case "ArrowRight":
      // Right pressed
      // break;
      case 'ArrowUp':
        arrowUpHandler(getCurPage);
        break;
      case 'ArrowDown':
        arrowDownHandler(getCurPage);
        break;
    }
  }
  // SWIPE FOR PAGE TO GOES DOWN
  function swipeUpHandler() {
    const swipeActive = localStorage.getItem('swipeActive');
    // setTimeout(() => {
    if (swipeActive === 'true') {
      return;
    } else {
      // localStorage.setItem("swipeActive", "true");
      const getCurPage = localStorage.getItem('currentPageProjects');
      arrowDownHandler(getCurPage);
      setTimeout(() => {
        // localStorage.setItem("swipeActive", "false");
      }, transitionPaused);
    }
    // }, 1000);
  }
  // SWIPE FOR PAGE TO GOES UP
  function swipeDownHandler() {
    const swipeActive = localStorage.getItem('swipeActive');
    // setTimeout(() => {
    if (swipeActive === 'true') {
      return;
    } else {
      // localStorage.setItem("swipeActive", "true");
      const getCurPage = localStorage.getItem('currentPageProjects');
      arrowUpHandler(getCurPage);
      setTimeout(() => {
        // localStorage.setItem("swipeActive", "false");
      }, transitionPaused);
    }
    // }, 1000);
  }

  // DOWN DIRECTION ********************************
  function arrowDownHandler(currentPageProps) {
    if (wheelActive) {
      return;
    } else if (parseInt(currentPageProps) === 1) {
      wheelActive = true;
      localStorage.setItem('swipeActive', 'true');
      movementDirection = 'down';
      setTimeout(() => {
        setImgBoxPage('imbBoxSecondPageNoAnimation');
        localStorage.setItem('currentPageProjects', 2);
        // pageMobile = 2;
        wheelActive = false;
        localStorage.setItem('swipeActive', 'false');
      }, transitionPaused);
      setImgBoxPage('imbBoxSecondPage');
    } else if (parseInt(currentPageProps) === 2) {
      wheelActive = true;
      localStorage.setItem('swipeActive', 'true');
      if (movementDirection === 'up') {
        setImgBoxElement('imgBoxElementDown');
      }
      movementDirection = 'down';
      setTimeout(() => {
        setImgBoxPage('imbBoxThirdPageNoAnimation');
        localStorage.setItem('currentPageProjects', 3);
        // pageMobile = 3;
        wheelActive = false;
        localStorage.setItem('swipeActive', 'false');
        setImgBoxElement('imgBoxElementUp');
      }, transitionPaused);
      setImgBoxPage('imbBoxThirdPage');
      setTimeout(() => {
        setArrowUp(
          <ArrowDirection
            directionDown={false}
            onlyShowMobile="onlyShowMobile"
            arrowDownHandler={swipeUpHandler}
            arrowUpHandler={swipeDownHandler}
          />
        );
        setArrowDown(null);
      }, 800);
    }
  }
  // UP DIRECTION ********************************
  function arrowUpHandler(currentPageProps) {
    if (wheelActive) {
      return;
    } else if (parseInt(currentPageProps) === 3) {
      wheelActive = true;
      localStorage.setItem('swipeActive', 'true');
      movementDirection = 'up';
      setTimeout(() => {
        setImgBoxPage('imbBoxBackToSecondPageNoAnimation');
        localStorage.setItem('currentPageProjects', 2);
        // pageMobile = 2;
        wheelActive = false;
        localStorage.setItem('swipeActive', 'false');
      }, transitionPaused);
      setImgBoxPage('imbBoxBackToSecondPage');
    } else if (parseInt(currentPageProps) === 2) {
      wheelActive = true;
      localStorage.setItem('swipeActive', 'true');
      if (movementDirection === 'down') {
        setImgBoxElement('imgBoxElementUp');
      }
      movementDirection = 'up';
      setTimeout(() => {
        setImgBoxPage('imgBox');
        localStorage.setItem('currentPageProjects', 1);
        // pageMobile = 1;
        wheelActive = false;
        localStorage.setItem('swipeActive', 'false');
        setImgBoxElement('imgBoxElementDown');
      }, transitionPaused);
      setImgBoxPage('imbBoxBackToFirstPage');
      setTimeout(() => {
        setArrowDown(
          <ArrowDirection
            directionDown={true}
            onlyShowMobile="onlyShowMobile"
            arrowDownHandler={swipeUpHandler}
            arrowUpHandler={swipeDownHandler}
          />
        );
        setArrowUp(null);
      }, 800);
    }
  }
  return (
    <>
      <MatrixEffect />
      <Swipe
        onSwipeUp={swipeUpHandler}
        onSwipeDown={swipeDownHandler}
        // onSwipeStart={wheelDownHandler}
        // onSwipeMove={}
        // onSwipeEnd={}
      >
        <span className={classes.fadeInMenuAndArrows}>
          {menuAndLogo}
          {arrowUp}
          {arrowDown}
        </span>
        <div
          className={[
            classes.containerProjects,
            classes.fadeInAfterResized,
          ].join(' ')}
        >
          <div className={classes.grid}>
            {images.map((imageDiv, index) => (
              <div
                key={index}
                onMouseOver={() => {
                  setShowContent('showContent');
                  setActiveImage(index);
                }}
                onMouseLeave={() => {
                  setShowContent('dontShowContent');
                  setActiveImage(-1);
                }}
                className={[
                  classes[imgBoxPage],
                  classes[`${imbBoxElement}${index + 1}`],
                  classes[`imageGrid${index + 1}`],
                ].join(' ')}
              >
                <div
                  className={
                    (index === activeImage && classes[showContent]) ||
                    classes.dontShowContent
                    // DEVELOPING
                    // classes.showContent
                  }
                >
                  {/* PLUS ICON WITH CSS: */}
                  <div className={classesIcon.plusIcon}></div>

                  <h3 className={classes.titlesH3}>
                    {Descriptions[index].title}
                  </h3>
                  <h3 className={classes.descriptionH3}>
                    {Descriptions[index].description}
                  </h3>
                </div>
                <a
                  className={classes.hexLink}
                  href={Descriptions[index].href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className={classes.onHover}>{imageDiv}</div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </Swipe>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFirstPageTrue: () => dispatch(actionTypes.firstPageTrue()),
    onLastPageFalse: () => dispatch(actionTypes.lastPageFalse()),
  };
};

export default connect(null, mapDispatchToProps)(AboutComponent);
