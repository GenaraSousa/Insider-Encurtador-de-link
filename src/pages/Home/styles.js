import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const ContainerLogo = styled.View`
    align-items: center;
    justify-content: center;
    margin-top: ${Platform.OS === 'ios' ? 35 + 'px' : 15 + 'px'};
`;

export const Logo = styled.Image`
    width: 130px;
    height: 145px;
`;

export const ContainerContent = styled.View`
    margin-top: ${Platform.OS === 'ios' ? 25 + 'px' : 15 + 'px'};
`;

export const Title = styled.Text`
    font-size: 25px;
    color: #fff;
    font-weight: bold;
    text-align: center;
`;

export const SubTitle = styled.Text`
    font-size: 16px;
    color: #fff;
    text-align: center;
    padding-bottom: 10%;
`;


export const ContainerInput = styled.View`
    align-items: center;
    align-self: center;
    flex-direction: row;
    width: 90%;
    border-radius: 8px;
`;

export const BoxeIcon = styled.View`
    align-items: center;
    justify-content: center;
    padding-left: 10px;
    width: 10%;
    height: 50px;
    background-color: rgba(255, 255,255, 0.15);
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;

`;

export const Input = styled.TextInput`
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 50px;
    padding: 10px;
    background-color: rgba(255,255,255, 0.15);
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    font-size: 17px;
    color: #fff;
`;

export const ButtonLink = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    align-self: center;
    width: 90%;
    height: 45px;
    background-color: #fff;
    margin-top: 15px;
    border-radius: 8px;
`;

export const ButtonLinkText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #132742;
`;
