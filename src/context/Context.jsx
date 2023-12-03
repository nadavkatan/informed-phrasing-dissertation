// DrawerContext.js
import { createContext, useState, useContext } from "react";

const DrawerContext = createContext();

export const DrawerContextProvider = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (value) => {
    setDrawerOpen(value);
  };

  return (
    <DrawerContext.Provider value={{ drawerOpen, toggleDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
};

export const useDrawerContext = () => {
  return useContext(DrawerContext);
};
