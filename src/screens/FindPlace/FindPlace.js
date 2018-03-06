import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';

import PlaceList from '../../components/PlaceList/PlaceList';
import ScreenBase from '../ScreenBase';

class FindPlaceScreen extends ScreenBase {
  state = {
    placesLoaded: false
  };

  placesSearchHandler = () => {
    this.setState({
      placesLoaded: true
    });
  }

  itemSelectedHandler = key => {
    let selectedPlace = this.props.places.find( place => {
      return place.key == key;
    })
    this.props.navigator.push( {
      screen: "awesome-places.PlaceDetailScreen",
      title: selectedPlace.name,
      passProps: {
        selectedPlace: selectedPlace
      }
    });
  }
  render() {
    console.log( 'render()');
    let content = (
      <TouchableOpacity onPress={this.placesSearchHandler}>
        <View style={styles.searchButton}>
          <Text style={styles.searchButtonText}>
            Find Places
          </Text>
        </View>
      </TouchableOpacity>
    );
    if(this.state.placesLoaded) {
      content = (
        <PlaceList
          places={this.props.places}
          onItemSelected={this.itemSelectedHandler}
        />
      );
    }

    return (
      <View style={this.state.placesLoaded
        ? null
        : styles.buttonContainer}>{content}</View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  searchButton: {
    borderColor: "orange",
    borderWidth: 3,
    borderRadius: 50,
    padding: 20
  },
  searchButtonText: {
    color: "orange",
    fontSize: 26,
    fontWeight: "bold"
  }
})


const mapStateToProps = state => {
  return {
    places: state.places.places
  }
}
export default connect( mapStateToProps )(FindPlaceScreen);
