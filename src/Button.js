import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={props.onpress} style={buttonStyle}>
      <Text style={textStyle}> {props.buttonText} </Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#33cc00',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  }
};

export default Button;
