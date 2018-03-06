import { Navigation } from "react-native-navigation";
import React, {Component} from 'react';
import {
  View,
  TextView,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import placeImage from '../../assets/images/home_logo.jpg';
import startMainTabs from '../MainTabs/startMainTabs';

class StartScreen extends Component {
  static navigatorStyle = {
    navBarHidden: true
  }

  constructor(props) {
    super(props)

  }

  start() {
    Navigation.startSingleScreenApp({
      screen: {
        screen: "awesome-places.AuthScreen",
        title: "Login",
        label: "Login"
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.start}>
          <Image source={placeImage}/>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});


export default StartScreen;
