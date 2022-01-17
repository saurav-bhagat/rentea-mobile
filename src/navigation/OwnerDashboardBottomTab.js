import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import FontistoIcons from 'react-native-vector-icons/Fontisto';
FontistoIcons.loadFont();

import PropertiesScreen from '../screens/Owner/dashboard/property/PropertiesScreen';
import PropertyInfoScreen from '../screens/Owner/dashboard/property/PropertyInfoScreen';
import RoomInfoScreen from '../screens/Owner/dashboard/room/RoomInfoScreen';
import OwnerPaymentInfoScreen from '../screens/Owner/dashboard/payment/OwnerPaymentInfoScreen';
import AddBuildingForm from '../screens/Owner/addBuilding/AddBuildingForm';
import DashboardHome from '../screens/Owner/owner-dashboard/DashboardHome';
import TenantInfoScreen from '../screens/Owner/dashboard/tenant/TenantInfoScreen';
import UpdateRoomDetails from '../screens/Owner/dashboard/room/UpdateRoomDetails';
import AddTenantScreen from '../screens/Owner/dashboard/tenant/AddTenantScreen';
import { ScaledSheet } from 'react-native-size-matters';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
//Need to change screen name from Properties to Dashboard in all Files.
const PropertiesStack = () => (
	<Stack.Navigator
		screenOptions={({ route, navigation }) => ({
			headerShown: false,
			gestureEnabled: true,
		})}
	>
		<Stack.Screen name="Properties" component={DashboardHome} />
		<Stack.Screen name="PropertyInfo" component={PropertyInfoScreen} />
		<Stack.Screen name="RoomInfo" component={RoomInfoScreen} />
		<Stack.Screen name="TenantInfo" component={TenantInfoScreen} />
		<Stack.Screen name="UpdateRoomDetails" component={UpdateRoomDetails} />
		<Stack.Screen name="UpdateTenantInfo" component={AddTenantScreen} />
	</Stack.Navigator>
);

export default OwnerDashboardBottomTab = () => {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;

					if (route.name === 'Home') {
						iconName = 'home';
					} else if (route.name === 'Payments') {
						iconName = 'wallet';
					}

					// You can return any component that you like here!
					return (
						<FontistoIcons
							name={iconName}
							size={size}
							color={color}
						/>
					);
				},
			})}
			tabBarOptions={{
				activeTintColor: '#109FDA',
				inactiveTintColor: '#2c2c2c',
				labelPosition: 'beside-icon',
				labelStyle: bottomTabStyle.labelStyle,
			}}
		>
			<Tab.Screen name="Home" component={PropertiesStack} />
			<Tab.Screen name="Payments" component={OwnerPaymentInfoScreen} />
		</Tab.Navigator>
	);
};

const bottomTabStyle = ScaledSheet.create({
	labelStyle: {
		fontSize: '13@s',
	},
});
