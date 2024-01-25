import React from "react";
import Bar from "./components/Bar/Bar";
import "./App.css";
import Menu from "./components/Menu/Menu";

import SideBar from "./components/Sidebar/SideBar";
import Search from "./components/Search/Search";
import Footer from "./components/Footer/footer"
import Filter from "./components/filter/filter";
import { AppRoutes } from "./routes";


function App() {
  return (
    <div className="wrapper">
  
      
      <Menu />
      <div className="main__centerblock centerblock">
        <Search />
        <Filter />
        <AppRoutes />
      </div>
      <SideBar />
        <Bar />
        <Footer />
    </div>
  );
}

export default App;
