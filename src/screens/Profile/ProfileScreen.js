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
	const authState = useSelector((state) => state.auth);
	const { ownerDashbhoard } = useSelector((state) => state);
	let userType;
	if (route && route.params) {
		userType = route.params.userType;
	}
	if (!userType && authState && authState.userInfo) {
		userType = authState.userInfo.userDetails.userType;
	}

	let list = [
		// {
		// 	name: 'Edit Profile',
		// },
	];
	if (userType === 'Owner') {
		const ownerDashboardResult =
			ownerDashbhoard.properties.ownerDashboardResult;

		let accountName;
		if (ownerDashboardResult && ownerDashboardResult.accountName) {
			accountName = ownerDashboardResult.accountName;
		}
		list.push({
			name: 'Bank Account',
			url: accountName ? 'OwnerBankDetail' : 'OwnerBankDetailForm',
		});
	}

	return (
		<View style={{ flex: 1 }}>
			<CrossPlatformHeader
				title="Profile"
				profile={false}
				backCallback={() =>
					userType === 'Owner'
						? navigation.goBack()
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
