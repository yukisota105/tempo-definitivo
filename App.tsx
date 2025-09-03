import * as React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './views/home';
import Itanhaem from './views/itanhaem';
import saoPaulo from './views/saoPaulo';
import tatui from './views/tatui';
import cubatao from './views/cubatao';

const RootStack = createNativeStackNavigator({
  screens: {
    Home: Home,
    Itanhaem:Itanhaem,
    cubatao:cubatao,
    tatui:tatui,
    saoPaulo:saoPaulo
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}