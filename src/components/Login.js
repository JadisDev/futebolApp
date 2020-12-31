import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert, Image } from 'react-native';
import Welcome from './Welcome'
import styles from '../styles/index'
import { TextInput } from 'react-native-gesture-handler';

class Login extends Component {

    login = () => {
        this.props.navigation.navigate("Home");
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
                />

                <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    placeholder="Digite sua senha"
                />

                <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    placeholder="Digite nome grupo"
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