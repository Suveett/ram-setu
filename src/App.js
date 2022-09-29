import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Setu from "./components/Setu";
import Contact from "./pages/Contact/Contact";
import Mask from "./pages/Mask/Mask";
import Ram_Sita from "./pages/Ram_Sita/Ram_Sita";

import React, { useEffect, useState } from "react";
function App() {
  const [trigger, setTrigger] = useState(false);
  const handleTrigger = () => {
    setTrigger(true);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/setu" element={<Setu />} />
        <Route path="/mask" element={<Mask />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ram-sita" element={<Ram_Sita />} />
      </Routes>
    </div>
  );
}

export default App;
