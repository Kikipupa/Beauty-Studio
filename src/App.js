import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { listInfo } from "./components/Footer/mockData.js";
import IconsBar from "./components/Icons/IconsBar";
import HomeBanner from "./components/HomeBanner/Banner.js";

function App() {
  return (
    <>
      <NavBar /> <HomeBanner /> <Footer list={listInfo} /> <IconsBar />
    </>
  );
}

export default App;
