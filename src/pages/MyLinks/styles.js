import { Platform } from 'react-native';
import styled from 'styled-components/native';
export const Container = styled.View`
    flex: 1;
    background-color:#132742;
`;

export const Title = styled.Text`
    margin-top: ${Platform.OS === 'ios' ? 30 + '%' : 15 + '%'};
    align-self: center;
    font-size: 33px;
    font-weight: bold;
    color: white;
`;

export const ListLinks = styled.FlatList`
    
`;