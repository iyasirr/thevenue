import React, { Component } from "react";
import { Fade } from "react-reveal";

class Footer extends Component {
  render() {
    return (
      <footer className="bck_black">
        <Fade>
          <div className="font_righteous footer_logo_venue">The Venue</div>
          <div className="footer_copyright">
            Yasir @2020. All rights reserved
          </div>
        </Fade>
      </footer>
    );
  }
}

export default Footer;
