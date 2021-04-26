import React, { useState, useEffect, useCallback } from 'react';
// npm i react-redux
import { connect } from 'react-redux';
import classes from './style.module.css';

function MenuBars(props) {
  const [bar1, setBar1] = useState(['enterBar', 'enterBar1']);
  const [bar2, setBar2] = useState(['enterBar', 'enterBar2']);
  const [bar3, setBar3] = useState(['enterBar', 'enterBar3']);
  const [bounce, setBounce] = useState('NObounceX');
  const [shakeOpenMenu, setShakeOpenMenu] = useState('');
  const [disableClick, setDisableClick] = useState('enableClick');

  useEffect(() => {
    let isMounted = true; // note this flag denote mount status

    if (props.shakeMenu === 'shakeMenu') {
      if (isMounted) {
        setShakeOpenMenu('shakeMenu');
      }
    } else {
      if (isMounted) {
        setShakeOpenMenu('dontShakeMenu');
      }
    }

    return () => {
      isMounted = false;
    }; // use effect cleanup to set flag false, if unmounted
  }, [props.shakeMenu, props.lastPage]);

  const changeBarsClass = useCallback(() => {
    if (props.closingMenuBars) {
      // THIS IF is activated when CONTACT enters:
      setDisableClick('disableClick');
      setShakeOpenMenu('dontShakeMenu');
      setBar1(['closeBar', 'closeBar1']);
      setBar2(['makeTheX', 'makeTheXsBars']);
      setBar3(['closeBar', 'closeBar3']);
      setTimeout(() => {
        setBounce('bounceX');
      }, 1000);
      setTimeout(() => {
        setDisableClick('enableClick');
      }, 1500);
      props.hideContact();
    } else if (bar1[0] === 'enterBar') {
      setDisableClick('disableClick');
      setShakeOpenMenu('dontShakeMenu');
      setBar1(['closeBar', 'closeBar1']);
      setBar2(['makeTheX', 'makeTheXsBars']);
      setBar3(['closeBar', 'closeBar3']);
      setTimeout(() => {
        setBounce('bounceX');
      }, 1000);
      setTimeout(() => {
        setDisableClick('enableClick');
      }, 1500);
      props.showMenuHandler();
    } else {
      setDisableClick('disableClick');
      setBar1(['enterBar', 'enterBar1']);
      setBar2(['enterBar', 'enterBar2']);
      setBar3(['enterBar', 'enterBar3']);
      setBounce('NObounceX');
      props.hideMenuHandler();
      setTimeout(() => {
        setDisableClick('enableClick');
      }, 1500);
    }
  }, [bar1[0], props.closingMenuBars]);

  useEffect(() => {
    if (props.showMenu) {
      changeBarsClass();
    }
  }, [props.showMenu]);

  return (
    <div
      className={[
        classes.containerBars,
        classes[bounce],
        classes[shakeOpenMenu],
        classes[disableClick],
      ].join(' ')}
      onClick={changeBarsClass}
    >
      <div className={[classes[bar1[0]], classes[bar1[1]]].join(' ')} />
      <div className={[classes[bar2[0]], classes[bar2[1]]].join(' ')} />
      <div className={[classes[bar3[0]], classes[bar3[1]]].join(' ')} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    lastPage: state.global.lastPage,
    showMenu: state.global.showMenu,
  };
};

export default connect(mapStateToProps)(MenuBars);
