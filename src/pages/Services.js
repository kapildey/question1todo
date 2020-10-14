import React from "react";
import { Typography } from "@material-ui/core";
const Services = () => {
  return (
    <div className="comp__container">
      <div>
        <Typography variant="h3" color="secondary">
          Services Offered
        </Typography>
      </div>
      <div className="text__container" style={{ textAlign: "center" }}>
        <Typography variant="h6">
          Create teams, schedule meetings, start discussions, share files,
          invite people and collaborate over audio or video conferences. Join
          meetings from any device, from anywhere. Melp is your all-in-one
          secure communication and collaboration platform.
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

export default Services;
