import React, { ReactElement } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screen/HomeScreen';
import FormScreen from '../screen/FormScreen';

const { Navigator, Screen } = createStackNavigator();

const RootNavigation = (): ReactElement => {
  return (
    <Navigator>
      {/* <Screen name="Home" component={HomeScreen} /> */}
      <Screen name="Home" component={FormScreen} />
    </Navigator>
  );
};

export default RootNavigation;
