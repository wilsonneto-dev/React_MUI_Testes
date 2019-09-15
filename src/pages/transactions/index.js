import React, { Component } from "react";
import GlobalMUIStyles from "../../assets/global-mui-styles";
import { withStyles, Container, Paper } from "@material-ui/core";

class Transactions extends Component {
  render() {
    const { classes } = this.props;

    return (
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Paper>Implementar transactions</Paper>
        </Container>
      </main>
    );
  }
}

export default withStyles(GlobalMUIStyles)(Transactions);
