import { Alert } from 'react-native';

class AlertMessage {

    alert(error) {
        Alert.alert('Futebol', error);
    }

}

export default new AlertMessage();