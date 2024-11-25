import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { notificationsData } from "../data/mockData";

const Notifications = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const pageCount = Math.ceil(notificationsData.length / itemsPerPage);
  const displayedData = notificationsData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="notifications">
      <ul>
        {displayedData.map((notification, index) => (
          <li key={index}>
            <p>{notification.time}</p>
            <p>{notification.message}</p>
          </li>
        ))}
      </ul>
      <ReactPaginate
        pageCount={pageCount}
        onPageChange={handlePageChange}
        containerClassName="pagination"
      />
    </div>
  );
};

export default Notifications;
