import React from "react";

const Navbar = ({ isOpen }) => {
  return (
    <div
      style={{
        marginLeft: isOpen ? "17%" : "5%",
        transition: "margin-left 0.3s ease",
        paddingLeft: "20px",
      }}
      className="navbar"
    >
      <h1>Welcome back, Alex</h1>
    </div>
  );
};

export default Navbar;
