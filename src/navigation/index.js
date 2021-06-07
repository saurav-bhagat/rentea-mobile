import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CounterScreen from '../screens/CounterScreen';

const { Screen, Navigator } = createStackNavigator();

const RootRoutes = () => 
	<NavigationContainer>
		<Navigator>
			<Screen name="Home" component={CounterScreen} />
		</Navigator>
	</NavigationContainer>
;

export default RootRoutes;