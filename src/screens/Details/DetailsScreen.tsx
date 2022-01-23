import React, { FC } from 'react';
import { View } from 'react-native';

import { Props } from './types';
import styles from './styles';
import { RepoDetailsComponent } from 'src/components';

const DetailsScreen: FC<Props> = ({
    route
}) => {
    const { item } = route.params;
    const { owner: { avatar_url, type }, name, html_url, stargazers_count } = item;

    return (
        <View style={styles.container}>
            <RepoDetailsComponent
                name={name}
                stars={stargazers_count}
                link={html_url}
                avatar={avatar_url}
                type={type} />
        </View >
    )
}

export default DetailsScreen;



