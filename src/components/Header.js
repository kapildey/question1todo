import React from "react";
import { Link } from "react-router-dom";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import PolicyIcon from "@material-ui/icons/Policy";
import RoomServiceIcon from "@material-ui/icons/RoomService";

const Header = () => {
  return (
    <div>
      <div className="header__nav">
        <List component="nav" aria-label="main mailbox folders">
          <Link className="header__link" to="/">
            <ListItem button>
              <ListItemIcon>
                <HomeIcon color="secondary" />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </Link>
          <Link className="header__link" to="/about">
            <ListItem button>
              <ListItemIcon>
                <InfoIcon color="secondary" />
              </ListItemIcon>
              <ListItemText primary="About Us" />
            </ListItem>
          </Link>
          <Link className="header__link" to="/policy">
            <ListItem button>
              <ListItemIcon>
                <PolicyIcon color="secondary" />
              </ListItemIcon>
              <ListItemText primary="Policy" />
            </ListItem>
          </Link>
          <Link className="header__link" to="/services">
            <ListItem button>
              <ListItemIcon>
                <RoomServiceIcon color="secondary" />
              </ListItemIcon>
              <ListItemText primary="Services" />
            </ListItem>
          </Link>
        </List>

        <Divider />
      </div>
    </div>
  );
};

export default Header;
