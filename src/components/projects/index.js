import React, { useState, useEffect } from 'react';

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

import Descriptions from '../../assets/images/projects/descriptions';

export default function ProjectsComponent() {
  const [images, setImages] = useState([]);
  const [showContent, setShowContent] = useState('dontShowContent');
  const [activeImage, setActiveImage] = useState(-1);
  const [imgBoxPage, setImgBoxPage] = useState('imgBox');
  const [arrowUp, setArrowUp] = useState(null);
  const [arrowDown, setArrowDown] = useState(null);
  const [imbBoxElement, setImgBoxElement] = useState('imgBoxElementDown');

  let wheelActive = false;
  let movementDirection = 'down';
  const transitionPaused = 1000;

  useEffect(() => {
    localStorage.setItem('currentPageProjects', 1);
    localStorage.setItem('swipeActive', 'false');
    localStorage.setItem('directionDown', true);
  }, []);

  // FIRST LOAD after 1,6 seconds (OVERTURE BLACK):
  useEffect(() => {
    let arrayAux = [];
    for (let i = 1; i < 9; i++) {
      arrayAux.push(
        <div className={[classes.images, classes[`image${i}`]].join(' ')}>
          <div className={classes.showBackground}></div>
        </div>
      );
    }
    setArrowDown(
      <ArrowDirection
        directionDown={true}
        onlyShowMobile="onlyShowMobile"
        arrowDownHandler={swipeUpHandler}
        arrowUpHandler={swipeDownHandler}
      />
    );
    // OVERTURE black has 4 seconds:
    setTimeout(() => {
      setImages(arrayAux);
    }, 1600);

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
      default:
        break;
    }
  }
  // SWIPE FOR PAGE TO GOES DOWN
  function swipeUpHandler() {
    const swipeActive = localStorage.getItem('swipeActive');
    if (swipeActive === 'true') {
      return;
    } else {
      const getCurPage = localStorage.getItem('currentPageProjects');
      arrowDownHandler(getCurPage);
    }
  }
  // SWIPE FOR PAGE TO GOES UP
  function swipeDownHandler() {
    const swipeActive = localStorage.getItem('swipeActive');
    // setTimeout(() => {
    if (swipeActive === 'true') {
      return;
    } else {
      const getCurPage = localStorage.getItem('currentPageProjects');
      arrowUpHandler(getCurPage);
    }
  }

  // DOWN DIRECTION ***********************************************
  function arrowDownHandler(currentPageProps) {
    // To avoid atempt to render if component is unmounted:
    let isMounted = true;
    if (wheelActive) {
      return;
    } else if (parseInt(currentPageProps) === 1) {
      wheelActive = true;
      localStorage.setItem('swipeActive', 'true');
      movementDirection = 'down';
      setTimeout(() => {
        if (isMounted) {
          setImgBoxPage('imbBoxSecondPageNoAnimation');
          localStorage.setItem('currentPageProjects', 2);
          wheelActive = false;
          localStorage.setItem('swipeActive', 'false');
        }
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
        if (isMounted) {
          setImgBoxPage('imbBoxThirdPageNoAnimation');
          localStorage.setItem('currentPageProjects', 3);
          wheelActive = false;
          localStorage.setItem('swipeActive', 'false');
          setImgBoxElement('imgBoxElementUp');
        }
      }, transitionPaused);
      setImgBoxPage('imbBoxThirdPage');
      setTimeout(() => {
        if (isMounted) {
          setArrowUp(
            <ArrowDirection
              directionDown={false}
              onlyShowMobile="onlyShowMobile"
              arrowDownHandler={swipeUpHandler}
              arrowUpHandler={swipeDownHandler}
            />
          );
          setArrowDown(null);
        }
      }, 800);
    }
  }
  // UP DIRECTION ***********************************************
  function arrowUpHandler(currentPageProps) {
    // To avoid atempt to render if component is unmounted:
    let isMounted = true;
    if (wheelActive) {
      return;
    } else if (parseInt(currentPageProps) === 3) {
      wheelActive = true;
      localStorage.setItem('swipeActive', 'true');
      movementDirection = 'up';
      setTimeout(() => {
        if (isMounted) {
          setImgBoxPage('imbBoxBackToSecondPageNoAnimation');
          localStorage.setItem('currentPageProjects', 2);
          wheelActive = false;
          localStorage.setItem('swipeActive', 'false');
        }
      }, 1500);
      setImgBoxPage('imbBoxBackToSecondPage');
    } else if (parseInt(currentPageProps) === 2) {
      wheelActive = true;
      localStorage.setItem('swipeActive', 'true');
      if (movementDirection === 'down') {
        setImgBoxElement('imgBoxElementUp');
      }
      movementDirection = 'up';
      setTimeout(() => {
        if (isMounted) {
          setImgBoxPage('imgBox');
          localStorage.setItem('currentPageProjects', 1);
          wheelActive = false;
          localStorage.setItem('swipeActive', 'false');
          setImgBoxElement('imgBoxElementDown');
        }
      }, 1500);
      setImgBoxPage('imbBoxBackToFirstPage');
      setTimeout(() => {
        if (isMounted) {
          setArrowDown(
            <ArrowDirection
              directionDown={true}
              onlyShowMobile="onlyShowMobile"
              arrowDownHandler={swipeUpHandler}
              arrowUpHandler={swipeDownHandler}
            />
          );
          setArrowUp(null);
        }
      }, 800);
    }
  }

  return (
    <>
      <Swipe
        onSwipeUp={swipeUpHandler}
        onSwipeDown={swipeDownHandler}
        // onSwipeStart={wheelDownHandler}
        // onSwipeMove={}
        // onSwipeEnd={}
      >
        <span className={classes.fadeInMenuAndArrows}>
          <Menu
            wheelDirectionHandler={wheelDirectionHandler}
            keyDownHandler={keyDownHandler}
          />
          <LogoMaxMix />
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
