import React from "react";
import profilepic from "../../assets/profile.png";

export default function About() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <h3>About Me</h3>
          <p>
            Full-Stack Developer with a financial background, who recently
            completed the Full-Stack Web Development Bootcamp from University of
            Toronto School of Continuing Studies. Skilled in HTML, CSS,
            Javascript, JQuery, Bootstrap, Node.js, MySQL, MongoDB, Express,
            Handelbars.js, ReactJS, and python, and experience with industry
            standard applications including Github and Heroku. Graduated with a
            Mathematics/Business Administration, Honours degree from University
            of Waterloo.
          </p>
        </div>
        <div className="col-md-4">
          <img src={profilepic} alt="profile" width="100%" />
        </div>
      </div>
    </div>
  );
}
