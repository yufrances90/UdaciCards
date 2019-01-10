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

        const res = await AsyncStorage.getItem(key);

        console.log(JSON.parse(res));

        return JSON.parse(res);
    } catch(error) {
        console.error(error.message)
    }
}