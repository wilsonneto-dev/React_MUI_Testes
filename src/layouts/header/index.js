import React, { Component } from "react";
import {
  AppBar,
  withStyles,
  Toolbar,
  Typography,
  IconButton,
  Badge
} from "@material-ui/core";

import GlobalMUIStyles from "../../assets/global-mui-styles";

import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";

class Header extends Component {
  render() {
    const { classes, onExpandMenu } = this.props;

    return (
      <>
        <AppBar position="absolute" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              onClick={onExpandMenu}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              SandBox
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={0} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
      </>
    );
  }
}

export default withStyles(GlobalMUIStyles)(Header);
