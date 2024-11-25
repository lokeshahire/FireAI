import React from "react";
import { Line } from "react-chartjs-2";
import { useTable } from "react-table";
import "./Component.css";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = ({ isOpen }) => {
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

  // Data for the table
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
      {/* Row 1: Balance Chart */}
      <div className="row mb-4">
        <div className="col-lg-8">
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

        <div className="col-lg-4">
          {/* Cards for Profit Target and Loss Limit */}
          <div className="card shadow-sm mb-3">
            <div className="card-body">
              <h6>Profit Target</h6>
              <h4>$8,908.99</h4>
              <p className="text-secondary">
                Equity Pass Level{" "}
                <span className="text-primary">$124,900.00</span>
              </p>
            </div>
          </div>
          <div className="card shadow-sm">
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
      </div>

      {/* Row 2: Most Traded Section */}
      <div className="row">
        <div className="col-lg-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h6>Most Traded</h6>
              <ul className="list-unstyled">
                <li className="d-flex justify-content-between">
                  <span>NZDUSD</span>
                  <span>Value</span>
                </li>
                <li className="d-flex justify-content-between">
                  <span>GBPUSD</span>
                  <span>Value</span>
                </li>
                <li className="d-flex justify-content-between">
                  <span>AUDCHF</span>
                  <span>Value</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h6>Total</h6>
              <div className="d-flex justify-content-between align-items-center">
                <h4>16</h4>
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    border: "5px solid #4CAF50",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-4"></div>

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
