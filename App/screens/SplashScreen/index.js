import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class SplashScreen extends Component {
  componentDidMount() {
    setTimeout(this.navigateToLogin, 3000);
  }

  navigateToLogin = () => {
    console.log("Navigate to Login Screen");
  };

  render() {
    return (
      <View style={styles.splashScreen}>
        <Text>This is splash screen</Text>
      </View>
    );
  }
}

export default SplashScreen;
