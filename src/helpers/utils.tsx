import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (value: any, key: string) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(`@${key}`, jsonValue)
    } catch (e) {
        console.warn(e)
    }
}

export const removeData = async (key: string) => {
    try {
        await AsyncStorage.removeItem(`@${key}`)
    } catch (e) {
        console.warn(e)
    }
}

export const getData = async (key: string) => {
    try {
        const value = await AsyncStorage.getItem(`@${key}`)
        if (value !== null) {
            return value
        }
        return 'KEY IS EMPTY';
    } catch (e) {
        console.warn(e)
        return;
    }
}
