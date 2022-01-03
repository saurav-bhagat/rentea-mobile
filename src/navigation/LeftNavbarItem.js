import React from 'react';
import {
	DrawerContentScrollView,
	DrawerItem,
	DrawerItemList,
} from '@react-navigation/drawer';
import { View } from 'react-native';
import FeatherIcons from 'react-native-vector-icons/Feather';
import * as Linking from 'expo-linking';
import { ScaledSheet } from 'react-native-size-matters';

export default function LeftNavbarItem(props) {
	const drawerItems = [
		{
			label: 'Setting',
			iconName: 'settings',
			onPress: () => {},
		},
		{
			label: 'Help',
			iconName: 'help-circle',

			onPress: () => {
				Linking.openURL(`tel:${8789330638}`);
			},
		},
	];
	return (
		<View style={LeftNavbarItemStyles.topContainer}>
			<DrawerContentScrollView
				contentContainerStyle={LeftNavbarItemStyles.container}
			>
				<DrawerItemList {...props} />
				<View style={LeftNavbarItemStyles.whiteHorizontalRow} />
				{drawerItems.map((item, index) => {
					return (
						<DrawerItem
							key={index}
							label={item.label}
							activeBackgroundColor="#fff"
							activeTintColor="#0A8ED9"
							inactiveTintColor="#fff"
							labelStyle={LeftNavbarItemStyles.labelStyle}
							icon={({ color }) => (
								<FeatherIcons
									name={item.iconName}
									size={22}
									color={color}
								/>
							)}
							style={LeftNavbarItemStyles.itemStyle}
							onPress={item.onPress}
						/>
					);
				})}
			</DrawerContentScrollView>
		</View>
	);
}

const LeftNavbarItemStyles = ScaledSheet.create({
	topContainer: {
		flex: 1,
		backgroundColor: '#109ED9',
	},
	container: {
		flex: 1,
		marginTop: '150@s',
	},
	whiteHorizontalRow: {
		borderBottomColor: '#fff',
		borderBottomWidth: 1,
		width: '80%',
	},
	labelStyle: {
		fontSize: '18@s',
		marginLeft: '-10@s',
	},
	itemStyle: {
		marginVertical: '10@s',
	},
});
