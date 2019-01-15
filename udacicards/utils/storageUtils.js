import {
    AsyncStorage
} from 'react-native';

export const saveItem = async (key, object) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(object));
    } catch(error) {
        console.error(error.message);
    }
}

export const getItem = async (key) => {
    try {
        return await AsyncStorage.getItem(key);
    } catch(error) {
        console.error(error.message)
    }
}

export const mergeItem = async (key, newObject) => {
    try {
        return await AsyncStorage.mergeItem(key, JSON.stringify(newObject));
    } catch(error) {
        console.error(error.message);
    }
}