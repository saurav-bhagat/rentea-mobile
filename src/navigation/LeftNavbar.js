import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from '../screens/Owner/owner-dashboard/Dashboard';
import AddBuildingForm from '../screens/Owner/addBuilding/AddBuildingForm';
import { View, Button, Image, Text } from 'react-native';
import LeftNavbarItem from './LeftNavbarItem';
import FeatherIcons from 'react-native-vector-icons/Feather';
import { ProfileScreen } from '../screens/Profile/ProfileScreen';
import { ScaledSheet } from 'react-native-size-matters';
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
					navigation.openDrawer();
				}}
				title="Open Drawer"
			/>
		</View>
	);
}

export const LeftNavbar = () => {
	const drawerScreens = [
		{
			name: 'Home',
			component: Dashboard,
			iconName: 'home',
		},
		{
			name: 'Profile',
			component: ProfileScreen,
			iconName: 'user',
		},
		{
			name: 'Notifications',
			component: NotificationsScreen,
			iconName: 'bell',
		},
	];
	return (
		<Drawer.Navigator
			drawerContent={(props) => <LeftNavbarItem {...props} />}
			initialRouteName="Home"
			screenOptions={{
				headerShown: false,
			}}
			drawerContentOptions={{
				activeBackgroundColor: '#fff',
				activeTintColor: '#0A8ED9',
				inactiveTintColor: '#fff',
				itemStyle: LeftNavbarStyles.itemStyle,
				labelStyle: LeftNavbarStyles.labelStyle,
			}}
		>
			{drawerScreens.map((screens, index) => {
				return (
					<Drawer.Screen
						key={index}
						name={screens.name}
						component={screens.component}
						options={{
							drawerIcon: ({ color }) => (
								<FeatherIcons
									name={screens.iconName}
									size={22}
									color={color}
									style={{ marginLeft: 10 }}
								/>
							),
						}}
					/>
				);
			})}
		</Drawer.Navigator>
	);
};

const LeftNavbarStyles = ScaledSheet.create({
	itemStyle: {
		width: '80%',
		borderTopRightRadius: 50,
		borderBottomRightRadius: 50,
		marginVertical: '10@s',
		marginLeft: '2@s',
	},
	labelStyle: {
		marginLeft: '-10@s',
		fontSize: '18@s',
	},
});
