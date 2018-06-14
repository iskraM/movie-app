import React from 'react';
import { Text, View } from 'react-native';

import Button from './Button';


const Header = (props) => {
  const { viewStyle, textStyle, buttonStyle } = styles;

  if (props.show) {
    return (
      <View style={viewStyle}>
        <Text style={textStyle}>{props.headerText}</Text>
        <View style={buttonStyle}>
          <Button
            onpress={props.back}
            buttonText={'Back'}
          />
        </View>
      </View>
    );
  }
    return (
      <View style={viewStyle}>
        <Text style={textStyle}>{props.headerText}</Text>
      </View>
    );
};

const styles = {
  viewStyle: {
    flexDirection: 'row',
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    paddingTop: 30,
    elevation: 2,
    borderBottomWidth: 1,
    borderColor: '#000000',
    position: 'relative',
  },
  textStyle: {
    fontSize: 30,
    textAlign: 'center',
    color: '#fff',
    marginBottom: 5,
    justifyContent: 'center',
  },
  buttonStyle: {
    width: 70,
    height: 35,
    position: 'absolute',
    left: 10,
    bottom: 9,
    justifyContent: 'flex-end',
  },
};

export default Header;
