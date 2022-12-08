import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

export default function Contact() {
  const [errorMessage, setErrorMessage] = useState("");
  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    if (inputType === "email") {
      if (!validateEmail(inputValue)) {
        setErrorMessage("Invalid email");
        return;
      } else {
        setErrorMessage("");
        return;
      }
    } else if (inputType === "message") {
      if (!inputValue) {
        setErrorMessage("Message is required");
        return;
      } else {
        setErrorMessage("");
        return;
      }
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="">
          <h3>Contact</h3>
          <div>
            <form
              action="mailto:sinpakyin@gmail.com"
              method="post"
              enctype="text/plain"
            >
              <div className="contact-form-div">
                <label>Name:</label>
                <br></br>
                <input type="text" name="name" required />
              </div>
              <div className="contact-form-div">
                <label>Email:</label>
                <br></br>
                <input
                  type="email"
                  name="email"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="contact-form-div">
                <label>Message:</label>
                <br></br>
                <textarea
                  type="text"
                  name="message"
                  onChange={handleInputChange}
                  required
                />
              </div>
              {errorMessage && (
                <div className="error-text-div">
                  <p>{errorMessage}!</p>
                </div>
              )}
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
