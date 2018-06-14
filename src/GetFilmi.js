import React, { Component } from 'react';
import axios from 'axios';
import {
   View,
   FlatList,
   ScrollView
 } from 'react-native';

import FilmDetail from './FilmDetail';
import Header from './Header';


class GetFilmi extends Component {
  state = {
    filmi: [],
    //false = List of Filmi
    //true = More about Film
    view: false,
  };

  componentWillMount() {
    const Rnd = Math.floor(Math.random() * 156) + 1;
    console.log(Rnd);
    axios.get(`https://tv-v2.api-fetch.website/movies/${Rnd}`)
      .then(response => this.setState({ filmi: response.data }));
  }

//List of Filmi
  renderFilmRow(item) {
    item = item.item;
    return (
      <View>
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          <FilmDetail
            onpress={
              () => this.props.navigation.navigate('FilmDetailView', { imdb_id: item.imdb_id })
            }
            image={item.images.poster}
            title={item.title}
            year={item.year}
          />
        </ScrollView>
      </View>
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          show={false}
          headerText={'Movies'}
        />
        <View style={styles.viewStyle}>
          <FlatList
            numColumns={3}
            data={this.state.filmi}
            renderItem={this.renderFilmRow.bind(this)}
            keyExtractor={(item, index) => index}
          />
        </View>
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    backgroundColor: '#3a3a3a',
  },
};

export default GetFilmi;
