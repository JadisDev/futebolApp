import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles/index'

class SignUp extends Component {

    state = {
        name: "Zoe açoka",
        login: "zoe",
        password: "112233",
        active: true,
        name_group: "ZOE",
        admin: true,
        name_season: "Temporada ZOE 2021.1"
    }
    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.text}>
                    Ao se cadastrar você será o adminstrador do seu grupo, podendo adicionar "atletas" no grupo,
                    criar temporadas a qualquer momento.
                </Text>

                <Text style={[styles.text, {paddingTop:10, paddingBottom: 10}]}>
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
                    secureTextEntry={true}
                    placeholder="Qual seu login? (manuel_jale)"
                    onChangeText={(value) => this.setState({ login: value })}
                    value={this.state.login}
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
                    onPress={() => { }}
                >
                    <Text style={styles.buttonText}> Cadastre-se | Bem vindo (a) </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default SignUp;