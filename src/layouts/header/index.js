import React, { Component } from "react";
import clsx from "clsx";
import { AppBar, withStyles, Toolbar, Typography } from "@material-ui/core";

import GlobalMUIStyles from "../../assets/global-mui-styles";

class Header extends Component {
  render() {
    const { classes } = this.props;

    return (
      <>
        <AppBar
          position="absolute"
          className={clsx(classes.appBar, true && classes.appBarShift)}
        >
          <Toolbar>
            <Typography variant="h6">Testando essa UI</Typography>
          </Toolbar>
        </AppBar>
      </>
    );
  }
}

export default withStyles(GlobalMUIStyles)(Header);
