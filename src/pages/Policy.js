import React from "react";
import { Typography } from "@material-ui/core";

const Policy = () => {
  return (
    <div className="comp__container">
      <div>
        <Typography variant="h3" color="secondary">
          Our Policy
        </Typography>
      </div>
      <div className="text__container" style={{ textAlign: "center" }}>
        <Typography variant="h6">
          Please note that your use of and access to our services are subject to
          the following terms and privacy agreements
        </Typography>
      </div>
      <div className="text__container">
        <Typography variant="body2">
          Your privacy is important to us at MelpApp, Inc. (hereinafter
          "MelpApp", "we" or "us"). This Privacy Policy describes the types of
          information we gather, how we use it, with whom the information may be
          shared, what choices are available to you regarding collection, use
          and distribution of information and our efforts to protect the
          information you provide to us through this website and the services,
          functionality data, information, tools, updates and similar materials
          delivered or provided by us(the “Services") By using the Services, you
          hereby consent to allow us to process information in accordance with
          this Policy. Please also refer to our [Terms of Service], which are
          incorporated as if fully recited herein.Capitalized terms used herein
          without definitions in this policy shall have the definitions ascribed
          to them in the Terms of Service. If our information retention or usage
          practices change, we will let you know by posting the Privacy Policy
          changes on the Services. Please refer to the “Effective Date" above to
          see when this Policy was last updated.
        </Typography>
      </div>
    </div>
  );
};

export default Policy;
