import React, { Component } from "react";
import {
  AppBar,
  withStyles,
  Toolbar,
  Typography,
  IconButton,
  Badge
} from "@material-ui/core";
import clsx from "clsx";
import GlobalMUIStyles from "../../assets/global-mui-styles";

import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
  }

  handleDrawerOpen() {}

  render() {
    const { classes } = this.props;
    const open = false;

    return (
      <>
        <AppBar position="absolute" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerOpen}
              className={clsx(classes.menuButton)}
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
