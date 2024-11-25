import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faBars,
  faUser,
  faCogs,
  faTable,
  faList,
} from "@fortawesome/free-solid-svg-icons";

import "./Component.css";

const Sidebar = ({ isOpen, handleTrigger }) => {
  return (
    <div className={`sidebar${isOpen ? " sidebar--open" : ""}`}>
      <div className="trigger" onClick={handleTrigger}>
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
      </div>

      <div className="sidebar-position">
        <FontAwesomeIcon icon={faUser} />
        <span>Home</span>
      </div>
      <div className="sidebar-position">
        <FontAwesomeIcon icon={faCogs} />
        <span>Menu item 2</span>
      </div>
      <div className="sidebar-position">
        <FontAwesomeIcon icon={faTable} />
        <span>Menu item 3</span>
      </div>
      <div className="sidebar-position">
        <FontAwesomeIcon icon={faList} />
        <span>Position 4</span>
      </div>
    </div>
  );
};

export default Sidebar;
