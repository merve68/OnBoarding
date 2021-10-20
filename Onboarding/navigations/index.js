import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './Routes';
import {AuthProvider} from './AuthProvider';

const Providers = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};
export default Providers;
