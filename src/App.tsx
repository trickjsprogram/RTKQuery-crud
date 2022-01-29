import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AddEdit from "./pages/AddEdit";
import Home from "./pages/Home";
import Info from "./pages/Info";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addContact" element={<AddEdit />} />
          <Route path="/editContact/:id" element={<AddEdit />} />
          <Route path="/info/:id" element={<Info />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
