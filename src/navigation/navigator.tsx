import React from "react";
import { NavigationContainer } from '@react-navigation/native';

import HomeStack from './MainStack/MainStack';

const Navigator = () => {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
}
export default Navigator;