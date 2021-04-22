import * as actionTypes from "../actions/actionsTypes";

// lastPage is a GLOBAL STATE:
const initialState = {
  firstPage: true,
  lastPage: false,
  directionDown: true,
  showMenu: false,
  // I will use TOGGLE to know if swiped. If it changes
  // from true to false or vice-versa, it was activated:
  swipedUp: false,
  swipedDown: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FIRST_PAGE_TRUE:
      return {
        ...state,
        firstPage: true,
      };
    case actionTypes.FIRST_PAGE_FALSE:
      return {
        ...state,
        firstPage: false,
      };
    case actionTypes.LAST_PAGE_TRUE:
      return {
        ...state,
        lastPage: true,
      };
    case actionTypes.LAST_PAGE_FALSE:
      return {
        ...state,
        lastPage: false,
      };

    case actionTypes.DIRECTION_DOWN_TRUE:
      return {
        ...state,
        directionDown: true,
      };

    case actionTypes.DIRECTION_DOWN_TO_UP:
      return {
        ...state,
        directionDown: false,
      };

    case actionTypes.SHOW_MENU_TO_FALSE:
      return {
        ...state,
        showMenu: false,
      };

    case actionTypes.SHOW_MENU_TO_TRUE:
      return {
        ...state,
        showMenu: true,
      };

    case actionTypes.SWIPED_UP:
      return {
        ...state,
        swipedUp: !state.swipedUp,
      };

    case actionTypes.SWIPED_DOWN:
      return {
        ...state,
        swipedDown: !state.swipedDown,
      };

    // case actionTypes.HIDE_SIDEDRAWER:
    //   return {
    //     ...state,
    //     toggleSideDrawer: false,
    //   };

    default:
      return state;
  }
};

export default reducer;
