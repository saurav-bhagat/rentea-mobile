import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont();

import PropertiesScreen from '../screens/Owner/dashboard/property/PropertiesScreen';
import PropertyInfoScreen from '../screens/Owner/dashboard/property/PropertyInfoScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const PropertiesStack = () => (
	<Stack.Navigator
		screenOptions={({ route, navigation }) => ({
			headerShown: true,
			gestureEnabled: true,
		})}
	>
		<Stack.Screen name="Properties" component={PropertiesScreen} />
		<Stack.Screen name="PropertyInfo" component={PropertyInfoScreen} />
	</Stack.Navigator>
);

function PaymentScreen() {
	return (
		<View
			style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
		>
			<Text>All Payment information will be displayed here!</Text>
		</View>
	);
}

export default OwnerDashboardBottomTab = () => {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;

					if (route.name === 'Properties') {
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
			<Tab.Screen name="Properties" component={PropertiesStack} />
			<Tab.Screen name="Payments" component={PaymentScreen} />
		</Tab.Navigator>
	);
};
