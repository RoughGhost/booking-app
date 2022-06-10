import React from "react";
import "./propertyList.css";
import property1 from "../../assets/francesca-tosolini-tHkJAMcO3QE-unsplash.jpg";
import property2 from "../../assets/stephen-leonardi-XKIO6ZgCObo-unsplash.jpg";
import property3 from "../../assets/webaliser-_TPTXZd9mOo-unsplash.jpg";
import property4 from "../../assets/douglas-sheppard-9rYfG8sWRVo-unsplash.jpg";
const propertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img src={property1} alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>Hotels</h1>
          <h2>233 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src={property2} alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>Apartments</h1>
          <h2>2332 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src={property3} alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>Resorts</h1>
          <h2>2332 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src={property4} alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>Villas</h1>
          <h2>2330 hotels</h2>
        </div>
      </div>
    </div>
  );
};

export default propertyList;
