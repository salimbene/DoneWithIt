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
}
