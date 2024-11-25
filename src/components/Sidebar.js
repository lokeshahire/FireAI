import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faBars,
  faUser,
  faCogs,
  faTable,
  faList,
  faDollarSign,
  faCertificate,
  faChartLine,
  faListAlt,
  faChartPie,
  faCalculator,
} from "@fortawesome/free-solid-svg-icons";

import "./Component.css";

const Sidebar = ({ isOpen, handleTrigger }) => {
  return (
    <div className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>
      <div className="trigger" onClick={handleTrigger}>
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
      </div>

      <div className="sidebar-header">
        <FontAwesomeIcon icon={faUser} />
        <span> {isOpen ? "Trading" : ""}</span>
      </div>

      <div className="sidebar-menu">
        <div className="sidebar-menu-item">
          <FontAwesomeIcon icon={faDollarSign} />
          <span> {isOpen ? "Accounts Overview" : ""} </span>
        </div>
        <div className="sidebar-menu-item">
          <FontAwesomeIcon icon={faCertificate} />
          <span>{isOpen ? "Payouts" : ""}</span>
        </div>
        <div className="sidebar-menu-item">
          <FontAwesomeIcon icon={faCertificate} />
          <span>{isOpen ? "Certificates" : ""}</span>
        </div>
        <div className="sidebar-menu-item">
          <FontAwesomeIcon icon={faChartLine} />
          <span>{isOpen ? "Leaderboard" : ""}</span>
        </div>
        <div className="sidebar-menu-item">
          <FontAwesomeIcon icon={faListAlt} />
          <span>{isOpen ? "Order List" : ""}</span>
        </div>
        <div className="sidebar-menu-item">
          <FontAwesomeIcon icon={faChartPie} />
          <span>{isOpen ? "News Feeds" : ""}</span>
        </div>
        <div className="sidebar-menu-item">
          <FontAwesomeIcon icon={faChartPie} />
          <span>{isOpen ? "Economic Calendar" : ""}</span>
        </div>
        <div className="sidebar-menu-item">
          <FontAwesomeIcon icon={faCalculator} />
          <span>{isOpen ? "WebTrader Platform" : ""}</span>
        </div>
        <div className="sidebar-menu-item">
          <FontAwesomeIcon icon={faCalculator} />
          <span>{isOpen ? "Margin Calculator" : ""}</span>
        </div>
        <div className="sidebar-menu-item">
          <FontAwesomeIcon icon={faCalculator} />
          <span>{isOpen ? "Profit Calculator" : ""}</span>
        </div>
      </div>

      <div className="sidebar-footer">
        <div className="sidebar-footer-item">
          <span>{isOpen ? "Account" : ""}</span>
          <span>{isOpen ? "9999999" : ""}</span>
        </div>
        <div className="sidebar-footer-item">
          <span>{isOpen ? "Status" : ""}</span>
          <span>{isOpen ? "Active" : ""}</span>
        </div>
        <div className="sidebar-footer-item">
          <span>{isOpen ? "Program" : ""}</span>
          <span>{isOpen ? "$50,000 Evl." : ""}</span>
        </div>
        <div className="sidebar-footer-item">
          <img src="user-avatar.png" alt="User Avatar" />
          <span>{isOpen ? "Daniel Sullivan" : ""}</span>
          <span>{isOpen ? "alex@gmail.com" : ""}</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
