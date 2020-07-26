import React from "react";
import { scroller } from "react-scroll";

// Material-UI
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

//Icons
import FeatureIcon from "@material-ui/icons/FeaturedVideo";
import InfoIcon from "@material-ui/icons/Info";
import HighlightIcon from "@material-ui/icons/Highlight";
import PriceIcon from "@material-ui/icons/AttachMoney";
import LocationIcon from "@material-ui/icons/LocationOn";

const SideDrawer = (props) => {
  const handleScroll = (component) => {
    scroller.scrollTo(component, {
      duration: 1000,
      delay: 0,
      smooth: true,
      offset: -140,
    });
    props.onClose();
  };

  return (
    <Drawer anchor="right" open={props.open} onClose={props.onClose}>
      <List component="nav">
        <ListItem button onClick={() => handleScroll("featured")}>
          <ListItemIcon>
            <FeatureIcon />
          </ListItemIcon>
          <ListItemText primary="Featured" />
        </ListItem>
        <ListItem button onClick={() => handleScroll("info")}>
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary="Venue NFO" />
        </ListItem>
        <ListItem button onClick={() => handleScroll("highlight")}>
          <ListItemIcon>
            <HighlightIcon />
          </ListItemIcon>
          <ListItemText primary="Higlight" />
        </ListItem>
        <ListItem button onClick={() => handleScroll("price")}>
          <ListItemIcon>
            <PriceIcon />
          </ListItemIcon>
          <ListItemText primary="Price" />
        </ListItem>
        <ListItem button onClick={() => handleScroll("location")}>
          <ListItemIcon>
            <LocationIcon />
          </ListItemIcon>
          <ListItemText primary="Location" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
