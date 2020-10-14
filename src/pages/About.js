import React from "react";

import { Typography } from "@material-ui/core";

const About = () => {
  return (
    <div className="comp__container">
      <div>
        <Typography variant="h3" color="secondary">
          About Us
        </Typography>
      </div>
      <div className="text__container" style={{ textAlign: "center" }}>
        <Typography variant="h6">
          Melpers, Take Advantage Of This Smart Team Collaboration Tool
        </Typography>
      </div>
      <div className="text__container">
        <Typography variant="body2">
          With workplaces getting dynamic by the day, getting the right set of
          people to collaborate seamlessly is a major management concern. ​ Team
          communication​ is formative if it happens the right way. ​ Team
          collaboration apps​ are becoming popular by the day and helping
          workplaces evolve in ways never conceived before. Resultantly, a score
          of
        </Typography>
      </div>
    </div>
  );
};

export default About;
