import React from 'react';
import './config/ReactotronConfig';
import { Provider } from 'react-redux';

import store from './store';
import Routes from './routes';

import Footer from './layouts/footer';
import Header from './layouts/header';
import Menu from './layouts/menu';

import GlobalStyle from './assets/global-styles';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Header />
      <Menu />
      <Routes />
      <Footer />
    </Provider>
  );
}

export default App;
