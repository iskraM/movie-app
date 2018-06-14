import React from 'react';
import { View, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const cols = 3;

const FilmDiv = (props) => {
  const { containerStyle } = styles;
  return (
      <View style={containerStyle}>
        {props.children}
      </View>
  );
};

const styles = {
  containerStyle: {
    borderRadius: 15,
    marginLeft: 10,
    marginTop: 8,
    width: ((width - 10) / cols) - 10
  }
};

export default FilmDiv;
