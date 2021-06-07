import { Feather } from '@expo/vector-icons';
import React from 'react';
import { View } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { ActionContainer, ContainerButton, Link } from './styles';
export function ListItem({ data, selectedItem, deleteItem }) {

    function handleRightAction() {
        return (
            <ActionContainer onPress={() => deleteItem(data.id)}>
                <Feather
                    name='trash'
                    color="#fff"
                    size={24}
                />
            </ActionContainer>
        )
    }
    return (
        <View>
            <Swipeable
                renderRightActions={handleRightAction}
            >
                <ContainerButton activeOpacity={0.5} onPress={() => { selectedItem(data) }}>
                    <Feather
                        name="link"
                        color="#fff"
                        size={24}
                    />
                    <Link
                        numberOfLines={1}
                    >
                        {data.long_url}

                    </Link>
                </ContainerButton>
            </Swipeable>
        </View>
    )
}