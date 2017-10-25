/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import SearchBar from './app/Components/SearchBar';
import BusinessList from './app/Components/BusinessList';
import Yelp from './app/Components/Yelp';
import Styles from './app/Styles/Main';
import {
  AppRegistry,
  StyleSheet,
  View,
  Image,
  Alert,
  Dimensions,
  ScrollView,
  ListView,
  ToastAndroid,
  Platform,
} from 'react-native';
/**

        */


export default class AwesomeProject extends Component {
  constructor(props) {
    super(props);

    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1,row2) => row1 !== row2
    });

    this.state = {isLoaded:null,
                  businesses:dataSource,
                  loadingtext:'',
                };

    this._search = this._search.bind(this);
    //Used to test fetch function
    this.getmovie = function() {
      return fetch('https://facebook.github.io/react-native/movies.json').then(response => response.json()).then(responseJson => responseJson.movies).catch( error => console.error(error));
    }

  }

  handleSearchExpression() {
    ToastAndroid.show('Nothing Found',ToastAndroid.SHORT);
    this.setState({
      isLoaded:false,
      });
  }

  loadingTime() {
    let loadExpression = 5000;
    this.timeout = setTimeout(() => this.handleSearchExpression(), loadExpression);
  }

  _search(term,place) {
      this.setState({isLoaded:true});
      this.loadingTime();
      Yelp.search(term,place).then(businesses => {
        console.log('DEBUG andoird then')
        console.log(businesses);
        this.setState({
          businesses:this.state.businesses.cloneWithRows(businesses),
          isLoaded:false,
          });
        });
  }

  componentWillMount() {
    if(Platform.OS === 'android') {
      ToastAndroid.showWithGravity('Android Yelp',ToastAndroid.SHORT,ToastAndroid.CENTER);
    }

  }

  componentWillUpdate(nextProps,nextState) {
      if(this.state.businesses === nextState.businesses) {

      }
  }

  render() {
    return (
      <View style={Styles.container}>
        <Image  style={style.backgroundImage} source={require('./img/background.jpg')} >

          <View style={Styles.content}>
            <SearchBar onTextInput={this._textInput} onPress={this._search} />
            <BusinessList isLoaded={this.state.isLoaded} dataSource={this.state.businesses} />
            </View >

        </ Image>
      </View>
    );
  }
}


const functions = {
  ex: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height
  },
}

const style = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    height:functions.ex.height,
  },
})



AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
