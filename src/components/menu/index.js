import React, { useState, useEffect } from "react";
// npm i react-redux
import { connect } from "react-redux";

// import classes from "./style.module.scss";

import MenuBars from "./menuBars";
import MenuPage from "./menuPage";

import ContactComponent from "../contact";
import ImageForComponent from "../UI/imageForComponent";

function Menu(props) {
  const [showMenu, setShowMenu] = useState("");
  const [menuBars, setMenuBars] = useState("");
  const [contactComponent, showContactComponent] = useState("");
  const [imageForComponent, setImageForComponent] = useState("");

  useEffect(() => {
    let isMounted = true; // note this flag denote mount status

    if (props.lastPage) {
      setMenuBars(null);
      setTimeout(() => {
        if (isMounted) {
          setMenuBars(
            <MenuBars
              showMenuHandler={showMenuHandler}
              hideMenuHandler={hideMenuHandler}
              shakeMenu="shakeMenu"
            />
          );
        }
      }, 4000);
    } else {
      setMenuBars(
        <MenuBars
          showMenuHandler={showMenuHandler}
          hideMenuHandler={hideMenuHandler}
          shakeMenu="DontshakeMenu"
        />
      );
    }
    return () => {
      isMounted = false;
    }; // use effect cleanup to set flag false, if unmounted
  }, [props.lastPage]);

  function showMenuHandler() {
    window.removeEventListener("wheel", props.wheelDirectionHandler);
    document.removeEventListener("keydown", props.keyDownHandler);
    localStorage.setItem("menuIsActive", "true");
    setShowMenu(
      <MenuPage
        fadeMenu={"fadeInMenu"}
        enterLines={"enterLine"}
        enterTexts={"enterTexts"}
        showContact={showContact}
      />
    );
  }
  function hideMenuHandler() {
    window.addEventListener("wheel", props.wheelDirectionHandler);
    document.addEventListener("keydown", props.keyDownHandler);
    localStorage.setItem("menuIsActive", "false");
    setShowMenu(
      <MenuPage
        fadeMenu={"fadeOutMenu"}
        enterLines={"exitLine"}
        enterTexts={"exitTexts"}
      />
    );
    setTimeout(() => {
      setShowMenu("");
    }, 500);
  }

  function showContact() {
    setImageForComponent(
      <ImageForComponent
        componentImage="contactImage"
        animationDirection="enterImage"
        icon="showIcon"
        hideComponent={hideContact}
      />
    );
    showContactComponent(<ContactComponent />);
    setMenuBars(
      <MenuBars
        // showMenuHandler={showMenuHandler}
        hideContact={hideContact}
        shakeMenu="DontshakeMenu"
        closingMenuBars={true}
      />
    );
  }
  function hideContact() {
    showContactComponent(<ContactComponent closeFormClass="closeFormClass" />);
    setTimeout(() => {
      setImageForComponent(
        <ImageForComponent
          componentImage="contactImage"
          animationDirection="hideImage"
          icon="hideIcon"
          // hideComponent={() => {}}
        />
      );
      setMenuBars(
        <MenuBars
          showMenuHandler={showMenuHandler}
          hideMenuHandler={hideMenuHandler}
          shakeMenu="DontshakeMenu"
          closingMenuBars={false}
        />
      );
    }, 400);
    setTimeout(() => {
      showContactComponent(null);
      setImageForComponent(null);
    }, 1500);
  }
  return (
    <>
      {imageForComponent}
      {contactComponent}
      {menuBars}
      {showMenu}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    lastPage: state.global.lastPage,
  };
};

export default connect(mapStateToProps)(Menu);
