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

import { BrowserRouter } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { expandedMenu: true };

    this.menuExpandToggle = this.menuExpandToggle.bind(this);
  }

  menuExpandToggle() {
    console.log("here called");
    this.setState({ expandedMenu: !this.state.expandedMenu });
    console.log(this.state.expandedMenu);
  }

  render() {
    const { classes } = this.props;
    const { expandedMenu } = this.state;

    return (
      <Provider store={store}>
        <GlobalStyle />
        <CssBaseline />

        <BrowserRouter>
          <div className={classes.root}>
            <Header onExpandMenu={this.menuExpandToggle} />
            <Menu expanded={expandedMenu} />

            <Routes />

            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default withStyles(GlobalMUIStyles)(App);
