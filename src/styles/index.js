import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4169E1'
    },
    input: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        borderRadius: 3,
        width: '80%'
    },
    text: {
        color: '#fff',
        width: '80%'
    },
    button: {
        width: '80%',
        height: 42,
        backgroundColor: '#FFD700',
        marginTop: 10,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#008000',
        fontSize: 18,
        fontWeight: 'bold'
    },
    logo: {
        width: 150,
        height: 150,
        borderRadius: 100,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#fff',
        marginBottom: 5,
    },
    containerBar: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});

export default styles;
