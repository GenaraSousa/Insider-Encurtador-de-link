import { useIsFocused } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Modal } from 'react-native';
import { ListItem } from '../../components/ListItem';
import { Menu } from '../../components/Menu';
import { ModalLink } from '../../components/ModalLink';
import { StatusBarPage } from '../../components/StatusBarPage';
import { deleteLinkStore, getLinkStore } from '../../util/storeLinks';
import { Container, ListLinks, Title } from './styles';

export function MyLinks() {
    const [links, setLinks] = useState([]);
    const [dataLinks, setDataLinks] = useState([]);
    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const isFocused = useIsFocused();

    useEffect(() => {
        async function getLinks() {
            const result = await getLinkStore('@EncurtaLinks');
            setLinks(result);
        }
        getLinks()
    }, [isFocused]);

    function handleItem(item) {
        setDataLinks(item);
        setIsVisibleModal(true);
    }

    async function handleDelete(id) {
        const result = await deleteLinkStore(links, id);
        setLinks(result)
    }

    return (
        <Container>

            <StatusBarPage
                backgroundColor="#132742"
                barStyle="light-content"
            />

            <Menu />

            <Title> Meus links </Title>
            <ListLinks
                data={links}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => <ListItem data={item} selectedItem={handleItem} deleteItem={handleDelete} />}
                contentContainerStyle={{ paddingBottom: 20 }}
                showsVerticalScrollIndicator={false}
            />

            <Modal visible={isVisibleModal} transparent animationType='slide' >
                <ModalLink onPress={() => setIsVisibleModal(false)} dataLink={dataLinks} />
            </Modal>

        </Container>
    )
}