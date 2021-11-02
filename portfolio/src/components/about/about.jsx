import React from "react";
import BG from "../../img/bg1.jpg";
import PY from "../../img/WD.jpg";
import VUE from "../../img/Vue.jpg";
import DJ from "../../img/Django.jpg";
import WD from "../../img/PythonBootcamp.jpg";

const about = () => {
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-card over"></div>
        <div className="about-card">
          <img src={BG} alt="" className="about-image" />
        </div>
      </div>
      <div className="about-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="a-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
        </p>
        <div className="a-award">
          <img src={PY} alt="" className="a-award__img" />
          <div className="a-award-texts">
            <h4>Web Development Bootcamp</h4>
          </div>
          <img src={VUE} alt="" className="a-award__img" />
          <div className="a-award-texts">
            <h4>VUE 3 Complete Guide</h4>
          </div>
          <img src={DJ} alt="" className="a-award__img" />
          <div className="a-award-texts">
            <h4>Python & Django Full Stack Web Developer</h4>
          </div>
          <img src={WD} alt="" className="a-award__img" />
          <div className="a-award-texts">
            <h4>Python Bootcamp</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
