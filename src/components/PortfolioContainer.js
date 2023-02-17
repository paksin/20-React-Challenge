import React, { useState } from "react";
import Footer from "./Footer";
import NavTabs from "./NavTabs";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Portfolio");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);
  var style1 = {
    margin: "0 0 100px 0",
  };
  return (
    <div style={style1}>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid px-0">
          <div className="navbar-brand">
            <h1>Pak Sin</h1>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <NavTabs
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            />
          </div>
        </div>
      </nav>
      <main>
        <div className="big-divs">{renderPage()}</div>
      </main>
    </div>
  );
}
