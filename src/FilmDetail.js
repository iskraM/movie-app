import React from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';

import FilmDiv from './FilmDiv.js';
import FilmSection from './FilmSection';

const { width, height } = Dimensions.get('window');
const cols = 3;
const rows = 3;

const FilmDetail = (props) => {
  const { textStyle, textStyleTitle, imgContainer, imgStyle } = styles;


  return (
    <View>
        <FilmDiv>
          <FilmSection>
            <View styles={imgContainer}>
              <TouchableOpacity
                onPress={props.onpress}
              >
                <Image
                  style={imgStyle}
                  source={{ uri: props.image }}
                />
                </TouchableOpacity>
              </View>
          </FilmSection>

          <View>
            <Text style={textStyleTitle}>{props.title}</Text>
            <Text style={textStyle}>{props.year}</Text>
          </View>
        </FilmDiv>
    </View>
  );
};

const styles = {
  textStyleTitle: {
    height: 22,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 3,
    marginRight: 5,
    width: ((width - 10) / cols) - 10
  },

  textStyle: {
    color: '#bfbfbf',
    fontSize: 12,
    marginTop: 2,
    marginLeft: 8,
    marginBottom: 4
  },

  imgContainer: {
    flex: 1,
    height: ((height - 20 - 20) / rows) - 40,
    width: ((width - 10) / cols) - 15,
    borderWidth: 1,
    borderColor: '#fff'
  },

  imgStyle: {
    borderRadius: 10,
    height: ((height - 20 - 20) / rows) - 40,
    width: ((width - 10) / cols) - 15,
    borderWidth: 1,
    borderColor: '#fff'
  },
};

export default FilmDetail;
