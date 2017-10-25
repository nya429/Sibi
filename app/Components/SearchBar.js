import React, { Component } from 'react';
import Styles from '../Styles/Main';
import {
  Text,
  View,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,


} from 'react-native';


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {term:'',
                  place:'',
                  funtext:'',
                  };

    this.handlePress = this.handlePress.bind(this);
    this.handleTextInput = this.handleTextInput.bind(this);
    }

  handlePress(event) {
    this.props.onPress(this.state.term,this.state.place);
  }


  handleTextInput(input) {
    let displayText = input ? input.split(' ').map(txt => txt === 'pizza' ? '🍕' : txt).join(' ') + '!!' : '';
    this.setState({ funtext:displayText,
                    term:input});
  }

  render() {
    return (
    <View style={Styles.search}>

          <TouchableOpacity style={Styles.touchableOpacity} onPress={this.handlePress} >
              <View style={Styles.touchableOpacityView}>
              <Text style={Styles.touchableOpacityText}>Go!</Text>
              </View>
          </TouchableOpacity>

          <Text  style={Styles.overlay, Styles.instructions}>
              {'\n'}{this.state.funtext}{'\n'}
           </Text>

           <View style={Styles.inputContainer}>
            <TextInput
                placeholderTextColor="rgb(173, 156, 95)"
                style={Styles.textInput}
                onChangeText = {(input) => this.handleTextInput(input)}
                placeholder='What to eat..'
                />
           <TextInput
              placeholderTextColor="rgb(173, 156, 95)"
              style={Styles.textInput}
              onChangeText = {(input) => this.setState({place:input})}
              placeholder='Where to go..'
              />
          </ View>

      </View>
    );
  }
}

export default SearchBar;
