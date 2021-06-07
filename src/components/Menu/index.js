import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ButtonMenu } from './styles';
export function Menu() {
    const navigation = useNavigation();
    return (
        <ButtonMenu onPress={() => navigation.openDrawer()}  >
            <Feather name="menu" size={40} color="#fff" />
        </ButtonMenu>
    )
}