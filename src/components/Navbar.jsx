import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ isOpen }) => {
  return (
    <div
      style={{
        marginLeft: isOpen ? "20%" : "5%",
        transition: "margin-left 0.3s ease",
        paddingLeft: "20px",
      }}
      className="navbar"
    >
      <h3>Welcome back, Alex</h3>
      <div className="button-container">
        <button className="payout">Request Payout</button>
        <button className="share-matrices">Share Matrices</button>
        <button className="key">
          <FontAwesomeIcon icon={faKey} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
