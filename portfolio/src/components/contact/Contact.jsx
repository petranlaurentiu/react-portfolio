import React, { useRef, useContext } from "react";
import { useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../context";

const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const formRef = useRef();
  const [done, setDone] = useState(false);
  //   const theme = useContext(ThemeContext);
  //   const darkMode = theme.state.darkMode;

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_mkkelxn",
        "template_kg95imv",
        formRef.current,
        "user_xgJaz05pwojZbmUOQA7B4"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact">
      <div className="contact-bg"> </div>
      <div className="contact-wrapper">
        <div className="contact-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="contact-info">
            <div className="c-info__item">
              <div>
                <i class="fas fa-phone-square-alt">
                  {" "}
                  <span>&nbsp; +40766 647 123</span>{" "}
                </i>
              </div>
              <div>
                <i class="fas fa-envelope">
                  <span>&nbsp; petran_laurentiu@yahoo.com</span>
                </i>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <div className="contact-desc">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
              numquam impedit facere alias repellendus enim fuga aliquam,
              aperiam id sequi?
            </p>
            <form ref={formRef} onSubmit={sendEmail}>
              <input
                style={{ backgroundColor: darkMode && "#333" }}
                type="text"
                placeholder="Name"
                name="user_name"
              />
              <input
                style={{ backgroundColor: darkMode && "#333" }}
                type="text"
                placeholder="Subject"
                name="user_subject"
              />
              <input
                style={{ backgroundColor: darkMode && "#333" }}
                type="text"
                placeholder="Email"
                name="user_email"
              />
              <textarea
                style={{ backgroundColor: darkMode && "#333" }}
                id=""
                cols="30"
                rows="5"
                placeholder="Message"
                name="message"
              ></textarea>
              <button className="subBtn">Submit</button>
              {done && " Thank you!"}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
