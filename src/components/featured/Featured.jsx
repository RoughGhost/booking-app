import React from "react";
import "./Featured.css";
import feature1 from "../../assets/francesca-tosolini-6japTIjUQoI-unsplash.jpg";
import feature2 from "../../assets/stephen-leonardi-XKIO6ZgCObo-unsplash.jpg";
import feature3 from "../../assets/krystal-black-V5OEpF12pzw-unsplash.jpg";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img src={feature1} alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>390 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src={feature2} alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Greenland </h1>
          <h2>leavelet properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src={feature3} alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>White castle</h1>
          <h2>22 runway properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
