import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from '../pages/main';
import Footer from '../layouts/footer';
import Header from '../layouts/header';

const Routes = () => (
  <BrowserRouter>
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
      <Footer />
    </>
  </BrowserRouter>
);

export default Routes;
