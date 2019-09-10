import React from 'react';
import './config/ReactotronConfig';
import { Provider } from 'react-redux';

import store from './store';
import Routes from './routes';

import GlobalStyle from './assets/global-styles';

console.tron.log('ok...');

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Routes />
    </Provider>
  );
}

export default App;
