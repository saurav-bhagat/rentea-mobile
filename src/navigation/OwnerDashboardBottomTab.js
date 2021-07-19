import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';

import PropertiesScreen from '../screens/Owner/dashboard/property/PropertiesScreen';

const Tab = createBottomTabNavigator();

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
		<Tab.Navigator>
			<Tab.Screen name="Properties" component={PropertiesScreen} />
			<Tab.Screen name="Payments" component={PaymentScreen} />
		</Tab.Navigator>
	);
};
