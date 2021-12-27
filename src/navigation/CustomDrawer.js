import {
	DrawerContentScrollView,
	DrawerItem,
	DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import FeatherIcons from 'react-native-vector-icons/Feather';
import { View } from 'react-native';
import * as Linking from 'expo-linking';

export default function CustomDrawer(props) {
	const phoneNumber = '8789330638';
	return (
		<View style={{ flex: 1, backgroundColor: '#109ED9' }}>
			<DrawerContentScrollView
				contentContainerStyle={{
					flex: 1,
					marginTop: 150,
				}}
			>
				<DrawerItemList {...props} />
				<View
					style={{
						borderBottomColor: '#fff',
						borderBottomWidth: 1,
						width: '80%',
					}}
				/>
				<DrawerItem
					label={'Setting'}
					activeBackgroundColor="#fff"
					activeTintColor="#0A8ED9"
					inactiveTintColor="#fff"
					labelStyle={{
						fontSize: 20,
						marginVertical: 10,
						marginLeft: -10,
					}}
					icon={({ color }) => (
						<FeatherIcons name="settings" size={22} color={color} />
					)}
				/>
				<DrawerItem
					label={'Help'}
					activeBackgroundColor="#fff"
					activeTintColor="#0A8ED9"
					inactiveTintColor="#fff"
					labelStyle={{ fontSize: 20, marginLeft: -10 }}
					icon={({ color }) => (
						<FeatherIcons
							name="help-circle"
							size={22}
							color={color}
						/>
					)}
					onPress={() => {
						Linking.openURL(`tel:${phoneNumber}`);
					}}
				/>
			</DrawerContentScrollView>
		</View>
	);
}
