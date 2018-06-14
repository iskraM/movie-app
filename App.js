import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import GetMore from './src/GetMore';
import GetFilmi from './src/GetFilmi';


export default class App extends React.Component {
  render() {
    const { container } = styles;
    return (
      <View style={container}>
        <RootStack />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: GetFilmi,
    FilmDetailView: GetMore
  },
  {
    initialRouteName: 'Home',
    navigationOptions: { header: null }
  },
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#404040',
  },
});
