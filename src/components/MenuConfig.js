import * as React from 'react';
import { View } from 'react-native';
import { Button, Provider } from 'react-native-paper';
import AlertMessage from '../utils/AlertMessage';

const MenuConfig = () => {

    const logout = () => {
        AlertMessage.alert('Sair do sistema');
    };

    return (
        <View
            style={{
                paddingTop: 8,
                flexDirection: 'row',
                justifyContent: 'center',
                color: '#4169E1'
            }}>
            <Button onPress={logout}>Logout</Button>
        </View>
    );
};

export default MenuConfig;