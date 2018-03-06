import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class SideDrawer extends Component {
  constructor(props) {
    super(props);
    this.menu = [
      {
        title: 'Lottery',
        key: 'lottery'
      },
      {
        title: 'Buying List',
        key: 'buying-list'
      },
      {
        title: 'Location Sharing',
        key: 'location-sharing'
      },
      {
        title: 'Todo List',
        key: 'todo-list'
      }
    ];
  }

  render () {
    return (
      <View style={[styles.container, {width: Dimensions.get("window").width*0.8}]}>
        <View style={styles.sideDrawerHeader}>
          <Text style={styles.headerTitle}>Peter Chan</Text>
        </View>
        <TouchableOpacity>
          <View style={styles.drawerItem}>
            <Icon
              style={styles.drawerItemIcon}
              name={Platform.OS==="android" ? "md-log-out" : "ios-log-out"} size={30} color="#aaa"/>
            <Text style={styles.signoutLabel}>Sign Out</Text>
          </View>
        </TouchableOpacity>
        <FlatList
          data={this.menu}
          renderItem={({item})=><TouchableOpacity style={styles.touchableContainer}>
            <Text style={styles.menuItem}>{item.title}</Text>
          </TouchableOpacity>}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 22,
    backgroundColor: "white",
    flex: 1
  },
  touchableContainer:{
    padding: 10,
    height: 44,
    borderBottomWidth: 1,
    borderColor: "#CCC"
  },
  menuItem: {
    fontSize: 18
  },
  sideDrawerHeader: {
    padding: 18,
    width: '95%',
    alignItems: 'center',
    backgroundColor: "#31c4ce"
  },
  headerTitle: {
    fontSize: 16
  },
  drawerItemIcon: {
    marginRight: 10
  },
  drawerItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#eee"
  }
})
export default SideDrawer;
