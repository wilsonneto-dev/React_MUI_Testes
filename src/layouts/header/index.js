import React, { Component } from 'react';
import { AppBar, withStyles, Toolbar, Typography } from '@material-ui/core';

import GlobalMUIStyles from '../../assets/global-mui-styles';

class Header extends Component {
  render() {
    const { classes } = this.props;

    return (
      <>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6">Testando essa UI</Typography>
          </Toolbar>
        </AppBar>
      </>
    );
  }
}

export default withStyles(GlobalMUIStyles)(Header);
