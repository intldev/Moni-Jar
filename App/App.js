import 'react-native-gesture-handler';
import React, {Component} from 'react';
import AppNavigator from './container/AppNavigator';
class App extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <AppNavigator/>
    );
  }
}

export default App;
