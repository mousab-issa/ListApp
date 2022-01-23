import React, { FC, useCallback } from 'react';
import { TouchableOpacity, StyleSheet, Text, Linking, Alert } from 'react-native';
import { theme } from 'src/common/theme/theme';

interface Props {
    url: string;
    children: string;
}
const Link: FC<Props> = ({ url, children }) => {
    const handlePress = useCallback(async () => {
        const supported = await Linking.canOpenURL(url);
        if (supported) {
            await Linking.openURL(url);
        } else {
            Alert.alert(`The url is invalid: ${url}`);
        }
    }, [url]);

    return <TouchableOpacity onPress={handlePress} style={styles.linkButton}>
        <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>;
};

const styles = StyleSheet.create({
    linkButton: {
        width: '100%',
        height: 50,
        borderRadius: 20,
        backgroundColor: theme.Colors.primary,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginTop: 'auto'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    }
});

export default Link;
