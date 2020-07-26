import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";

import Button from "../utils/MyButton";

class DIscount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30,
  };

  componentDidUpdate() {
    setTimeout(() => this.hanlePercentage(), 30);
  }

  hanlePercentage = () => {
    if (this.state.discountStart < this.state.discountEnd)
      this.setState({ discountStart: this.state.discountStart + 1 });
  };

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={this.hanlePercentage}>
            <div className="discount_percentage">
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>
          <Slide right>
            <div className="discount_description">
              <h3>Early birds offer</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <Button
                text="Purchase Ticket"
                bck="#ffa800"
                color="#ffffff"
                link="http://google.com"
              />
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default DIscount;
