import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionsIndex';
import CubeAboutComponent from '../../components/cubeAbout';
import LogoMaxMix from '../../components/logoMaxMix';
import classes from './style.module.scss';

function AboutCube(props) {
  const [cube, setCube] = useState(null);
  const [aboutStyle, setAboutStyle] = useState('');

  useEffect(() => {
    props.onFirstPageTrue();
    props.onLastPageFalse();

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

const mapDispatchToProps = (dispatch) => {
  return {
    onFirstPageTrue: () => dispatch(actionTypes.firstPageTrue()),
    onLastPageFalse: () => dispatch(actionTypes.lastPageFalse()),
  };
};
export default connect(null, mapDispatchToProps)(AboutCube);
