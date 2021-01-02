import React, { Component } from 'react';

import {
    Text,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Drawer, Container, Header, Content, Button } from 'native-base';
import SideBar from './SideBar';


import styles from '../styles/index';
import { connect } from 'react-redux';


class Home extends Component {

    closeDrawer = () => {
        this.drawer._root.close();
    };

    openDrawer = () => {
        this.drawer._root.open();
    };

    render() {
        return (
            <Drawer
                ref={(ref) => { this.drawer = ref; }}
                content={<SideBar navigator={this.navigator} />}
                onClose={() => this.closeDrawer()}>
                <Container>
                    <Header style={{backgroundColor: styles.container.backgroundColor, marginTop: 3}}>
                        <Container style={{ flexDirection: 'row', backgroundColor: styles.container.backgroundColor }}>
                            <Icon onPress={() => this.openDrawer()} name="bars" size={30} color="#fff" />
                        </Container>
                    </Header>

                    <View style={styles.container}>
                        <Text style={styles.welcome}>
                            Welcome to React Native!
                        </Text>
                        <Text style={styles.instructions}>
                            To get started, edit App.js
                        </Text>
                        <Text style={styles.instructions}>
                            das
                        </Text>
                    </View>
                </Container>

            </Drawer>
        );
    }
}

const mapStateToProps = store => ({
    user: store.dataUserState.user
});

export default connect(mapStateToProps)(Home);