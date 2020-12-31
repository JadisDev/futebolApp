import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';

class Welcome extends Component {
    render() {
        return (
            <View>
                <Text style={this.props.text} >{this.props.title}</Text>
                <Text style={this.props.text} >{this.props.slogan}</Text>
            </View>
        )
    }
}

export default Welcome;