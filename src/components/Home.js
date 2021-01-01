import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from '../styles/index'
import { connect } from 'react-redux';

class Home extends Component {

    render() {

        console.log(this.props.user.name);

        return (
            <View style={styles.container}>
                <Text>{this.props.user.name}</Text>
            </View>
        );
    }
}

const mapStateToProps = store => ({
    user: store.dataUserState.user
});

export default connect(mapStateToProps)(Home);