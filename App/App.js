import React, {Component} from 'react';
import AppNavigator from './container/AppNavigator';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import logger from './store/middleware/logger'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer';

console.disableYellowBox = true;

class App extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    const createStoreWithMW = applyMiddleware(logger, thunk)(createStore)
    const store = createStoreWithMW(rootReducer)

    return (
      <ThemeContext.Provider>
        <Provider store = {store}>
          <AppNavigator/>
        </Provider>
      </ThemeContext.Provider>
    );
  }
}

export default App;
