import { View, Text, } from 'native-base';
import React, { Component } from 'react';
import styles from '../styles/index';
import Icon from 'react-native-vector-icons/FontAwesome';

class SideBar extends Component {

    render() {
        return (
            <View style={[styles.container, { backgroundColor: '#fff' }]}>
                <Text>
                    <Icon name="rocket" size={30} color="#4169E1" />
                    Conteúdo side bar
                </Text>
            </View>
        );
    }

}

export default SideBar;