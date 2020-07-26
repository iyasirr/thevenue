import React from "react";
import Button from "../utils/MyButton";
import { Zoom } from "react-reveal";

const Box = (props) => {
  return (
    <Zoom delay={props.delay}>
      <div className="pricing_item">
        <div className="pricing_inner_wrapper">
          <div className="pricing_title">
            <span>{props.price} BD</span>
            <span>{props.seat}</span>
          </div>
          <div className="pricing_description">{props.desc}</div>
          <div className="pricing_buttons">
            <Button
              text="Buy Ticket"
              bck="#ffa800"
              color="#ffffff"
              link={props.link}
            />
          </div>
        </div>
      </div>
    </Zoom>
  );
};

export default Box;
