import React, { useEffect, useState } from 'react'
import { TouchableOpacity, Text, } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from 'src/screens/splash/SplashScreen';
import Login from 'src/screens/login/LoginScreen';
import Details from 'src/screens/Details/DetailsScreen';
import List from 'src/screens/List/ListScreen';

import { useAppSelector } from "src/store/hooks";
import { useDispatch } from 'react-redux';
import { getUserInfo, LogOut } from 'src/store/Auth/actions';
import { selectUser } from 'src/store/selectors';
import { theme } from 'src/common/theme/theme';


type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  List: undefined;
  Details: { Item: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeStack = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useAppSelector(selectUser);
  const pendingLogIn = useAppSelector(state => state.Auth.loading);

  useEffect(() => {
    checkIsLogedIn();
  }, []);

  const checkIsLogedIn = async () => {
    try {
      dispatch(getUserInfo());
    } catch (e) { }
  }

  const onLogOut = () => {
    dispatch(LogOut())
  }

  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: theme.Colors.primary },
      }}
    >
      {pendingLogIn ? <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
        : !isLoggedIn ? <Stack.Screen name="Login" component={Login} />
          : <>
            <Stack.Screen name="List" component={List} options={{
              headerRight: () => (
                <TouchableOpacity
                  onPress={onLogOut}

                >
                  <Text style={{ color: "white", fontWeight: 'bold' }}>LOGOUT</Text>
                </TouchableOpacity>

              ),
            }} />
            <Stack.Screen name="Details" component={Details} />
          </>
      }

    </Stack.Navigator>
  )
}

export default HomeStack;