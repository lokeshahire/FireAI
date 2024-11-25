import React from "react";
import { Line, Doughnut } from "react-chartjs-2";

import { useTable } from "react-table";
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

  const tableData = React.useMemo(
    () => [
      {
        symbol: "EURUSD.i",
        type: "Buy",
        openDate: "2024-11-20",
        openPrice: "1.105",
        sl: "1.100",
        tp: "1.120",
        closeDate: "2024-11-21",
        closePrice: "1.115",
        lots: "1.0",
        profit: "100",
        duration: "24h",
        gain: "9%",
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      { Header: "Symbol", accessor: "symbol" },
      { Header: "Type", accessor: "type" },
      { Header: "Open Date", accessor: "openDate" },
      { Header: "Open Price", accessor: "openPrice" },
      { Header: "SL", accessor: "sl" },
      { Header: "TP", accessor: "tp" },
      { Header: "Close Date", accessor: "closeDate" },
      { Header: "Close Price", accessor: "closePrice" },
      { Header: "Lots", accessor: "lots" },
      { Header: "Profit", accessor: "profit" },
      { Header: "Duration", accessor: "duration" },
      { Header: "Gain", accessor: "gain" },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: tableData });

  const statsData = {
    averageWin: "$642.00",
    averageLoss: "$0.00",
    profitFactor: "6.4",
    bestTrade: "$8,908.99",
    winRatio: "-$4,800.90",
    riskReward: "$3,490.00",
    notifications: [
      {
        time: "12 days ago",
        type: "RulesSoftBreach",
        message: "Closed trade not placed with a stop-loss",
      },
      {
        time: "8 days ago",
        type: "RulesSoftBreach",
        message: "Days since a trade was placed, closed...",
      },
      // ... more notifications
    ],
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
          <table className="table table-striped table-bordered">
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
        <div className="col-md-12">
          <h2 className="mb-3">Order History</h2>
          <div className="card shadow-sm">
            <div className="card-body">
              <table
                {...getTableProps()}
                className="table table-striped table-bordered"
              >
                <thead>
                  {headerGroups.map((headerGroup) => (
                    <tr
                      key={headerGroup.id}
                      {...headerGroup.getHeaderGroupProps()}
                    >
                      {headerGroup.headers.map((column) => (
                        <th key={column.id} {...column.getHeaderProps()}>
                          {column.render("Header")}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {rows.map((row) => {
                    prepareRow(row);
                    return (
                      <tr key={row.id} {...row.getRowProps()}>
                        {row.cells.map((cell) => (
                          <td key={cell.column.id} {...cell.getCellProps()}>
                            {cell.render("Cell")}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
