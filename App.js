import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import OfflineNotice from './app/components/OfflineNotice';
import AuthNavigator from './app/navigation/AuthNavigator';
import AuthContext from './app/auth/context';
import authStorage from './app/auth/storage';
import { decodeJwt } from './app/utility/decode';
import AppLoading from 'expo-app-loading';
// import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreToken = async () => {
    const token = await authStorage.getToken();
    if (!token) return;
    setUser(decodeJwt(token));
  };

  // useEffect(() => {
  //   async function prepare() {
  //     try {
  //       // Keep the splash screen visible while fetching resources
  //       await SplashScreen.preventAutoHideAsync();
  //       await restoreToken();
  //     } catch (e) {
  //       console.warn(e);
  //     } finally {
  //       // Tell the application to render
  //       setIsReady(true);
  //     }
  //   }

  //   prepare();
  // }, []);

  // if (!isReady) {
  //   return null;
  // }

  // Hide the splash screen once the app is ready
  // useEffect(() => {
  //   async function hideSplash() {
  //     await SplashScreen.hideAsync();
  //   }

  //   if (isReady) {
  //     hideSplash();
  //   }
  // }, [isReady]);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={restoreToken}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

// import { Text } from 'react-native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Screen from './app/components/Screen';
// import { Button } from 'react-native';
// import { MaterialCommunityIcons } from '@expo/vector-icons';

// import AccountNavigator from './app/navigation/AccountNavigator';

// const Tweets = ({ navigation }) => {
//   return (
//     <Screen>
//       <Text>Tweets</Text>
//       <Button
//         title="View Tweet"
//         onPress={() =>
//           navigation.navigate('TweetDetails', {
//             id: 1,
//           })
//         }
//       />
//     </Screen>
//   );
// };

// const TweetDetails = ({ route }) => {
//   return (
//     <Screen>
//       <Text>Tweet Details {route.params.id}</Text>
//     </Screen>
//   );
// };

// const Stack = createStackNavigator();

// const Tab = createBottomTabNavigator();

// const FeedNavigator = () => (
//   <Stack.Navigator
//     screenOptions={{ headerStyle: { backgroundColor: 'dodgerblue' } }}
//   >
//     <Stack.Screen name="Tweets" component={Tweets} />
//     <Stack.Screen
//       name="TweetDetails"
//       component={TweetDetails}
//       // options={({ route }) => ({ title: route.params.id })}
//       options={{
//         headerStyle: { backgroundColor: 'tomato' },
//         headerTintColor: 'white',
//         // headerShown: false,
//       }}
//     />
//   </Stack.Navigator>
// );

// const Account = () => {
//   return (
//     <Screen>
//       <Text>Account</Text>
//     </Screen>
//   );
// };

// const TabNavigator = () => {
//   return (
//     <Tab.Navigator
//     // tabBarOptions={{
//     //   activeBackgroundColor: 'tomato',
//     //   activeTintColor: 'white',
//     //   inactiveBackgroundColor: '#eee',
//     //   inactiveTintColor: 'black',
//     // }}
//     >
//       <Tab.Screen
//         name="Feed"
//         component={FeedNavigator}
//         options={{
//           tabBarIcon: ({ size, color }) => (
//             <MaterialCommunityIcons name="home" size={size} color={color} />
//           ),
//         }}
//       />
//       <Tab.Screen name="Account" component={AccountNavigator} />
//     </Tab.Navigator>
//   );
// };
