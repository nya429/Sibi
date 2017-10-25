import React, { Component } from 'react';
import Styles from '../Styles/Main';
import {
        ListView,
        Text,
        View,
        Image,
        } from 'react-native';


class BusinessList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingText:'',
    }
    this.count = 12;
  }

  _scorllText (text) {
      if(this.count < text.length) {
        this.count ++;
     } else {
        this.count = 12;
     }
    this.setState({loadingText:text.slice(0,this.count)});
   }


  _renderLoading() {
    return (<View style={Styles.loading}>
                <Text style={Styles.loadingText}>{this.state.loadingText}</Text>
            </View>);
  }

  componentWillUpdate(nextProps,nextState) {
    if(nextProps.isLoaded === false) {
        clearInterval(this.interval);
        this.interval = '';
    } else if(!this.interval ) {
      let text = `Where to eat ....   `;
      this.count = 12;
      this.interval = setInterval(() => this._scorllText(text),100);
    }
}

  _renderRow(business) {
    return (
      <View style={Styles.business}>
        <Image style={Styles.businessImage} source={{'uri':business.imageSrc}} />
        <View style={Styles.businessContent}>
            <Text style={Styles.businessName}>{business.name}</Text>
            <Text style={Styles.businessRating}>  <Text style={{fontSize:23,color:'rgb(255, 187, 0)'}}>{business.rating}</Text> | {business.reviewCount} reviews</Text>
            <Text style={Styles.businessAddress}>{business.address}{'\n'}{business.city}, {business.state}{'\n'}{business.zipCode}  </Text>
        </View>
      </View>
    );
  }

  _renderviewList() {
      if(this.props.isLoaded) {
        return this._renderLoading();
      } else {
        return (<ListView
               style= {Styles.businessListView}
               enableEmptySections={true}
               dataSource={this.props.dataSource}
               renderRow={business => this._renderRow(business)}
          />);
      }
  }

  render() {
    return this._renderviewList();
  }
}

export default BusinessList;
