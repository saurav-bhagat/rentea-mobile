import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, ActivityIndicator } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import LoginScreen from '../screens/Login';
import OTPScreen from '../screens/Otp/OTPScreen';

import OwnerUserDetailsScreen from '../screens/Owner/userDetails/OwnerUserDetailsScreen';

import AddBuilding from '../screens/Owner/addBuilding';
import AddBuildingForm from '../screens/Owner/addBuilding/AddBuildingForm';

import { navigationRef } from './rootNavigation';

import OwnerDashboardBottomTab from './OwnerDashboardBottomTab';
import { setUserInfo } from '../redux/actions';

import TenantDashboardBottomTab from './TenantDashboardBottomTab';
import OwnerBankDetailsFormScreen from '../screens/Owner/bankDetails/OwnerBankDetailsFormScreen';
import { ProfileScreen } from '../screens/Profile/ProfileScreen';
import AddTenantScreen from '../screens/Owner/dashboard/tenant/AddTenantScreen';
import UpdateRoomDetails from '../screens/Owner/dashboard/room/UpdateRoomDetails';
import OwnerBankDetailScreen from '../screens/Owner/bankDetails/OwnerBankDetailScreen';
import { LeftNavbar } from './LeftNavbar';
import { IntroSlider } from '../screens/Introslides/IntroSlider';
import Dashboard from '../screens/Owner/owner-dashboard/Dashboard';
import TransactionScreen from '../screens/Owner/dashboard/payment/TransactionScreen';
import { AddTenantFromDashboard } from '../screens/Owner/owner-dashboard/AddTenantFromDashboard';
const { Screen, Navigator } = createStackNavigator();

/**
 *
 * if access token is not present, show Login Screen.
 * If access token is present, check userType,
 *   if Owner
 * 		check firstLogin, if true - show AddUserDetails and AddBuilding Forms
 * 		if false - show Owner Dashboard
 *	 if Tenant - show Tenant Dashboard
 */
const RootRoutes = () => {
	const dispatch = useDispatch();
	const authState = useSelector((state) => state.auth);
	const [routesLoading, setRoutesLoading] = useState(true);
	let accessToken, firstLogin, userType;
	// userType - Tenant / Owner
	if (authState.userInfo) {
		({ accessToken, firstLogin } = authState.userInfo);
		userType = authState.userInfo.userDetails.userType;
	}

	console.log('Inside Navigation file: ', accessToken, firstLogin, userType);

	useEffect(() => {
		const checkAuthStatus = async () => {
			try {
				let userInfo = await AsyncStorage.getItem('userInfo');
				userInfo = JSON.parse(userInfo);

				dispatch(setUserInfo(userInfo));
				setRoutesLoading(false);
			} catch (error) {
				dispatch(setUserInfo(null));
				setRoutesLoading(false);
			}
		};
		checkAuthStatus();
	}, []);

	if (routesLoading) {
		return (
			<View
				style={{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<ActivityIndicator color="109FDA" size="large" />
			</View>
		);
	}
	return (
		<NavigationContainer ref={navigationRef}>
			<Navigator
				screenOptions={({ route, navigation }) => ({
					headerShown: false,
					gestureEnabled: true,
					cardStyle: { backgroundColor: '#fff' },
				})}
			>
				{accessToken ? (
					<>
						{userType === 'Owner' ? (
							<>
								{firstLogin ? (
									<>
										<Screen
											name="OwnerUserDetails"
											component={OwnerUserDetailsScreen}
										/>
										<Screen
											name="OwnerBankDetailForm"
											component={
												OwnerBankDetailsFormScreen
											}
										/>
										<Screen
											name="AddBuilding"
											component={AddBuilding}
										/>

										<Screen
											name="AddBuildingForm"
											component={AddBuildingForm}
										/>

										<Screen
											name="ownerDashboard"
											component={LeftNavbar}
										/>
										<Screen
											name="Profile"
											component={ProfileScreen}
										/>
										<Screen
											name="TransactionScreen"
											component={TransactionScreen}
										/>
									</>
								) : (
									<>
										<Screen
											name="ownerDashboard"
											component={LeftNavbar}
										/>
										<Screen
											name="AddBuildingForm"
											component={AddBuildingForm}
										/>
										<Screen
											name="Profile"
											component={ProfileScreen}
										/>
										<Screen
											name="UpdateTenantInfo"
											component={AddTenantScreen}
										/>
										<Screen
											name="UpdateRoomDetails"
											component={UpdateRoomDetails}
										/>
										<Screen
											name="OwnerBankDetailForm"
											component={
												OwnerBankDetailsFormScreen
											}
										/>
										<Screen
											name="OwnerBankDetail"
											component={OwnerBankDetailScreen}
										/>
										<Screen
											name="TransactionScreen"
											component={TransactionScreen}
										/>

										<Screen
											name="AddTenantFromDashboard"
											component={AddTenantFromDashboard}
										/>
									</>
								)}
							</>
						) : (
							<>
								<Screen
									name="TenantDashboard"
									component={TenantDashboardBottomTab}
								/>
								<Screen
									name="Profile"
									component={ProfileScreen}
								/>
							</>
						)}
					</>
				) : (
					<>
						<Screen name="Intro" component={IntroSlider} />
						<Screen name="Login" component={LoginScreen} />
						<Screen name="OTP" component={OTPScreen} />
					</>
				)}
			</Navigator>
		</NavigationContainer>
	);
};

export default RootRoutes;
