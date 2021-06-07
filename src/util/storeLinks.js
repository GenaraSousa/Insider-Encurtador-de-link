import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getLinkStore(key) {
    const myLinks = await AsyncStorage.getItem(key);
    let linkSave = JSON.parse(myLinks) || [];
    return linkSave;
}

export async function setLinkStore(key, newLink) {
    let linksStored = await getLinkStore(key);

    const hasLink = linksStored.some(link => link.id === newLink.id);

    if (hasLink) {
        console.log('Link já está na lista');
        return;
    }

    linksStored.push(newLink);
    await AsyncStorage.setItem(key, JSON.stringify(linksStored))
}

export async function deleteLinkStore(links, id) {
    let myLinks = links.filter((item) => {
        return (item.id !== id)
    })
    await AsyncStorage.setItem('@EncurtaLinks', JSON.stringify(myLinks));

    return myLinks;
}