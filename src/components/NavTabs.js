import React from "react";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange("Portfolio")}
          className={
            currentPage === "Portfolio" ? "nav-link active px-2" : "nav-link"
          }
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange("About")}
          className={
            currentPage === "About" ? "nav-link active px-2" : "nav-link"
          }
        >
          About Me
        </a>
      </li>

      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange("Resume")}
          className={
            currentPage === "Resume" ? "nav-link active px-2" : "nav-link"
          }
        >
          Resumé
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          className={
            currentPage === "Contact" ? "nav-link active px-2" : "nav-link"
          }
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
