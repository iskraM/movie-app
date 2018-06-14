import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

import More from './More';
import Header from './Header';

class GetMore extends Component {
  state = {
    loading: true,
    film: [],
  }

  componentWillMount() {
    const id = this.props.navigation.state.params.imdb_id;
    //console.log(id);
    axios.get(`https://tv-v2.api-fetch.website/movie/${id}`, {
    }).then(response => {
      //console.log(response.data);
        this.setState({ film: response.data, loading: false });
    }).catch(err => {
      console.log(err.message);
    });
  }

  render() {
    if (this.state.loading) {
      return (
      <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
        }}
      >
        <Text>Loading...</Text>
      </View>
      );
    }
    const item = this.state.film;
    const { goBack } = this.props.navigation;

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#3a3a3a', }}
      >
        <Header
          show
          back={() => goBack()}
          headerText={'More'}
        />
        <More
          image={item.images.poster}
          title={item.title}
          year={item.year}
          synopsis={item.synopsis}
          trailer={item.trailer}
          rating={item.rating.percentage / 10}
          runtime={item.runtime}
        />
      </View>
    );
  }
}

export default GetMore;
