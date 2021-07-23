import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import { useSelector, useDispatch } from 'react-redux';

import AsyncStorage from '@react-native-async-storage/async-storage';

import LoginScreen from '../screens/Login';
import OTPScreen from '../screens/Otp/OTPScreen';

import CounterScreen from '../screens/CounterScreen';
import OwnerUserDetailsScreen from '../screens/Owner/userDetails/OwnerUserDetailsScreen';

import AddBuilding from '../screens/Owner/addBuilding';
import AddBuildingForm from '../screens/Owner/addBuilding/AddBuildingForm';

import FormScreen from '../screens/payment/FormScreen.js';
import { navigationRef } from './rootNavigation';

import OwnerDashboardBottomTab from './OwnerDashboardBottomTab';
import { setRestoreToken } from '../redux/actions/authActions';

const { Screen, Navigator } = createStackNavigator();

const RootRoutes = () => {
	const { userToken, userInfo } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	useEffect(() => {
		const checkAuthStatus = async () => {
			let token = null;
			try {
				token = await AsyncStorage.getItem('accessToken');
				dispatch(setRestoreToken(token));
			} catch (error) {
				dispatch(setRestoreToken(null));
			}
		};
		checkAuthStatus();
	}, [userToken]);
	return (
		<NavigationContainer ref={navigationRef}>
			<Navigator
				screenOptions={({ route, navigation }) => ({
					headerShown: false,
					gestureEnabled: true,
				})}
			>
				{userToken ? (
					<>
						{userInfo.firstLogin ? (
							<>
								<Screen
									name="OwnerUserDetails"
									component={OwnerUserDetailsScreen}
								/>
								<Screen
									name="AddBuilding"
									component={AddBuilding}
								/>

								<Screen
									name="AddBuildingForm"
									component={AddBuildingForm}
								/>
							</>
						) : (
							<>
								<Screen
									name="ownerDashboard"
									component={OwnerDashboardBottomTab}
								/>
								<Screen
									name="AddBuilding"
									component={AddBuilding}
								/>

								<Screen
									name="AddBuildingForm"
									component={AddBuildingForm}
								/>

								<Screen name="Home" component={CounterScreen} />
							</>
						)}
					</>
				) : (
					<>
						<Screen name="Login" component={LoginScreen} />
						<Screen name="OTP" component={OTPScreen} />
					</>
				)}
			</Navigator>
		</NavigationContainer>
	);
};

export default RootRoutes;
