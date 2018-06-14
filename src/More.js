import React from 'react';
import { View, ScrollView, Text, Image, Linking } from 'react-native';

import Button from './Button';

const More = (props) => {
  const {
    imgStyle,
    imgContainer,
    textStyleTitle,
    textStyleYear,
    textStyle,
    moreText,
    container,
    opis,
    buttonStyle,
    lastDiv,
    ratingStyle,
    rating,
    runtime,
    runtimeText
  } = styles;

  return (
    <ScrollView style={container}>
      <View style={imgContainer}>
        <Image
          style={imgStyle}
          source={{ uri: props.image }}
        />
      </View>

      <View style={textStyle}>
        <Text style={textStyleTitle}>{props.title}</Text>
        <Text style={textStyleYear}>({props.year})</Text>
      </View>

      <View style={moreText}>
        <Text style={opis}>{props.synopsis}</Text>
      </View>

      <View style={lastDiv}>
        <View style={ratingStyle}>
          <Text style={{ color: '#fff' }}>Rating:</Text>
          <Text style={rating}>{props.rating} / 10</Text>
        </View>
        <View style={buttonStyle}>
            <Button
              onpress={() => Linking.openURL(props.trailer)}
              buttonText={'TRAILER'}
            />
        </View>
        <View style={runtime}>
          <Text style={{ color: '#fff' }}>Lenght:</Text>
          <Text style={runtimeText}>{props.runtime} min</Text>
        </View>
      </View>
    </ScrollView>
  );
};


const styles = {
  container: {
    flex: 1,
  },


  imgStyle: {
    flex: 1,
  },
  imgContainer: {
    marginTop: 1,
    flexDirection: 'row',
    flex: 1,
    height: 250,
    borderBottomWidth: 1,
    borderColor: '#000'
  },


  textStyle: {
    marginTop: 7,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomWidth: 1,
    borderColor: '#000',
  },
  textStyleTitle: {
    color: '#fff',
    fontSize: 27,
    fontWeight: 'bold',
  },
  textStyleYear: {
    marginTop: 3.5,
    color: '#cbced3',
    fontSize: 19,
    marginLeft: 10,
  },


  moreText: {
    paddingTop: 7,
    paddingLeft: 40,
    paddingBottom: 7,
    paddingRight: 30,
    backgroundColor: '#606060',
    borderBottomWidth: 1,
    borderColor: '#000',
  },
  opis: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'justify',
  },


  lastDiv: {
    flexDirection: 'row',
    flex: 1,
  },
  ratingStyle: {
    width: 130,
    height: 60,
    borderRightWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rating: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonStyle: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    height: 60,
    flexDirection: 'row',
    flex: 1,
    //alignItems: 'center',
    justifyContent: 'center',
  },
  runtime: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 130,
    borderLeftWidth: 1,
    borderColor: '#000',
  },
  runtimeText: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
  },
};

export default More;
