import React, { useState, useEffect } from 'react';
import CubeAboutComponent from '../../components/cubeAbout';
import LogoMaxMix from '../../components/logoMaxMix';
import classes from './style.module.scss';

export default function Projects() {
  const [cube, setCube] = useState(null);
  const [aboutStyle, setAboutStyle] = useState('');

  useEffect(() => {
    setAboutStyle('showAbout');
    setTimeout(() => {
      setCube(<CubeAboutComponent />);
    }, 3000);
  }, []);

  return (
    <>
      <span className={classes.fadeInLogo}>
        <LogoMaxMix />
      </span>
      <div className={classes.root}>
        <div className={[classes.about, classes[aboutStyle]].join(' ')}></div>
        {cube}
      </div>
    </>
  );
}
