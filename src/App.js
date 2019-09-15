import React, { Component } from "react";
import "./config/ReactotronConfig";
import { Provider } from "react-redux";

import store from "./store";
import Routes from "./routes";

import Footer from "./layouts/footer";
import Header from "./layouts/header";
import Menu from "./layouts/menu";

import GlobalStyle from "./assets/global-styles";

import { withStyles, CssBaseline } from "@material-ui/core";
import GlobalMUIStyles from "./assets/global-mui-styles";

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Provider store={store}>
        <GlobalStyle />
        <CssBaseline />
        <div className={classes.root}>
          <Header />
          <Menu />

          <Routes />

          <Footer />
        </div>
      </Provider>
    );
  }
}

export default withStyles(GlobalMUIStyles)(App);
