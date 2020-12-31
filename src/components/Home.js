import React, { Component } from  'react';
import { Text, View } from 'react-native';
import styles from '../styles/index'

class Home extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Bem vindo cara de chibata</Text>
            </View>
        );
    }
}

export default Home;