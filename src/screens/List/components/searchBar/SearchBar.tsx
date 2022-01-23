import React, { FC } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { theme } from 'src/common/theme/theme';


interface SeatchBar {
    onChangeText: (t: string) => any;
}

const SearchBar: FC<SeatchBar> = ({ onChangeText }) => {
    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                placeholder="Search for Git User"
            />
        </View>
    );
};

export default SearchBar;

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: theme.Colors.primary,
        padding: 10,
        borderRadius: 10,
    },
});
