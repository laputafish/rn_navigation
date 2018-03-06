import React, { Component } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Image,
  Alert
} from "react-native";
import imagePlaceholder from "../../assets/beautiful-place.jpg";

class PickImage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.placeholder}>
          <Image source={imagePlaceholder} style={styles.previewImage}/>
        </View>
        <View style={styles.button}>
          <Button title="Pick Image" onPress={()=>Alert.alert('Pick Image')}/>
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
  previewImage: {
    width: "100%",
    height: "100%"
  },
  button: {
    margin: 8
  }
});

export default PickImage;
