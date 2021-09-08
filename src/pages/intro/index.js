import React, { useEffect, useState } from 'react';
// npm i react-redux
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionsIndex';

// Swipe Detection
// import Swipe from 'react-easy-swipe';
// https://reactjsexample.com/easy-handler-for-common-swipe-operations/
// npm install react-easy-swipe --save
import Swipe from 'react-easy-swipe';

import classes from './style.module.css';
import LogoMaxMix from '../../components/logoMaxMix';

import Menu from '../../components/menu';
import FirstIntroBlack from '../../components/firstIntroBlack';
import ArrowDown from '../../components/UI/arrowDown';
import IntroPage1 from '../../components/introPage1';
import IntroSecondPage from '../../components/introPage2';
import IntroThirdPage from '../../components/introPage3';
import IntroPage4 from '../../components/introPage4';
import IntroPage5 from '../../components/introPage5';
import IntroPage6 from '../../components/introPage6';

function IntroPage(props) {
  // const [introSecondPage, setIntroSecondPage] = useState('');
  // const [introThirdPage, setIntroThirdPage] = useState('');
  // const [introPage4, setIntroPage4] = useState('');
  // const [introPage5, setIntroPage5] = useState('');
  // const [introPage6, setIntroPage6] = useState('');
  // LOAD ALL IMAGES ALREADY:
  const [introSecondPage, setIntroSecondPage] = useState(null);
  const [introThirdPage, setIntroThirdPage] = useState(null);
  const [introPage4, setIntroPage4] = useState(null);
  const [introPage5, setIntroPage5] = useState(null);
  const [introPage6, setIntroPage6] = useState(null);
  // <IntroPage6 animation="enterPage6" />

  // let currentPagePropsCounter = 1;

  // wheelActive is the page movement
  // when TRUE, event listener will be stoped
  let wheelActive = false;
  // let swipeActive = false;
  // let upDirectonPage5 = false;
  // const transitionPaused = 1200;
  const transitionPaused = 1000;
  // eraseComponent must be a bit bigger than $speedPageMovement: 0.5s;
  const eraseComponent = 800;

  useEffect(() => {
    // HIDE LOGO:
    document.getElementById('logo-maxmix').classList.add('logoHiding');

    // document.getElementById('logo-maxmix').classList.add('logoHiding');
    // LOCAL STORAGE INITIALIZATION:
    localStorage.setItem('currentPage', 1);
    localStorage.setItem('page2CurFrase', 0);
    localStorage.setItem('page3CurFrase', 0);
    localStorage.setItem('page4CurFrase', 0);
    localStorage.setItem('page5CurFrase', 0);
    localStorage.setItem('page6CurFrase', 0);
    localStorage.setItem('upDirectonPage5', false);
    localStorage.setItem('directionDown', true);
    localStorage.setItem('swipeActive', 'false');
    localStorage.setItem('menuIsActive', 'false');

    // Global Redux state directionDown:
    props.onFirstPageTrue();
    props.onDirectionDownTrue();

    setTimeout(() => {
      // LOADING ALL IMAGES "IN CACHE" and erasing:
      setIntroSecondPage(<IntroSecondPage animation="stayOutside" />);
      setIntroThirdPage(<IntroThirdPage animation="stayOutside" />);
      setIntroPage4(
        <IntroPage4
          animation="stayOutside"
          image="image1"
          imageDown="imageDown1"
        />
      );
      setIntroPage5(<IntroPage5 animation="stayOutside" image="image1" />);
      setIntroPage6(<IntroPage6 animation="stayOutside" />);
    }, 1000);

    setTimeout(() => {
      window.addEventListener('wheel', wheelDirectionHandler);
      document.addEventListener('keydown', keyDownHandler);
    }, 3000);
    // REMOVING THE EVENTLISTENERS on "componentWillUnmount":
    return function cleanup() {
      window.removeEventListener('wheel', wheelDirectionHandler);
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, []);

  function wheelDirectionHandler(event) {
    const getCurPage = localStorage.getItem('currentPage');
    if (event.deltaY < 0) {
      wheelUpHandler(getCurPage);
    } else if (event.deltaY > 0) {
      wheelDownHandler(getCurPage);
    }
  }
  function keyDownHandler(event) {
    const getCurPage = localStorage.getItem('currentPage');
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
        wheelUpHandler(getCurPage);
        break;
      case 'ArrowDown':
        wheelDownHandler(getCurPage);
        break;
      default:
        break;
    }
  }
  // SWIPE FOR PAGE TO GOES DOWN
  function swipeUpHandler() {
    const swipeActive = localStorage.getItem('swipeActive');
    setTimeout(() => {
      if (swipeActive === 'true') {
        return;
      } else {
        // localStorage.setItem("swipeActive", "true");
        const getCurPage = localStorage.getItem('currentPage');
        wheelDownHandler(getCurPage);
        setTimeout(() => {
          // localStorage.setItem("swipeActive", "false");
        }, transitionPaused);
      }
    }, 1000);
  }
  // SWIPE FOR PAGE TO GOES UP
  function swipeDownHandler() {
    const swipeActive = localStorage.getItem('swipeActive');
    setTimeout(() => {
      if (swipeActive === 'true') {
        return;
      } else {
        // localStorage.setItem("swipeActive", "true");
        const getCurPage = localStorage.getItem('currentPage');
        wheelUpHandler(getCurPage);
        setTimeout(() => {
          // localStorage.setItem("swipeActive", "false");
        }, transitionPaused);
      }
    }, 1000);
  }

  // PAGE GOES DOWN ************************************************************
  function wheelDownHandler(currentPageProps) {
    // alert(currentPageProps);
    const isMenuActive = localStorage.getItem('menuIsActive');
    if (wheelActive || isMenuActive === 'true') {
      return;
    } else if (parseInt(currentPageProps) === 1) {
      // SHOW LOGO:
      document.getElementById('logo-maxmix').classList.add('logoFadein');
      document.getElementById('logo-maxmix').classList.remove('logoHiding');

      // props.firstPage GOES TO FALSE:
      wheelActive = true;
      localStorage.setItem('swipeActive', 'true');
      props.onFirstPageFalse();
      setIntroSecondPage(
        <IntroSecondPage animateSkills={true} animation="enterSecondPage" />
      );
      setTimeout(() => {
        localStorage.setItem('currentPage', 2);
        wheelActive = false;
        localStorage.setItem('swipeActive', 'false');
      }, transitionPaused);
    } else if (parseInt(currentPageProps) === 2) {
      wheelActive = true;
      localStorage.setItem('swipeActive', 'true');
      setIntroSecondPage(
        <IntroSecondPage animation="exitToThirdPage" zoomImage="zoomInImage" />
      );
      setIntroThirdPage(
        <IntroThirdPage
          animation="enterThirdPage"
          enterText="enterTextFromRight"
        />
      );
      setTimeout(() => {
        localStorage.setItem('currentPage', 3);
        wheelActive = false;
        localStorage.setItem('swipeActive', 'false');
        localStorage.setItem('page2CurFrase', 1);
      }, transitionPaused);
    } else if (parseInt(currentPageProps) === 3) {
      wheelActive = true;
      localStorage.setItem('swipeActive', 'true');
      setIntroSecondPage(
        <IntroSecondPage animation="exitToPage4" zoomImage="zoomInImage" />
      );
      setIntroPage4(
        <IntroPage4
          animation="enterPage4"
          image="image1"
          animateSkills={true}
        />
      );
      setTimeout(() => {
        localStorage.setItem('currentPage', 4);
        wheelActive = false;
        localStorage.setItem('swipeActive', 'false');
        localStorage.setItem('page3CurFrase', 1);
        // const page4CurFrase = localStorage.getItem("page4CurFrase");
      }, transitionPaused);
      setTimeout(() => {
        // BETTER LEAVE the page LOADED outside for the images
        // doesn't need to load again on enter:
        setIntroThirdPage(<IntroThirdPage animation="stayOutside" />);
        // setIntroThirdPage(null);
      }, eraseComponent);
    } else if (parseInt(currentPageProps) === 4) {
      wheelActive = true;
      localStorage.setItem('swipeActive', 'true');
      setIntroPage4(<IntroPage4 animation="noMoviment" image="image1" />);
      setIntroPage5(<IntroPage5 animation="enterPage5" />);
      setTimeout(() => {
        localStorage.setItem('currentPage', 5);
        wheelActive = false;
        localStorage.setItem('swipeActive', 'false');
      }, transitionPaused);
    } else if (parseInt(currentPageProps) === 5) {
      wheelActive = true;
      localStorage.setItem('swipeActive', 'true');
      // props.lastPage GOES TO TRUE
      props.onLastPageTrue();
      // CHANGING props.directionDown to FALSE case it was TRUE!
      let getDirection = localStorage.getItem('directionDown');
      if (getDirection === 'true') {
        props.onDirectionDownToUp();
        localStorage.setItem('directionDown', 'false');
      }
      setIntroPage6(<IntroPage6 animation="enterPage6" startImage2={true} />);
      setTimeout(() => {
        localStorage.setItem('currentPage', 6);
        wheelActive = false;
        localStorage.setItem('swipeActive', 'false');
        localStorage.setItem('page5CurFrase', 1);
        // const transitionPaused = 1200;
        // transitionPaused * 5 = 6 segundos
      }, transitionPaused * 5);
      setTimeout(() => {
        // BETTER LEAVE the page LOADED outside for the images
        // doesn't need to load again on enter:
        setIntroPage5(<IntroPage5 animation="stayOutside" image="image2" />);
        // Put in place the next image of component <IntroPage4 />:
        // setIntroPage4(<IntroPage4 animation="noMovement" image="image3" />);
        // setIntroPage4(null);
        // setIntroPage5(null);
        // localStorage.setItem('page4CurFrase', 1)
      }, eraseComponent);
      localStorage.setItem('page4CurFrase', 1);
    }
  }

  // PAGE GOES UP ************************************************************
  function wheelUpHandler(currentPageProps) {
    const isMenuActive = localStorage.getItem('menuIsActive');
    if (wheelActive || isMenuActive === 'true') {
      return;
    } else if (parseInt(currentPageProps) === 2) {
      // HIDE LOGO:
      document.getElementById('logo-maxmix').classList.remove('logoFadein');
      document.getElementById('logo-maxmix').classList.add('logoHiding');

      wheelActive = true;
      localStorage.setItem('swipeActive', 'true');
      // props.firstPage GOES TO TRUE
      props.onFirstPageTrue();

      // CHANGING props.directionDown to TRUE case it was FALSE!
      let getDirection = localStorage.getItem('directionDown');
      // if (props.directionDown) {
      if (getDirection === 'false') {
        props.onDirectionDownTrue();
        localStorage.setItem('directionDown', true);
      }
      setIntroSecondPage(<IntroSecondPage animation="backToFirst" />);
      setTimeout(() => {
        localStorage.setItem('currentPage', 1);
        wheelActive = false;
        localStorage.setItem('swipeActive', 'false');
        localStorage.setItem('page2CurFrase', 0);
      }, transitionPaused);
      setTimeout(() => {
        setIntroSecondPage(<IntroSecondPage animation="stayOutside" />);
        // setIntroSecondPage(null);
      }, eraseComponent);
    } else if (parseInt(currentPageProps) === 3) {
      wheelActive = true;
      localStorage.setItem('swipeActive', 'true');
      setIntroSecondPage(
        <IntroSecondPage animation="reverseToSecond" zoomImage="zoomOutImage" />
      );
      setIntroThirdPage(<IntroThirdPage animation="backToSecond" />);
      setTimeout(() => {
        localStorage.setItem('currentPage', 2);
        wheelActive = false;
        localStorage.setItem('swipeActive', 'false');
        localStorage.setItem('page3CurFrase', 0);
      }, transitionPaused);
      setTimeout(() => {
        setIntroThirdPage(<IntroThirdPage animation="stayOutside" />);
        // setIntroThirdPage(null);
      }, eraseComponent);
    } else if (parseInt(currentPageProps) === 4) {
      wheelActive = true;
      localStorage.setItem('swipeActive', 'true');
      // alert("image3");
      setIntroPage4(<IntroPage4 animation="exitPage4" image="image1" />);
      setIntroSecondPage(
        <IntroSecondPage
          animation="comeBackFromPage4"
          zoomImage="zoomInImage"
        />
      );
      setIntroThirdPage(
        <IntroThirdPage
          animation="translateXStays0"
          enterText="enterTextFromLeft"
        />
      );
      setTimeout(() => {
        localStorage.setItem('currentPage', 3);
        wheelActive = false;
        localStorage.setItem('swipeActive', 'false');
        localStorage.setItem('page4CurFrase', 0);
        // setIntroPage4(null);
      }, transitionPaused);
      setTimeout(() => {
        // setIntroPage4(<IntroPage4 animation="stayOutside" />);
        setIntroPage4(null);
      }, eraseComponent);
    } else if (parseInt(currentPageProps) === 5) {
      wheelActive = true;
      localStorage.setItem('swipeActive', 'true');
      setIntroPage4(<IntroPage4 image="image1" animateSkills={true} />);
      // setIntroPage4(<IntroPage4 animation="noMovement" image="image1" />);
      const upDirectonPage5Aux = localStorage.getItem('upDirectonPage5');
      if (upDirectonPage5Aux === 'true') {
        setIntroPage5(
          <IntroPage5
            animation="exitPage5"
            image="image2"
            imageDown="imageDown2"
          />
        );
      } else {
        setIntroPage5(
          <IntroPage5
            animation="exitPage5"
            image="image1"
            imageDown="imageDown1"
          />
        );
      }
      setTimeout(() => {
        wheelActive = false;
        localStorage.setItem('swipeActive', 'false');
        localStorage.setItem('upDirectonPage5', false);
        // upDirectonPage5 = false;
        localStorage.setItem('currentPage', 4);
        localStorage.setItem('page5CurFrase', 0);
      }, transitionPaused);
      setTimeout(() => {
        setIntroPage5(
          <IntroPage5
            animation="exitPage5"
            image="image1"
            imageDown="imageDown1"
          />
        );
      }, eraseComponent);
    } else if (parseInt(currentPageProps) === 6) {
      wheelActive = true;
      localStorage.setItem('swipeActive', 'true');
      // props.lastPage GOES TO FALSE
      props.onLastPageFalse();
      // upDirectonPage5 = true;
      localStorage.setItem('upDirectonPage5', true);
      setIntroPage6(<IntroPage6 animation="exitPage6" />);
      setIntroPage5(
        <IntroPage5
          animation="noMovement"
          image="image2"
          imageDown="imageDown2"
        />
      );
      setIntroPage4(
        <IntroPage4
          animation="noMovement"
          // textAnimation={true}
          image="image3"
        />
      );
      setTimeout(() => {
        localStorage.setItem('currentPage', 5);
        wheelActive = false;
        localStorage.setItem('swipeActive', 'false');
      }, transitionPaused);
      setTimeout(() => {
        setIntroPage6(<IntroPage6 animation="stayOutside" />);
        // setIntroPage6(null);
      }, eraseComponent);
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
        {/* <div className={classes.showAuxiliarClass}>TESTING AREA</div> */}
        <FirstIntroBlack showComponent={<IntroPage1 />} />
        {/* <IntroPage1 /> */}
        {/* <IntroPage5 /> */}
        <ArrowDown
          arrowDownHandler={swipeUpHandler}
          arrowUpHandler={swipeDownHandler}
        />
        <span className={classes.fadeInMenu}>
          <Menu
            wheelDirectionHandler={wheelDirectionHandler}
            keyDownHandler={keyDownHandler}
          />
          <LogoMaxMix hoverNotActive="hoverNotActive" />
        </span>
        {introPage6}
        {introPage5}
        {introPage4}
        {introThirdPage}
        {introSecondPage};
      </Swipe>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    lastPage: state.global.lastPage,
    firstPage: state.global.firstPage,
    directionDown: state.global.directionDown,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFirstPageTrue: () => dispatch(actionTypes.firstPageTrue()),
    onFirstPageFalse: () => dispatch(actionTypes.firstPageFalse()),

    onLastPageTrue: () => dispatch(actionTypes.lastPageTrue()),
    onLastPageFalse: () => dispatch(actionTypes.lastPageFalse()),

    onDirectionDownTrue: () => dispatch(actionTypes.directionDownTrue()),
    onDirectionDownToUp: () => dispatch(actionTypes.directionDownToUp()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IntroPage);
