// App.js
import React from 'react';
import { View } from 'react-native';
import Weather from './src/Weather';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Weather />
    </View>
  );
};

export default App;
