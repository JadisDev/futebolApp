import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles/index';
import AlertMessage from '../utils/AlertMessage';
import axios from 'axios';
import consts from '../const';

class SignUp extends Component {

    state = {
        name: "Jadis da Silva Jale",
        login: "jsj",
        password: "112233",
        active: true,
        name_group: "EBD",
        admin: true,
        name_season: "Temporada 2021.1"
    }

    consumeApiSignUp() {
        axios.post(`${consts.API_URL}/users`, this.state)
            .then(result => {
                console.log(result);
                this.props.navigation.navigate("Login");
            })
            .catch((error) => {
                // AlertMessage.alert(error.response.data.error);
                console.log(error.response.data.error);
            });
    }

    validSignUp() {
        const { name, login, password, name_group, name_season } = this.state;

        if (name === '') {
            AlertMessage.alert('Informe seu nome para continuar');
            return;
        }

        if (name.length < 3) {
            AlertMessage.alert('O nome deve mais de 2 caracteres');
            return;
        }

        if (login === '') {
            AlertMessage.alert('Informe o login para continuar');
            return;
        }

        if (login.length < 3) {
            AlertMessage.alert('O login deve mais de 2 caracteres');
            return;
        }

        if (password === '') {
            AlertMessage.alert('Informe sua senha');
            return;
        }

        if (name_group === '') {
            AlertMessage.alert('Informe grupo para entrar');
            return;
        }

        if (name_group.length < 3) {
            Alert.alert('O grupo deve mais de 2 caracteres');
            return;
        }

        if (name_season === '') {
            AlertMessage.alert('Informe temporada para entrar');
            return;
        }

        if (name_season.length < 3) {
            Alert.alert('A temporada deve mais de 2 caracteres');
            return;
        }

        this.consumeApiSignUp();
    }

    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.text}>
                    Ao se cadastrar você será o adminstrador do seu grupo, podendo adicionar "atletas" no grupo,
                    criar temporadas a qualquer momento.
                </Text>

                <Text style={[styles.text, { paddingTop: 10, paddingBottom: 10 }]}>
                    Saiba quem são os artilheiros, os vencedores e outros ranks.
                    A qualquer momento em qualquer lugar em qualquer temporada.
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="Qual seu nome? (Manuel Jale)"
                    onChangeText={(value) => this.setState({ name: value })}
                    value={this.state.name}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Qual seu login? (manuel_jale)"
                    onChangeText={(value) => this.setState({ login: value })}
                    value={this.state.login}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Informe sua senha"
                    secureTextEntry={true}
                    onChangeText={(value) => this.setState({ password: value })}
                    value={this.state.password}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Qual o nome do seu grupo de futebol? (Futebol da rua)"
                    onChangeText={(value) => this.setState({ name_group: value })}
                    value={this.state.name_group}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Qual temporada? (Futebol da rua 2021.1)"
                    onChangeText={(value) => this.setState({ name_season: value })}
                    value={this.state.name_season}
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => { this.validSignUp() }}
                >
                    <Text style={styles.buttonText}> Cadastre-se | Bem vindo (a) </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default SignUp;