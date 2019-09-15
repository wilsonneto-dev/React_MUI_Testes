import React, { Component } from "react";

import GlobalMUIStyles from "../../assets/global-mui-styles";

import { withStyles, Container, Paper } from "@material-ui/core";

class Main extends Component {
  render() {
    const { classes } = this.props;

    return (
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Paper>
            Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste
            Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste
            Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste
            Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste
            Teste Teste Teste Teste Teste
          </Paper>
        </Container>
      </main>
    );
  }
}

export default withStyles(GlobalMUIStyles)(Main);
