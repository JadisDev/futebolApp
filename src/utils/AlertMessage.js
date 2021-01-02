import { Alert } from 'react-native';

class AlertMessage {

    alert(message) {
        Alert.alert('Futebol', message);
    }

}

export default new AlertMessage();