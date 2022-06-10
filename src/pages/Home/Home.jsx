import React from "react";
import "./Home.css";
import {
  Featured,
  Header,
  Navbar,
  PropertyList,
  FeaturedProperties,
} from "../../components";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Home guests love</h1>
        <FeaturedProperties />
      </div>
    </div>
  );
};

export default Home;
