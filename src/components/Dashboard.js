import React, { useMemo, useState, useEffect } from "react";
import { Line, Doughnut } from "react-chartjs-2";
import $ from "jquery";
import "datatables.net";

import { useTable, useSortBy, usePagination } from "react-table";
import axios from "axios";
import "./Component.css";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Dashboard = ({ isOpen }) => {
  const statsData = {
    notifications: [
      {
        time: "2024-11-25 10:00 AM",
        type: "Info",
        message: "Your order was successfully placed.",
      },
      {
        time: "2024-11-25 11:30 AM",
        type: "Warning",
        message: "The market is volatile.",
      },
      {
        time: "2024-11-25 12:45 PM",
        type: "Error",
        message: "Order failed due to insufficient balance.",
      },
    ],
  };

  useEffect(() => {
    $("#notificationsTable").DataTable();
  }, []);

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    axios
      .get("/trades.json")
      .then((response) => {
        setTableData(response.data);
        console.log("LLLL", response.data);
      })
      .catch((error) => console.error("Error fetching table data:", error));
  }, []);

  const columns = useMemo(
    () => [
      { Header: "Symbol", accessor: "symbol" },
      { Header: "Type", accessor: "type" },
      { Header: "Open Date", accessor: "openDate" },
      { Header: "Open Price", accessor: "openPrice" },
      { Header: "Stop Loss (SL)", accessor: "sl" },
      { Header: "Take Profit (TP)", accessor: "tp" },
      { Header: "Close Date", accessor: "closeDate" },
      { Header: "Close Price", accessor: "closePrice" },
      { Header: "Lots", accessor: "lots" },
      { Header: "Profit ($)", accessor: "profit" },
      { Header: "Duration", accessor: "duration" },
      { Header: "Gain (%)", accessor: "gain" },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data: tableData,
      initialState: { pageSize: 5 },
    },
    useSortBy,
    usePagination
  );

  const pieData = {
    labels: ["NZDUSD", "USDCHF", "GBPUSD", "AUDNZD"],
    datasets: [
      {
        data: [25, 35, 20, 20],
        backgroundColor: ["#377DFF", "#00DFA2", "#FF6B6B", "#FFA600"],
        hoverBackgroundColor: ["#377DFF", "#00DFA2", "#FF6B6B", "#FFA600"],
        borderWidth: 0,
      },
    ],
  };

  const pieOptions = {
    plugins: {
      legend: { display: false },
    },
    cutout: "75%",
    maintainAspectRatio: false,
  };

  const graphData = {
    labels: ["1", "2", "3", "4"],
    datasets: [
      {
        label: "Balance",
        data: [100000, 95000, 97000, 110000],
        borderColor: "#4CAF50",
        backgroundColor: "rgba(76, 175, 80, 0.3)",
        fill: true,
      },
      {
        label: "Equity",
        data: [90000, 94000, 96000, 100000],
        borderColor: "#FF5722",
        backgroundColor: "rgba(255, 87, 34, 0.3)",
        fill: true,
      },
    ],
  };

  const graphOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { display: true },
      y: { display: true },
    },
    plugins: {
      legend: { display: false },
    },
  };

  return (
    <div
      style={{
        marginLeft: isOpen ? "17%" : "5%",
        width: isOpen ? "80%" : "100%",
        paddingLeft: "50px",

        transition: "margin-left 0.3s ease",
      }}
      className="container my-4"
    >
      <div className="row mb-4">
        <div className="col-lg-7">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5>Total Balance</h5>
              <p className="text-success">Profit: +0.8%</p>
              <div style={{ height: "300px" }}>
                <Line data={graphData} options={graphOptions} />
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-5">
          <div className="row gap-4 mb-4 py-0">
            <div className="col-6 card shadow-sm mb-3 ">
              <div className="card-body">
                <h6>Profit Target</h6>
                <h4>$8,908.99</h4>
                <p className="text-secondary">
                  Equity Pass <br /> Level{" "}
                  <span className="text-primary">$124,900.00</span>
                </p>
              </div>
            </div>
            <div className="col-5 card shadow-sm mb-3">
              <div className="card-body">
                <h6>Daily Loss Limit</h6>
                <h4>$12,908.99</h4>
                <p className="text-secondary">
                  Equity Breach Level{" "}
                  <span className="text-danger">$124,900.00</span>
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="card shadow-sm p-3"
              style={{ borderRadius: "10px" }}
            >
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="m-0">Most Traded</h6>
                <i className="bi bi-three-dots"></i>
              </div>
              <div className="d-flex align-items-center">
                <div className="flex-grow-1">
                  <ul className="list-unstyled mb-0">
                    <li className="d-flex align-items-center mb-2">
                      <span
                        className="dot"
                        style={{
                          backgroundColor: "#377DFF",
                          width: "10px",
                          height: "10px",
                          borderRadius: "50%",
                          marginRight: "8px",
                        }}
                      ></span>
                      NZDUSD
                    </li>
                    <li className="d-flex align-items-center mb-2">
                      <span
                        className="dot"
                        style={{
                          backgroundColor: "#FF6B6B",
                          width: "10px",
                          height: "10px",
                          borderRadius: "50%",
                          marginRight: "8px",
                        }}
                      ></span>
                      GBPUSD
                    </li>
                    <li className="d-flex align-items-center mb-2">
                      <span
                        className="dot"
                        style={{
                          backgroundColor: "#00DFA2",
                          width: "10px",
                          height: "10px",
                          borderRadius: "50%",
                          marginRight: "8px",
                        }}
                      ></span>
                      AUDCHF
                    </li>
                  </ul>
                </div>
                <div className="flex-grow-1">
                  <ul className="list-unstyled mb-0">
                    <li className="d-flex align-items-center mb-2">
                      <span
                        className="dot"
                        style={{
                          backgroundColor: "#377DFF",
                          width: "10px",
                          height: "10px",
                          borderRadius: "50%",
                          marginRight: "8px",
                        }}
                      ></span>
                      NZDUSD
                    </li>
                    <li className="d-flex align-items-center mb-2">
                      <span
                        className="dot"
                        style={{
                          backgroundColor: "#FF6B6B",
                          width: "10px",
                          height: "10px",
                          borderRadius: "50%",
                          marginRight: "8px",
                        }}
                      ></span>
                      GBPUSD
                    </li>
                    <li className="d-flex align-items-center mb-2">
                      <span
                        className="dot"
                        style={{
                          backgroundColor: "#00DFA2",
                          width: "10px",
                          height: "10px",
                          borderRadius: "50%",
                          marginRight: "8px",
                        }}
                      ></span>
                      AUDCHF
                    </li>
                  </ul>
                </div>

                <div
                  style={{
                    width: "120px",
                    height: "120px",
                    position: "relative",
                  }}
                >
                  <Doughnut data={pieData} options={pieOptions} />
                  <div
                    className="d-flex flex-column justify-content-center align-items-center"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <h6 className="m-0">Total</h6>
                    <h4 className="m-0">16</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="row gap-3">
            <div className="card p-2 col-md-3">
              <h5>Average Win</h5>
              <p>{statsData.averageWin}</p>
            </div>
            <div className="card p-2 col-md-4">
              <h5>Average Loss</h5>
              <p>{statsData.averageLoss}</p>
            </div>
            <div className="card p-2 col-md-4">
              <h5>Profit Factor</h5>
              <p>{statsData.profitFactor}</p>
            </div>
          </div>
          <div className="row gap-3">
            <div className="card p-2 col-md-3">
              <h5>Best Trade</h5>
              <p>{statsData.bestTrade}</p>
            </div>
            <div className="card p-2 col-md-4">
              <h5>Win Ratio</h5>
              <p>{statsData.winRatio}</p>
            </div>
            <div className="card p-2 col-md-4">
              <h5>Risk Reward</h5>
              <p>{statsData.riskReward}</p>
            </div>
          </div>
        </div>
        <div className="card shadow-sm col-md-6">
          <h5>Notifications</h5>
          <table
            id="notificationsTable"
            className="table table-striped table-bordered"
          >
            <thead>
              <tr>
                <th>Time</th>
                <th>Type</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {statsData.notifications.map((notification, index) => (
                <tr key={index}>
                  <td>{notification.time}</td>
                  <td>{notification.type}</td>
                  <td>{notification.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="row">
        <div className="card col-md-12">
          <h2 className="mb-3">Order History</h2>
          <div className="shadow-sm">
            <div className="">
              <table
                {...getTableProps()}
                className="table table-striped table-bordered"
              >
                <thead>
                  {headerGroups.map((headerGroup) => (
                    <tr
                      {...headerGroup.getHeaderGroupProps()}
                      key={headerGroup.id}
                    >
                      {headerGroup.headers.map((column) => (
                        <th
                          {...column.getHeaderProps(
                            column.getSortByToggleProps()
                          )}
                          key={column.id}
                          style={{ cursor: "pointer" }}
                        >
                          {column.render("Header")}
                          <span>
                            {column.isSorted
                              ? column.isSortedDesc
                                ? " 🔽"
                                : " 🔼"
                              : ""}
                          </span>
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {page.map((row) => {
                    prepareRow(row);
                    return (
                      <tr {...row.getRowProps()} key={row.id}>
                        {row.cells.map((cell) => (
                          <td {...cell.getCellProps()} key={cell.column.id}>
                            {cell.render("Cell")}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              <div className="d-flex justify-content-between align-items-center mt-3">
                <button
                  className="btn btn-outline-primary btn-sm"
                  onClick={() => previousPage()}
                  disabled={!canPreviousPage}
                >
                  Previous
                </button>
                <span>
                  Page{" "}
                  <strong>
                    {pageIndex + 1} of {pageOptions.length}
                  </strong>
                </span>
                <button
                  className="btn btn-outline-primary btn-sm"
                  onClick={() => nextPage()}
                  disabled={!canNextPage}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
