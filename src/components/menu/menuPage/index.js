import React, { useState, useEffect } from 'react';
// npm install --save react-router-dom
import { Link } from 'react-router-dom';
import classes from './style.module.scss';
import popClick from '../../../assets/sounds/popSound.mp3';

export default function MenuPage(props) {
  const [projectPage, setProjectPage] = useState('');
  const [aboutPage, setAboutPage] = useState('');
  const [aboutCubePage, setAboutCubePage] = useState('');
  const [contactPage, setContactPage] = useState('');

  useEffect(() => {
    let url = window.location.href;
    let words = url.split('/');
    // console.log(words);
    const lastWord = words[words.length - 1];
    if (lastWord === 'projects') {
      setProjectPage('currentPage');
    } else if (lastWord === 'about') {
      setAboutPage('currentPage');
    } else if (lastWord === 'about-cube') {
      setAboutCubePage('currentPage');
    }
    if (lastWord === 'contact') {
      setContactPage('currentPage');
    }
  }, []);

  function playClick() {
    // setTimeout(() => {
    const audio = new Audio(popClick);
    audio.play();
    // }, 100);
  }

  return (
    <div className={[classes.menuContainer, classes[props.fadeMenu]].join(' ')}>
      <div className={classes.content}>
        <hr className={classes[`${props.enterLines}1`]} />
        {/* WAITING TIME TO ALLOW POINTER EVENTS: */}
        <span className={classes.pointerEventTime}>
          <Link to="/projects">
            <h1
              className={[
                classes.h1First,
                classes[props.enterTexts],
                classes[projectPage],
              ].join(' ')}
              onMouseOver={() => playClick()}
            >
              projects
            </h1>
          </Link>
          <hr className={classes[`${props.enterLines}2`]} />
          <Link to="/about">
            <h1
              className={[
                classes.h1Second,
                classes[props.enterTexts],
                classes[aboutPage],
              ].join(' ')}
              onMouseOver={() => playClick()}
            >
              about
            </h1>
          </Link>
          <hr className={classes[`${props.enterLines}3`]} />
          <Link to="/about-cube">
            <h1
              className={[
                classes.h1Third,
                classes[props.enterTexts],
                classes[aboutCubePage],
              ].join(' ')}
              onMouseOver={() => playClick()}
            >
              the cube
            </h1>
          </Link>
          <hr className={classes[`${props.enterLines}4`]} />
          <h1
            className={[
              classes.h1Forth,
              classes[props.enterTexts],
              classes[contactPage],
            ].join(' ')}
            onMouseOver={() => playClick()}
            onClick={() => props.showContact()}
          >
            contact
          </h1>
        </span>
        <hr className={classes[`${props.enterLines}5`]} />
      </div>
    </div>
  );
}
