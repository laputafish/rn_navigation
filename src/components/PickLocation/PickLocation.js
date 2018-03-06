import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  Alert
} from "react-native";
import imagePlaceholder from "../../assets/beautiful-place.jpg";

class PickImage extends Component {
  placeAddedHandler() {
    Alert.alert('placeAddedHandler','xxx');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.placeholder}>
          <Text>Map</Text>
        </View>
        <View style={styles.button}>
          <Button title="Locate Me" onPress={()=>this.placeAddedHandler()}/>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center"
  },
  placeholder: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "grey",
    width: "80%",
    height: 150
  },
  button: {
    margin: 8
  }
});

export default PickImage;
