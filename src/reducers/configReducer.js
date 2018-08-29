import { createStore } from 'redux';
import rootReducer from './index';

export default function configureStore(initialState = {}) {
  return createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}


// import rootReducer from './reducers/index';
// import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';


// export default function configureStore(initialState = {}) {
  // compose  applyMiddleware 是redux触发action重新更新需要的 “热键” 如果不加会报错，“Action must be Object"之类的错误
  // let createStoreWithMiddleware;
  // const middleware = applyMiddleware(thunk);
  // if (!false) {
  
  //     if (window.__REDUX_DEVTOOLS_EXTENSION__){
  //         createStoreWithMiddleware = compose(
  //             middleware,
  //             window.__REDUX_DEVTOOLS_EXTENSION__()
  //         );
  //     }else{
  //         createStoreWithMiddleware = compose(middleware);
  //     }
     
  // } else {
  //     createStoreWithMiddleware = compose(middleware);
  // }

  // const Store = createStoreWithMiddleware(createStore)(
  //     rootReducer, initialState
  // );




  // const Store = createStore(rootReducer, initialState, applyMiddleware(thunk));

  // if (module.hot) {
  //   console.log('Enable Webpack hot module replacement for reducers-------')
  //   // Enable Webpack hot module replacement for reducers
  //   module.hot.accept('./reducers', () => {
  //     const nextRootReducer = require('./reducers/index');
  //     Store.replaceReducer(nextRootReducer);
  //   });
  // }

  // return Store;
// }