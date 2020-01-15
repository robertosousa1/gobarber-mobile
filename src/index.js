import React from 'react';
import { StatusBar } from 'react-native';

import './config/Reactotron';

import Routes from './routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Routes />
    </>
  );
}
