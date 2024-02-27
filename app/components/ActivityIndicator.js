import React from 'react';

import LottieView from 'lottie-react-native';
import { View, StyleSheet } from 'react-native';

function ActivityIndicator({ visible = false, onLayout }) {
  if (!visible) return null;
  console.log('visible', visible);
  return (
    <View style={styles.overlay} onLayout={onLayout}>
      <LottieView
        autoPlay
        loop
        source={require('../assets/animations/loader.json')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    zIndex: 1,
    opacity: 0.8,
  },
});

export default ActivityIndicator;
