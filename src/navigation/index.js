import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/Login';
import OTPScreen from '../screens/Otp/OTPScreen';

import CounterScreen from '../screens/CounterScreen';
import OwnerUserDetailsScreen from '../screens/Owner/OwnerUserDetailsScreen';

const { Screen, Navigator } = createStackNavigator();

const RootRoutes = () => {

	const isLogin = true;

	return (
		<NavigationContainer>
			<Navigator
				screenOptions = {
					({route, navigation}) => ({
						headerShown: false,
						gestureEnabled : true
					})
				}
			>
				{
					isLogin ? (
						<>
							<Screen name='OwnerUserDetails' component={OwnerUserDetailsScreen} />
							<Screen name='Home' component={CounterScreen} />
						</>
					) : (
						<>
							<Screen name='Login' component={LoginScreen} />
							<Screen name='OTP' component={OTPScreen} />
						</>
					)
				}
				
				
			</Navigator>
		</NavigationContainer>
	);
};

export default RootRoutes;