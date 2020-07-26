import React, { Component } from "react";
import Box from "./Box";

class Pricing extends Component {
  state = {
    data: [
      {
        price: 20,
        seat: "Balcony",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        link: "http://sales/balcony",
        delay: 500,
      },
      {
        price: 30,
        seat: "Medium",
        desc:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        link: "http://sales/medium",
        delay: 0,
      },
      {
        price: 50,
        seat: "Star",
        desc:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        link: "http://sales/star",
        delay: 500,
      },
    ],
  };

  showBoxes = () =>
    this.state.data.map((box) => (
      <Box
        key={box.price}
        price={box.price}
        seat={box.seat}
        desc={box.desc}
        link={box.link}
        delay={box.delay}
      />
    ));

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}

export default Pricing;
