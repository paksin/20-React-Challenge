import React from "react";
import resume from "../../assets/resume.pdf";

export default function Blog() {
  return (
    <div className="container">
      <div className="row">
        <div className="">
          <h3>Resume</h3>
          <div className="resume-div">
            <a href={resume} download>
              Download my resume
            </a>
          </div>
          <div className>
            <h4>Front-end Proficiencies</h4>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>Responsive Design</li>
              <li>React</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <div>
            <h4>Back-end Proficiencies</h4>
            <ul>
              <li>APIs</li>
              <li>Node.JS</li>
              <li>Express.JS</li>
              <li>Passport.JS</li>
              <li>MySQL, Sequelize</li>
              <li>MongoDB, Mongoose</li>
              <li>REST</li>
              <li>GraphQL</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
