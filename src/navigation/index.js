import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/Login';
import OTPScreen from '../screens/Otp/OTPScreen';

import CounterScreen from '../screens/CounterScreen';
import OwnerUserDetailsScreen from '../screens/Owner/OwnerUserDetailsScreen';
import AddBuilding from '../screens/Owner/addBuilding';
import AddBuildingForm from '../screens/Owner/addBuilding/AddBuildingForm';
import FormScreen from '../screens/payment/FormScreen.js';
import { useSelector, useDispatch } from 'react-redux';

const { Screen, Navigator } = createStackNavigator();

const RootRoutes = () => {
    const data=useSelector((state)=>state.buildingDetails);
	console.log('data',data);
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
						    {/* <Screen name="Payment"  component={FormScreen}  /> */}
							<Screen name='AddBuilding' component={AddBuilding} />
							<Screen name='AddBuildingForm' component={AddBuildingForm} />
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