// IMAGE used on the component CONTACT, can be used in other
// components with different image as props

import React from "react";

import classes from "./style.module.scss";

// import { FiXCircle } from "react-icons/fi";

export default function ImageForComponent(props) {
  //   let nextClickAllowed = true;

  //   function executePropsFunction() {
  //     if (nextClickAllowed) {
  //       props.hideComponent();
  //       nextClickAllowed = false;
  //     }
  //     setTimeout(() => {
  //       nextClickAllowed = true;
  //     }, 2000);
  //   }

  return (
    <>
      {/* <div className={[classes[props.icon]]} onClick={executePropsFunction}>
        <FiXCircle size={40} color="white" />
      </div> */}
      <div
        className={[
          classes.container,
          classes[props.componentImage],
          classes[props.animationDirection],
        ].join(" ")}
      ></div>
    </>
  );
}
