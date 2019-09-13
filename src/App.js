import React, { Component } from "react";
import "./config/ReactotronConfig";
import { Provider } from "react-redux";

import store from "./store";
import Routes from "./routes";

import Footer from "./layouts/footer";
import Header from "./layouts/header";
import Menu from "./layouts/menu";

import GlobalStyle from "./assets/global-styles";

import { withStyles, Container, Paper, CssBaseline } from "@material-ui/core";
import GlobalMUIStyles from "./assets/global-mui-styles";

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <Provider store={store}>
          <GlobalStyle />

          <Header />
          <Menu />

          <main className={classes.content}>
            <div className={classes.appBarSpacer} />

            <Container maxWidth="lg" className={classes.container}>
              <Paper>Teste Teste Teste Teste Teste Teste Teste Teste </Paper>
              <Paper>Teste Teste Teste Teste Teste Teste Teste Teste </Paper>
              <Paper>Teste Teste Teste Teste Teste Teste Teste Teste </Paper>
              <Paper>Teste Teste Teste Teste Teste Teste Teste Teste </Paper>
              <Paper>Teste Teste Teste Teste Teste Teste Teste Teste </Paper>
              <Paper>Teste Teste Teste Teste Teste Teste Teste Teste </Paper>
              <Paper>Teste</Paper>
              <Paper>Teste</Paper>
              <Paper>Teste</Paper>
              <Paper>Teste</Paper>
            </Container>
          </main>

          <Footer />
        </Provider>
      </div>
    );
  }
}

export default withStyles(GlobalMUIStyles)(App);
