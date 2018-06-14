import React from 'react';
import { View } from 'react-native';

const FilmInfo = (props) => {
  const { divStyle } = styles;
  return (
    <View style={divStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  divStyle: {
    padding: 2,
    position: 'relative',
    borderRadius: 15,
    justifyContent: 'space-between',
  }
};

export default FilmInfo;
