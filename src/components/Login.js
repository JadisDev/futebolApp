import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert, Image } from 'react-native';
import Welcome from './Welcome'
import styles from '../styles/index'
import { TextInput } from 'react-native-gesture-handler';
import axios from 'axios';
import consts from '../const';

class Login extends Component {

    state = {
        login: 'jsj',
        password: '112233',
        name_group: 'EBD'
    }
    consumeApiLogin = () => {

        axios.post(`${consts.API_URL}/sessions`, this.state)
        .then(resp => {
            console.log(resp.data.user.name);
            console.log(resp.data.group.name_group);
            console.log(resp.data.user.admin);
            console.log(resp.data.token);
        })
        .catch(e => {
            console.log(e.message);
        });

    }

    login = () => {
        const {login, password, name_group} = this.state;
        if (login === '') {
            Alert.alert('Informe o login para continuar');
            return;
        }
        if (login.length < 3) {
            Alert.alert('O login deve mais de 2 caracteres');
            return;
        }
        if (password === '') {
            Alert.alert('Informe sua senha');
            return;
        }
        if (name_group === '') {
            Alert.alert('Informe grupo para entrar');
            return;
        }
        if (name_group.length < 3) {
            Alert.alert('O grupo deve mais de 2 caracteres');
            return;
        }

        this.consumeApiLogin();
    }

    signUp = () => {
        this.props.navigation.navigate("SignUp");
    }

    render() {

        return (
            <View style={styles.container}>

                <Welcome
                    text={styles.text}
                    title="Bem vindo(a)"
                ></Welcome>

                <Image
                    style={styles.logo}
                    source={require('../assets/campo.png')}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Digite seu login"
                    onChangeText={(value) => this.setState({ login: value })}
                    value={this.state.login}
                />

                <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    placeholder="Digite sua senha"
                    onChangeText={(value) => this.setState({ password: value })}
                    value={this.state.password}
                />

                <TextInput
                    style={styles.input}
                    onChangeText={(value) => this.setState({ name_group: value })}
                    value={this.state.name_group}
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.login()}
                >

                    <Text style={styles.buttonText}> Login </Text>

                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.signUp()}
                >

                    <Text style={styles.buttonText}> Inscreva-se </Text>

                </TouchableOpacity>

            </View>
        );
    }
}

export default Login;