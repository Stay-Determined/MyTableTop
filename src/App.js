import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Create from "./pages/Create";
import Home from "./pages/Home";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/editor" element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
