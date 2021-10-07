import React from 'react';
import { View, Text } from 'react-native';

import { ListItem, Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/core';

import { useDispatch, useSelector } from 'react-redux';
import CrossPlatformHeader from '../../components/common/CrossPlatformHeader';

import { userLogout } from '../../redux/actions/authActions/authAction';
import { navigate } from '../../navigation/rootNavigation';

export const ProfileScreen = ({ route }) => {
	const navigation = useNavigation();
	const dispatch = useDispatch();

	const { userType } = route.params;

	let list;
	if (userType === 'Owner') {
		const ownerDashboardResult = useSelector(
			(state) => state.ownerDashbhoard.properties.ownerDashboardResult
		);
		let accountName;
		if (ownerDashboardResult && ownerDashboardResult.accountName) {
			accountName = ownerDashboardResult.accountName;
		}
		list = [
			{
				name: 'Edit Profile',
			},
			{
				name: 'Bank Account',
				url: accountName ? 'OwnerBankDetail' : 'OwnerBankDetailForm',
			},
		];
	} else if (userType === 'Tenant') {
		list = [
			{
				name: 'Edit Profile',
			},
		];
	}

	return (
		<View style={{ flex: 1 }}>
			<CrossPlatformHeader
				title="profile"
				profile={false}
				backCallback={() =>
					userType === 'Owner'
						? navigation.navigate('ownerDashboard')
						: navigation.navigate('TenantDashboard')
				}
			/>
			{list.map((l, i) => (
				<ListItem key={i} bottomDivider>
					<ListItem.Content>
						<ListItem.Title
							onPress={() => {
								navigate(l.url);
							}}
						>
							{l.name}
						</ListItem.Title>
					</ListItem.Content>
				</ListItem>
			))}

			<Button
				title="Logout"
				raised
				containerStyle={{
					width: '80%',
					alignSelf: 'center',
					marginTop: 20,
				}}
				onPress={() => dispatch(userLogout())}
			/>
		</View>
	);
};
