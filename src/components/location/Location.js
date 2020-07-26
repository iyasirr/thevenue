import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        title="loc"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.4736909822623!2d50.57527361553032!3d26.24628548341919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49a5e9df8c372d%3A0x676c55abb4612241!2sThe%20Park%20%40%20Bahrain%20Bay!5e0!3m2!1sen!2sbh!4v1595754464740!5m2!1sen!2sbh"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
