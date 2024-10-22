import React from "react";
import profilepic from "../../assets/profile.png";

export default function About() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <h3>About Me</h3>
          <p>
            Dynamic Financial Professional with a strong foundation in
            Mathematics and Computer Science, complemented by a Full-Stack Web
            Development certification from the University of Toronto School of
            Continuing Studies. Proficient in a diverse range of technologies,
            including Python, React, Bootstrap, MongoDB, Express, SQL, jQuery,
            HTML, CSS, JS, and various Libraries. Experienced in Agile
            methodologies, I hold an Honours degree in Mathematics and Business
            Administration from the University of Waterloo, blending analytical
            expertise with technical acumen to drive innovative solutions.
          </p>
        </div>
        <div className="col-md-4">
          <img src={profilepic} alt="profile" width="100%" />
        </div>
      </div>
    </div>
  );
}
