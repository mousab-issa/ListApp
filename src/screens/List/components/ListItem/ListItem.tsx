import { TouchableOpacity, StyleSheet, Image, View, Text } from 'react-native';
import React, { memo, FC } from 'react';

interface RepoItemProps {
    name: string;
    avatar_url?: string
    type: string,
    onItemClick: (item: any) => any;
}

const RepoItem: FC<RepoItemProps> = ({ avatar_url, name, type, onItemClick }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onItemClick}>
            <Image
                style={styles.avatar}
                source={{
                    uri: avatar_url,
                }}
            />
            <View>
                <Text style={styles.header1}>{name.toUpperCase()}</Text>
                <Text style={styles.subtitle}>{type}</Text>

            </View>
        </TouchableOpacity>
    );
};


export default memo(RepoItem);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: 10,
        height: 100,
        borderRadius: 5,
        alignItems: "center",
        padding: 10,
        backgroundColor: '#F3F3F3',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,

    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        marginHorizontal: 10
    },
    header1: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 14,
        color: "grey"
    }

});
