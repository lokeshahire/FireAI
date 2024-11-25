import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";

const App = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleTrigger = () => setIsOpen(!isOpen);

  return (
    <div className="app">
      <Sidebar isOpen={isOpen} handleTrigger={handleTrigger} />
      <Navbar isOpen={isOpen} />
      <Dashboard isOpen={isOpen} />
    </div>
  );
};

export default App;
