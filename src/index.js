import React from 'react';
import { render } from 'react-dom';
import AppRouter from './router.js'


import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers/configReducer'
const store = rootReducer()




render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
  ,
  document.getElementById('root')
);

