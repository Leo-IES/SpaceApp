import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {default as theme} from './theme.json';
import {AppNavigator} from './components/UI/AppNavigator';
import {EvaIconsPack} from '@ui-kitten/eva-icons';

export default function App() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{...eva.light, ...theme}}>
        <AppNavigator />
      </ApplicationProvider>
    </>
  );
}
