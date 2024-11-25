import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { orderHistoryData } from "../data/mockData";

const OrderHistory = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const pageCount = Math.ceil(orderHistoryData.length / itemsPerPage);
  const displayedData = orderHistoryData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="order-history">
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Type</th>
            <th>Open Date</th>
            <th>Profit</th>
          </tr>
        </thead>
        <tbody>
          {displayedData.map((order, index) => (
            <tr key={index}>
              <td>{order.symbol}</td>
              <td>{order.type}</td>
              <td>{order.openDate}</td>
              <td>{order.profit}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
        pageCount={pageCount}
        onPageChange={handlePageChange}
        containerClassName="pagination"
      />
    </div>
  );
};

export default OrderHistory;
