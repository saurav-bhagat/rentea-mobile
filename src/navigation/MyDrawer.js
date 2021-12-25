import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from '../screens/Owner/owner-dashboard/Dashboard';
import AddBuildingForm from '../screens/Owner/addBuilding/AddBuildingForm';
import { View, Button } from 'react-native';

const Drawer = createDrawerNavigator();
//for testing purpose
function NotificationsScreen({ navigation }) {
	return (
		<View
			style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
		>
			<Button
				onPress={() => {
					console.log('clicked');
					navigation.openDrawer();
				}}
				title="Open Drawer"
			/>
		</View>
	);
}

export const MyDrawer = () => {
	return (
		<Drawer.Navigator initialRouteName="Home">
			<Drawer.Screen
				name="Home"
				component={Dashboard}
				options={{ headerShown: false }}
			/>
			<Drawer.Screen
				name="AddBuildingForm"
				component={AddBuildingForm}
				options={{ headerShown: false }}
			/>
			<Drawer.Screen
				name="Notifications"
				component={NotificationsScreen}
			/>
		</Drawer.Navigator>
	);
};
