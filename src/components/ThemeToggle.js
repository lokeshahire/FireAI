import React from "react";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../redux/themeSlice";
import ReactSwitch from "react-switch";

const ThemeToggle = () => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return <ReactSwitch onChange={handleToggle} checked={false} />;
};

export default ThemeToggle;
