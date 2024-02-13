<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
import ListingEditScreen from "./app/screens/ListingEditScreen";

export default function App() {
  return <ListingEditScreen />;
=======
=======
>>>>>>> c398087 (Update dependencies and fix button component)
import React, { useEffect, useState } from 'react';
import Screen from './app/components/Screen';
import * as ImagePicker from 'expo-image-picker';
import AppButton from './app/components/AppButton'; // Asegúrate de que este componente personalizado maneje correctamente la prop 'title'
import { Image } from 'react-native';
<<<<<<< HEAD

export default function App() {
  const [imageUri, setImageUri] = useState(null); // Inicializar con null para claridad

  useEffect(() => {
    const requestPermission = async () => {
      // Usar el nuevo método para solicitar permisos
      const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
      if (status !== 'granted') {
        alert('You need to enable permissions to access the photo library.');
      }
    };
    console.log('useEffect');
    // requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) {
        setImageUri(result.uri);
        console.log(result.uri);
      }
    } catch (error) {
      console.log('Error reading an image', error);
    }
  };
=======
import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screen from './app/components/Screen';
import { Button } from 'react-native';
<<<<<<< HEAD
>>>>>>> 4f502d7 (Add dependencies and update navigation in package.json and App.js)
=======
import { MaterialCommunityIcons } from '@expo/vector-icons';
>>>>>>> 659dbd4 (Update dependencies and navigation structure)

const Tweets = ({ navigation }) => {
  return (
    <Screen>
      <Text>Tweets</Text>
      <Button
        title="View Tweet"
        onPress={() =>
          navigation.navigate('TweetDetails', {
            id: 1,
          })
        }
      />
    </Screen>
  );
<<<<<<< HEAD
>>>>>>> c398087 (Update dependencies and fix button component)
=======
import React from 'react';

import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  return <WelcomeScreen />;
>>>>>>> 20e8f2c (Fix bug in login functionality)
=======
import React from 'react';

import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  return <WelcomeScreen />;
>>>>>>> 20e8f2c (Fix bug in login functionality)
=======

export default function App() {
  const [imageUri, setImageUri] = useState(null); // Inicializar con null para claridad

  useEffect(() => {
    const requestPermission = async () => {
      // Usar el nuevo método para solicitar permisos
      const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
      if (status !== 'granted') {
        alert('You need to enable permissions to access the photo library.');
      }
    };
    console.log('useEffect');
    // requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) {
        setImageUri(result.uri);
        console.log(result.uri);
      }
    } catch (error) {
      console.log('Error reading an image', error);
    }
  };

  return (
    <Screen>
      <AppButton title="Select Image" onPress={selectImage} />
      {imageUri && (
        <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
      )}
    </Screen>
  );
>>>>>>> c398087 (Update dependencies and fix button component)
=======
};

const TweetDetails = ({ route }) => {
  return (
    <Screen>
      <Text>Tweet Details {route.params.id}</Text>
    </Screen>
  );
};

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const FeedNavigator = () => (
  <Stack.Navigator
    screenOptions={{ headerStyle: { backgroundColor: 'dodgerblue' } }}
  >
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen
      name="TweetDetails"
      component={TweetDetails}
      // options={({ route }) => ({ title: route.params.id })}
      options={{
        headerStyle: { backgroundColor: 'tomato' },
        headerTintColor: 'white',
        // headerShown: false,
      }}
    />
  </Stack.Navigator>
);

const Account = () => {
  return (
    <Screen>
      <Text>Account</Text>
    </Screen>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
    // tabBarOptions={{
    //   activeBackgroundColor: 'tomato',
    //   activeTintColor: 'white',
    //   inactiveBackgroundColor: '#eee',
    //   inactiveTintColor: 'black',
    // }}
    >
      <Tab.Screen
        name="Feed"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
>>>>>>> 4f502d7 (Add dependencies and update navigation in package.json and App.js)
}
