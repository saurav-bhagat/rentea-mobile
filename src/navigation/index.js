import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CounterScreen from '../screens/CounterScreen';
import LoginScreen from '../screens/Login';

const { Screen, Navigator } = createStackNavigator();

const RootRoutes = () => 
	<NavigationContainer>
		<Navigator
			initialRouteName='Login'
			screenOptions = {
				({route, navigation}) => ({
					headerShown: false,
					gestureEnabled : true
				})
			}
		>
			<Screen name='Login' component={LoginScreen} />
			<Screen name='Home' component={CounterScreen} />
		</Navigator>
	</NavigationContainer>
;

export default RootRoutes;