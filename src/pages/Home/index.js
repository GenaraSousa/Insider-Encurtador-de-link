import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { ActivityIndicator, Keyboard, KeyboardAvoidingView, Modal, Platform, TouchableWithoutFeedback } from 'react-native';
import { Menu } from '../../components/Menu';
import { ModalLink } from '../../components/ModalLink';
import { StatusBarPage } from '../../components/StatusBarPage/index';
import { api } from '../../services/api';
import { setLinkStore } from '../../util/storeLinks';
import {
    BoxeIcon, ButtonLink, ButtonLinkText, ContainerContent,
    ContainerInput, ContainerLogo,
    Input, Logo, SubTitle, Title
} from './styles';





export function Home() {

    const [link, setLink] = useState('');
    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [dataLink, setDataLink] = useState({});


    async function handleShortLink() {
        setLoading(true);
        try {
            const response = await api.post('/shorten',
                {
                    long_url: link
                })
            setDataLink(response.data);
            setIsVisibleModal(true);
            setLinkStore('@EncurtaLinks', response.data)
            Keyboard.dismiss();
            setLoading(false);
            setLink('');
        } catch (error) {
            alert('Algo deu errado');
            Keyboard.dismiss();
            setLink('');
            setLoading('false');
        }

        //setIsVisibleModal(true);
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
            <LinearGradient
                colors={['#1ddbb9', '#132742']}
                style={{ flex: 1, justifyContent: 'center' }}
            >

                <StatusBarPage
                    backgroundColor="#1ddbb9"
                    barStyle="light-content"
                />
                <Menu />

                <KeyboardAvoidingView
                    behavior={Platform.OS === 'android' ? 'padding' : 'position'}
                    enabled
                >

                    <ContainerLogo>
                        <Logo source={require('../../assets/Logo.png')} />
                    </ContainerLogo>

                    <ContainerContent>

                        <Title>EncurtaLink</Title>
                        <SubTitle> Cole seu link para encurtar </SubTitle>
                        <ContainerInput>

                            <BoxeIcon>
                                <Feather name="link" size={22} color="#fff" />
                            </BoxeIcon>

                            <Input
                                placeholder="Cole seu link aqui"
                                placeholderTextColor="#fff"
                                autoCapitalize="none"
                                autoCorrect={false}
                                keyboardType="url"
                                value={link}
                                onChangeText={(value) => setLink(value)}
                            >
                            </Input>
                        </ContainerInput>

                        <ButtonLink onPress={handleShortLink}>

                            {
                                loading ? (<ActivityIndicator color='#121212' size={24} />) :
                                    (<ButtonLinkText>Gerar link</ButtonLinkText>)
                            }

                        </ButtonLink>
                    </ContainerContent>
                </KeyboardAvoidingView>

                <Modal visible={isVisibleModal} transparent animationType='slide' >
                    <ModalLink onPress={() => setIsVisibleModal(false)} dataLink={dataLink} />
                </Modal>

            </LinearGradient>

        </TouchableWithoutFeedback>

    )
}