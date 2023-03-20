import "./App.css";
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./pages/navbar.jsx";
// import Main from "./pages/main";

// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      {/* <Main/> */}
      <Outlet />

    </>
  );
}

export default App;
