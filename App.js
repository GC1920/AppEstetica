import React, { useState } from 'react';
import AnimatedSplash from 'react-native-animated-splash-screen';

import { StatusBar } from 'react-native';

import { Routes } from './src/routes/Index';

import { Footer } from './src/Screens/Components/Footer';

export default function App() {

  const [loading, setLoading] = useState(false);

  setTimeout(() => {
    setLoading(true);
  }, 2000);

  return (
    <AnimatedSplash
        transludecent={true}
        isLoaded={loading}
        logoImage={require('./assets/splash.png')}
        backgroundColor={"#fff"}
        logoHeight={800}
        logoWidth={800}
    >
      <StatusBar barStyle={'dark-content'}/>
      <Routes />
      
      <Footer />
    </AnimatedSplash>
  );
}
