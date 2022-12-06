import React from "react";
import sixLogo from "../../assets/6ixauto.png";

export default function Portfolio() {
  return (
    <div className="container">
      <h3>Portfolio</h3>
      <div className="row">
        <div className="col-lg-6 project-div">
          <div className="content">
            <a href="https://github.com/paksin/6ixAuto">
              <div class="content-overlay"></div>
              <img src={sixLogo} alt="6ix-auto" />
              <div className="content-details fadeIn-bottom">
                <h5 className="content-title">6ixAuto</h5>
                <p className="content-text">Group Project</p>
                <p className="content-text">
                  MongoDB, Express, React, Node (MERN), Bootstrap, GraphQL,
                  Cloudinary, Animate.CSS, HTML, CSS, JS
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="col-lg-6 project-div">
          <div className="content">
            <a href="https://github.com/paksin/Get-A-Job">
              <div class="content-overlay"></div>
              <img
                src={
                  "https://raw.githubusercontent.com/paksin/Get-A-Job/main/public/imgs/homepg.png"
                }
                alt="get-a-job"
              />
              <div className="content-details fadeIn-bottom">
                <h5 className="content-title">Get A Job!</h5>
                <p className="content-text">Group Project</p>
                <p className="content-text">
                  Bootstrap, Passport.JS, jQuery, Express.JS, Handlebars.JS,
                  MySQL, Sequelize, HTML, CSS, JS
                </p>
              </div>
            </a>
          </div>
        </div>

        <div className="col-lg-6 project-div">
          <div className="content">
            <a href="https://github.com/paksin/FindFlix-Project">
              <div class="content-overlay"></div>
              <img
                src={
                  "https://github.com/paksin/FindFlix-Project/raw/main/assets/search-result.png"
                }
                alt="findflix"
              />
              <div className="content-details fadeIn-bottom">
                <h5 className="content-title">FindFlix</h5>
                <p className="content-text">Group Project</p>
                <p className="content-text">
                  HTML, CSS, JS, Bootstrap, OMDB API, Youtube API
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="col-lg-6 project-div">
          <div className="content">
            <a href="https://github.com/paksin/21-MERN-Challenge">
              <div class="content-overlay"></div>
              <img
                src={
                  "https://github.com/paksin/21-MERN-Challenge/raw/main/asset/search.png"
                }
                alt="google-book-search"
              />
              <div className="content-details fadeIn-bottom">
                <h5 className="content-title">Google Books Search</h5>
                <p className="content-text">Personal Project</p>
                <p className="content-text">
                  Bootstrap, MongoDB, Express, React, Node (MERN), HTML, CSS, JS
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="col-lg-6 project-div">
          <div className="content">
            <a href="https://github.com/paksin/14-MVC-Challenge">
              <div class="content-overlay"></div>
              <img
                src={
                  "https://github.com/paksin/14-MVC-Challenge/raw/main/assets/Homepage.png"
                }
                alt="the-tech-blog"
              />
              <div className="content-details fadeIn-bottom">
                <h5 className="content-title">The Tech Blog</h5>
                <p className="content-text">Personal Project</p>
                <p className="content-text">
                  Express.JS, Handlebars.JS, MySQL, Sequelize, HTML, CSS, JS
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="col-lg-6 project-div">
          <div className="content">
            <a href="https://github.com/paksin/11-Express-Challenge">
              <div class="content-overlay"></div>
              <img
                src={
                  "https://github.com/paksin/11-Express-Challenge/raw/main/assets/screenshot.png"
                }
                alt="note-taker"
              />
              <div className="content-details fadeIn-bottom">
                <h5 className="content-title">Note Taker</h5>
                <p className="content-text">Personal Project</p>
                <p className="content-text">
                  Bootstrap, Express.JS, HTML, CSS, JS
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="col-lg-6 project-div">
          <div className="content">
            <a href="https://github.com/paksin/19-PWA-Challenge">
              <div class="content-overlay"></div>
              <img
                src={
                  "https://github.com/paksin/19-PWA-Challenge/raw/main/assets/webpage.png"
                }
                alt="JATE"
              />
              <div className="content-details fadeIn-bottom">
                <h5 className="content-title">JATE Text Editor</h5>
                <p className="content-text">Personal Project</p>
                <p className="content-text">
                  Express.JS, IndexedDB, Service Worker, Webpack, Workbox
                  (PWAs), HTML, CSS, JS
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="col-lg-6 project-div">
          <div className="content">
            <a href="https://github.com/paksin/12-SQL-Challenge">
              <div class="content-overlay"></div>
              <img
                src={
                  "https://github.com/paksin/12-SQL-Challenge/raw/main/assets/menu.png"
                }
                alt="employee-manager"
              />
              <div className="content-details fadeIn-bottom">
                <h5 className="content-title">Employee Manager</h5>
                <p className="content-text">Personal Project</p>
                <p className="content-text">HTML, CSS, JS, MySQL</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
