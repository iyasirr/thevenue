import React, { Component } from "react";
import { Slide } from "react-reveal";

class TimeUtil extends Component {
  state = {
    deadline: "Dec, 16, 2020",
    days: "0",
    hours: "0",
    minutes: "0",
    seconds: "0",
  };

  componentWillMount() {
    setInterval(() => this.handleCOunter(this.state.deadline), 1000);
  }

  handleCOunter = (deadline) => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time > 0)
      this.setState({
        seconds: Math.floor((time / 1000) % 60),
        minutes: Math.floor((time / 1000 / 60) % 60),
        hours: Math.floor((time / (1000 * 60 * 60)) % 24),
        days: Math.floor(time / (1000 * 60 * 60 * 24)),
      });
  };

  render() {
    return (
      <Slide left delay={1000}>
        <div className="countdown_wrapper">
          <div className="countdown_top">Event Starts in</div>
          <div className="countdown_bottom">
            <div className="countdown_item">
              <div className="countdown_time">{this.state.days}</div>
              <div className="countdown_tag">Days</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">{this.state.hours}</div>
              <div className="countdown_tag">Hr</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">{this.state.minutes}</div>
              <div className="countdown_tag">Min</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">{this.state.seconds}</div>
              <div className="countdown_tag">Sec</div>
            </div>
          </div>
        </div>
      </Slide>
    );
  }
}

export default TimeUtil;
