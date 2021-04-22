import * as actionTypes from "./actionsTypes";

export const lastPageTrue = () => {
  return {
    type: actionTypes.LAST_PAGE_TRUE,
  };
};
export const lastPageFalse = () => {
  return {
    type: actionTypes.LAST_PAGE_FALSE,
  };
};
export const firstPageTrue = () => {
  return {
    type: actionTypes.FIRST_PAGE_TRUE,
  };
};
export const firstPageFalse = () => {
  return {
    type: actionTypes.FIRST_PAGE_FALSE,
  };
};

export const directionDownTrue = () => {
  return {
    type: actionTypes.DIRECTION_DOWN_TRUE,
  };
};

export const directionDownToUp = () => {
  return {
    type: actionTypes.DIRECTION_DOWN_TO_UP,
  };
};

export const showMenuToFalse = () => {
  return {
    type: actionTypes.SHOW_MENU_TO_FALSE,
  };
};
export const showMenuToTrue = () => {
  return {
    type: actionTypes.SHOW_MENU_TO_TRUE,
  };
};

export const swipedUp = () => {
  return {
    type: actionTypes.SWIPED_UP,
  };
};
export const swipedDown = () => {
  return {
    type: actionTypes.SWIPED_DOWN,
  };
};
