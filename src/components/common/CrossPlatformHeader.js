import React from 'react';
import { Platform, StyleSheet, Text } from 'react-native';
import { Button, Header, Left, Right, Body, Title } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/core';

export default function CrossPlatformHeader({
	title,
	backCallback,
	profile = true,
	user = 'owner',
}) {
	const navigation = useNavigation();
	const authState = useSelector((state) => state.auth);
	let userName = 'OW';
	let userType;
	if (authState && authState.userInfo) {
		userType = authState.userInfo.userDetails.userType;
		const { accountName, tenantName } = authState.userInfo.userDetails;
		if (accountName || tenantName) {
			userType === 'Owner'
				? (userName = accountName.split(' '))
				: (userName = tenantName.split(' '));
			userName = userName[0][0] + userName[1][0];
		}
	}

	return (
		<Header
			transparent
			androidStatusBarColor="#109FDA"
			iosBarStyle="default"
			style={{
				marginTop: 10,
				backgroundColor: '#fff',
			}}
		>
			<Left>
				{backCallback && (
					<Button
						transparent
						style={HeaderStyle.buttonStyle}
						onPress={backCallback}
					>
						<Icon
							name="chevron-back-outline"
							style={{
								fontSize: 22,
								color: '#109FDA',
							}}
						/>
					</Button>
				)}
			</Left>
			<Body>
				<Title style={HeaderStyle.header}>{title}</Title>
			</Body>
			<Right>
				{!profile ? (
					<></>
				) : (
					<Avatar
						rounded
						title={userName}
						containerStyle={{
							backgroundColor: '#109FDA',
						}}
						onPress={() =>
							navigation.navigate('Profile', { userType })
						}
					/>
				)}
			</Right>
		</Header>
	);
}

const HeaderStyle = StyleSheet.create({
	header: {
		color: '#000',
		fontSize: 24,
		width: 270,
		textAlign: 'center',
		right: Platform.OS != 'ios' ? 25 : 0,
		fontFamily: 'interRegular',
	},
	buttonStyle: {
		backgroundColor: '#eeeeee',
		borderColor: '#afafaf',
		borderWidth: 0.5,
		borderRadius: 10,
	},
});
