import React, { Component } from 'react';
import {
  View,
  Text,
  Alert,
  Button,
  StyleSheet,
  TextInput,
  ImageBackground,
  Dimensions
} from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';
import ScreenBase from '../ScreenBase';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import backgroundImage from '../../assets/images/background.jpg';
import ButtonWithBackground from '../../components/UI/ButtonWithBackground/ButtonWithBackground';

class AuthScreen extends ScreenBase {
  state = {
    viewMode: Dimensions.get("window").height > 500 ? "portrait" : "landscape"
    //
    // respStyles: {
    //   pwContainerDirection: "column",
    //   pwContainerJustifyContent: "flex-start",
    //   pwWrapperWidth: "100%"
    // }
  }

  getStyles = () => {
    let isPortrait = Dimensions.get('window').height>500
      return {
        pwContainerDirection: isPortrait ? "column" : "row",
        pwContainerJustifyContent: isPortrait ? "flex-start" : "space-around",
        pwWrapperWidth: isPortrait ? "100%" : "48%"
      }
  }

  loginHandler = () => {
    console.log('xxxxxxx')
    startMainTabs()
  }

  // componentDidMount() {
  //   let s = this.getStyles();
  //   console.log( 'ComponentDidMount: s: ', s );
  //   this.setState({
  //     respStyles: this.getStyles()
  //   });
  // }


  updateStyles = () => {
    this.setState({
      viewMode: Dimensions.get("window").height > 500 ? "portrait" : "landscape"
      // {
      //   pwContainerDirection: Dimensions.get("window").height>500 ? "column" : "row",
      //   pwContainerJustifyContent: Dimensions.get("window").height>500 ? "flex-start" : "space-around" ,
      //   pwWrapperWidth: Dimensions.get("window").height>500 ? "100%" : "48%"
      // }
    });
  }

  constructor(props) {
    super(props);
    console.log( 'constructor window dimensions: ', Dimensions.get('window'));
    Dimensions.addEventListener('change', this.updateStyles);
  }

  comopnentWillUnmount() {
    Dimensions.removeEventListener("change", this.updateStyles);
  }

  render () {
    let headingText = null;
    if(this.state.viewMode === 'portrait') {
      headingText = (
        <MainText>
          <HeadingText>Please Log In</HeadingText>
        </MainText>
      );
    }
    return (
      <ImageBackground style={styles.backgroundImage} source={backgroundImage}>
        {headingText}
        <View><Text>viewMode: {this.state.viewMode}</Text></View>
        <View style={styles.container}>
          <ButtonWithBackground onPress={()=>{Alert.alert('x')}} color="#29aaf4">Switch to Login</ButtonWithBackground>
          <View style={styles.inputContainer}>
            <DefaultInput placeholder="Your E-Mail Address" style={styles.input}/>
            <View
              style={
                this.state.viewMode==='portrait'
                ? styles.portraitPasswordContainer
                : styles.landscapePasswordContainer
              }>
              <View
                style={
                  this.state.viewMode==='portrait'
                  ? styles.portraitPasswordWrapper
                  : styles.landscapePasswordWrapper
                }>
                <DefaultInput placeholder="Password" style={styles.input}/>
              </View>
              <View
                style={
                  this.state.viewMode==='portrait'
                  ? styles.portraitPasswordWrapper
                  : styles.landscapePasswordWrapper
                }>
                <DefaultInput placeholder="Confirm Password" style={styles.input}/>
              </View>
            </View>
          </View>
          <ButtonWithBackground onPress={this.loginHandler} color="#29aaf4">Login</ButtonWithBackground>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  inputContainer: {
    width: "80%"
  },
  input: {
    backgroundColor: "#eee",
    borderColor: "#bbb"
  },
  backgroundImage: {
    width: "100%",
    flex: 1
  },
  portraitPasswordContainer: {
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  portraitPasswordWrapper: {
    width: "100%"
  },

  landscapePasswordContainer: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  landscapePasswordWrapper: {
    width: "48%"
  }

})

export default AuthScreen;
