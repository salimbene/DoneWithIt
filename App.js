import React from 'react';
import NetInfo, { useNetInfo } from '@react-native-community/netinfo';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const demo = async () => {
    try {
      await AsyncStorage.setItem('person', JSON.stringify({ id: 1 }));
      const value = await AsyncStorage.getItem('person');

      const person = JSON.parse(value);
      console.log(person);
    } catch (error) {
      console.log(error);
    }
  };
  demo();
}

// import React from 'react';
// import { Text } from 'react-native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Screen from './app/components/Screen';
// import { Button } from 'react-native';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import AuthNavigator from './app/navigation/AuthNavigator';
// import navigationTheme from './app/navigation/navigationTheme';
// import AppNavigator from './app/navigation/AppNavigator';
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

// export default function App() {
//   return (
//     <NavigationContainer theme={navigationTheme}>
//       <AppNavigator />
//     </NavigationContainer>
//   );
// }
