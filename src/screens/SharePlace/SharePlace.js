import React, { Component } from 'react';
import {
  View,
  Text,
  Alert,
  Button,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import {connect} from 'react-redux';

import {addPlace } from '../../store/actions/index';
import PlaceInput from '../../components/PlaceInput/PlaceInput';
import MainText from "../../components/UI/MainText/MainText";
import HeadingText from "../../components/UI/HeadingText/HeadingText";
import PickImage from "../../components/PickImage/PickImage";
import PickLocation from "../../components/PickLocation/PickLocation";

import ScreenBase from '../ScreenBase';
class SharePlaceScreen extends ScreenBase {
  state = {
    placeName: ""
  };

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  }

  placeAddedHandler = () => {
    placeName = this.state.placeName.trim();
    if(placeName != "") {
      this.props.onAddPlace( placeName);
    }
    this.setState({
      placeName: ''
    });
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <MainText>
            <HeadingText>Share a Place with us!</HeadingText>
          </MainText>
          <PickImage />
          <PickLocation />
          <PlaceInput
            placeName={this.state.placeName}
            onChangeText={this.placeNameChangedHandler} />
          <View style={styles.button}>
            <Button title="Share the Place!" onPress={this.placeAddedHandler}/>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  placeholder: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "grey",
    width: "80%",
    height: 150
  },
  previewImage: {
    width: "100%",
    height: "100%"
  },
  button: {
    margin: 8
  }
});

const mapDispatchToProps = dispatch => {
  return {
      onAddPlace: (placeName) => dispatch(addPlace(placeName))
  };
}

export default connect(null, mapDispatchToProps)(SharePlaceScreen);
