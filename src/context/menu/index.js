// IMPORTED ON APP.JS:
import React, { useContext, useState } from 'react';

const MenuIsOnContext = React.createContext();
const MenuIsOnToFalse = React.createContext();
const MenuIsOnToTrue = React.createContext();

export function useMenuIsOn() {
  return useContext(MenuIsOnContext);
}
export function useMenuIsOnToFalse() {
  return useContext(MenuIsOnToFalse);
}
export function useMenuIsOnToTrue() {
  return useContext(MenuIsOnToTrue);
}

export function MenuIsOnProvider({ children }) {
  const [menuIsOn, setMenuIsOn] = useState(false);

  function menuToFalse() {
    setMenuIsOn(false);
  }
  function menuToTrue() {
    setMenuIsOn(true);
  }

  return (
    <MenuIsOnContext.Provider value={menuIsOn}>
      <MenuIsOnToFalse.Provider value={menuToFalse}>
        <MenuIsOnToTrue.Provider value={menuToTrue}>
          {children}
        </MenuIsOnToTrue.Provider>
      </MenuIsOnToFalse.Provider>
    </MenuIsOnContext.Provider>
  );
}
