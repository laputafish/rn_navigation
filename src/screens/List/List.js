import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet
} from 'react-native';

class AuthScreen extends Component {
    render () {
        return (
            <View style={styles.container}>
              <FlatList
                data={['peter','john']}
                renderItem={({item})=><View style={styles.item}>
                    <Text style={styles.itemText}>{item}</Text>
                  </View>
                }
                keyExtractor={(item,index) => index}
              />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    padding: 10,
    height: 44,
    borderBottomWidth: 1,
    borderColor: 'lightgray'
  },
  itemText: {
    fontSize: 18
  }
});
export default AuthScreen;
