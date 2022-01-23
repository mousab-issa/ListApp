import React, { FC } from 'react';

import { Text, SafeAreaView } from 'react-native';

import styles from './styles';
import { Props } from './types';


const Splash: FC<Props> = ({
  navigation
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Loading.....</Text>
    </SafeAreaView>
  )
}

export default Splash;



