import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from '../screens/Owner/owner-dashboard/Dashboard';
import AddBuildingForm from '../screens/Owner/addBuilding/AddBuildingForm';
import { View, Button, Image, Text } from 'react-native';
import CustomDrawer from './CustomDrawer';
import FeatherIcons from 'react-native-vector-icons/Feather';
import { ProfileScreen } from '../screens/Profile/ProfileScreen';
const Drawer = createDrawerNavigator();

//for testing purpose
function NotificationsScreen({ navigation }) {
	return (
		<View
			style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
		>
			<Text>Notifications Screen</Text>
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
		<Drawer.Navigator
			drawerContent={(props) => <CustomDrawer {...props} />}
			initialRouteName="Home"
			screenOptions={{
				headerShown: false,
			}}
			drawerContentOptions={{
				activeBackgroundColor: '#fff',
				activeTintColor: '#0A8ED9',
				inactiveTintColor: '#fff',
				itemStyle: {
					width: '80%',
					borderTopRightRadius: 50,
					borderBottomRightRadius: 50,
					marginVertical: 10,
					marginLeft: 2,
				},
				labelStyle: {
					marginLeft: -10,
					fontSize: 20,
				},
			}}
		>
			<Drawer.Screen
				name="Home"
				component={Dashboard}
				options={{
					drawerIcon: ({ color }) => (
						<FeatherIcons
							name="home"
							size={22}
							color={color}
							style={{ marginLeft: 10 }}
						/>
					),
				}}
			/>
			<Drawer.Screen
				name="Profile"
				component={ProfileScreen}
				options={{
					drawerIcon: ({ color }) => (
						<FeatherIcons
							name="user"
							size={22}
							color={color}
							style={{ marginLeft: 10 }}
						/>
					),
				}}
			/>
			<Drawer.Screen
				name="Notifications"
				component={NotificationsScreen}
				options={{
					drawerIcon: ({ color }) => (
						<FeatherIcons
							name="bell"
							size={22}
							color={color}
							style={{ marginLeft: 10 }}
						/>
					),
				}}
			/>
		</Drawer.Navigator>
	);
};
