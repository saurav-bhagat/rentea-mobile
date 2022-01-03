import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont();

import PropertiesScreen from '../screens/Owner/dashboard/property/PropertiesScreen';
import PropertyInfoScreen from '../screens/Owner/dashboard/property/PropertyInfoScreen';
import RoomInfoScreen from '../screens/Owner/dashboard/room/RoomInfoScreen';
import OwnerPaymentInfoScreen from '../screens/Owner/dashboard/payment/OwnerPaymentInfoScreen';
import AddBuildingForm from '../screens/Owner/addBuilding/AddBuildingForm';
import DashboardHome from '../screens/Owner/owner-dashboard/DashboardHome';

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
	</Stack.Navigator>
);

export default OwnerDashboardBottomTab = () => {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;

					if (route.name === 'Home') {
						iconName = focused ? 'home-sharp' : 'home-outline';
					} else if (route.name === 'Payments') {
						iconName = focused ? 'cash-sharp' : 'cash-outline';
					}

					// You can return any component that you like here!
					return (
						<Ionicons name={iconName} size={size} color={color} />
					);
				},
			})}
			tabBarOptions={{
				activeTintColor: '#109FDA',
				inactiveTintColor: 'gray',
			}}
		>
			<Tab.Screen name="Home" component={PropertiesStack} />
			<Tab.Screen name="Payments" component={OwnerPaymentInfoScreen} />
		</Tab.Navigator>
	);
};
