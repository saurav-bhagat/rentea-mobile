import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import { useSelector, useDispatch } from 'react-redux';

import AsyncStorage from '@react-native-async-storage/async-storage';

import LoginScreen from '../screens/Login';
import OTPScreen from '../screens/Otp/OTPScreen';

import OwnerUserDetailsScreen from '../screens/Owner/userDetails/OwnerUserDetailsScreen';

import AddBuilding from '../screens/Owner/addBuilding';
import AddBuildingForm from '../screens/Owner/addBuilding/AddBuildingForm';

import FormScreen from '../screens/payment/FormScreen.js';
import { navigationRef } from './rootNavigation';

import OwnerDashboardBottomTab from './OwnerDashboardBottomTab';
import { setUserInfo } from '../redux/actions';
import TenantDashboardBottomTab from './TenantDashboardBottomTab';

const { Screen, Navigator } = createStackNavigator();

const RootRoutes = () => {
	const dispatch = useDispatch();
	const authState = useSelector((state) => state.auth);
	let accessToken, firstLogin;

	if (authState.userInfo) {
		({ accessToken, firstLogin } = authState.userInfo);
	}

	console.log('Inside Navigation file: ', accessToken, firstLogin);

	useEffect(() => {
		const checkAuthStatus = async () => {
			try {
				let userInfo = await AsyncStorage.getItem('userInfo');
				userInfo = JSON.parse(userInfo);

				dispatch(setUserInfo(userInfo));
			} catch (error) {
				dispatch(setUserInfo(null));
			}
		};
		checkAuthStatus();
	}, []);
	return (
		<NavigationContainer ref={navigationRef}>
			<Navigator
				screenOptions={({ route, navigation }) => ({
					headerShown: false,
					gestureEnabled: true,
				})}
			>
				{accessToken ? (
					<>
						{firstLogin ? (
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
									name="TenantDashboard"
									component={TenantDashboardBottomTab}
								/>
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
