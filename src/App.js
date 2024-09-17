import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Create from "./pages/Create";
import Error from "./pages/Error";
import Home from "./pages/Home";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects/editor" element={<Create />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
