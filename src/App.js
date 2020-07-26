import React from "react";
import { Element } from "react-scroll";
import "./resources/styles.css";

// Material UI

// Components
import Header from "./components/header/Header";
import Featured from "./components/featured/Featured";
import VenueInfo from "./components/venueInfo/VenueInfo";
import Highlight from "./components/highlight/Highlight";
import Pricing from "./components/pricing/Pricing";
import Location from "./components/location/Location";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Element name="featured">
        <Featured />
      </Element>

      <Element name="info">
        <VenueInfo />
      </Element>

      <Element name="highlight">
        <Highlight />
      </Element>

      <Element name="price">
        <Pricing />
      </Element>

      <Element name="location">
        <Location />
      </Element>

      <Footer />
    </div>
  );
}

export default App;
