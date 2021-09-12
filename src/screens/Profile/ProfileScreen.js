import React from 'react';
import { View, Text } from 'react-native';
import { ListItem, Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/core';
import { useDispatch } from 'react-redux';

import CrossPlatformHeader from '../../components/common/CrossPlatformHeader';
import { userLogout } from '../../redux/actions/authActions/authAction';

const list = [
	{
		name: 'Edit Profile',
	},
	{
		name: 'Bank Account',
	},
];

export const ProfileScreen = ({ route }) => {
	const navigation = useNavigation();
	const dispatch = useDispatch();

	const { userType } = route.params;

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
						<ListItem.Title>{l.name}</ListItem.Title>
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
