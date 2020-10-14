import React from "react";
import { Typography } from "@material-ui/core";
const Home = () => {
  return (
    <div className="comp__container">
      <div>
        <Typography variant="h3" color="secondary">
          Homepage
        </Typography>
      </div>
      <div className="text__container" style={{ textAlign: "center" }}>
        <Typography variant="h6">
          Melp lets you and your team Create, Communicate, and Collaborate from
          anywhere and from any device.
        </Typography>
      </div>
      <div className="text__container">
        <Typography variant="body2">
          A team app with features like chat, topic-based discussions, screen
          sharing, audio-video conferencing, and scheduling meetings to make
          your team stay productive with your coworkers or even with your
          network.
        </Typography>
      </div>
    </div>
  );
};

export default Home;
