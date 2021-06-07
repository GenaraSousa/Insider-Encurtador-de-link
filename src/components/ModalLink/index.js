import { Feather } from '@expo/vector-icons';
import Clipboard from 'expo-clipboard';
import React from 'react';
import { Share, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { Container, Header, LinkArea, LongUrl, ModalContainer, ShortLinkArea, ShortLinkUrl, Title } from './styles';
export function ModalLink({ onPress, dataLink }) {

    function handleCopyLink() {
        Clipboard.setString(dataLink.link)
    }

    async function handleShare() {
        try {
            const result = await Share.share({
                message: `Link: ${dataLink.link}`
            });

            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    console.log('ActivityType');
                } else {
                    console.log('Compartilhado');
                }
            } else if (result.action === Share.dismissedAction) {
                console.log('Modal fechado')
            }

        } catch (error) {
            console.log(Error);
        }
    }
    return (
        <ModalContainer>
            <TouchableWithoutFeedback onPress={onPress}>
                <View style={{ flex: 1, }} />
            </TouchableWithoutFeedback>
            <Container>
                <Header>
                    <TouchableOpacity
                        onPress={onPress}
                    >
                        <Feather
                            name="x"
                            color="#212743"
                            size={30}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={handleShare}
                    >
                        <Feather
                            name="share"
                            color="#212743"
                            size={30}
                        />
                    </TouchableOpacity>
                </Header>

                <LinkArea>
                    <Title>Link encurtado </Title>
                    <LongUrl
                        numberOfLines={1}
                    >
                        {dataLink.long_url}
                    </LongUrl>
                    <ShortLinkArea
                        activeOpacity={1}
                        onPress={handleCopyLink}
                    >
                        <ShortLinkUrl
                            numberOfLines={1}
                        >
                            {dataLink.link}
                        </ShortLinkUrl>
                        <TouchableOpacity
                            onPress={handleCopyLink}
                        >
                            <Feather
                                name="copy"
                                color="#fff"
                                size={25}
                            />
                        </TouchableOpacity>
                    </ShortLinkArea>
                </LinkArea>

            </Container>

        </ModalContainer>
    )
}