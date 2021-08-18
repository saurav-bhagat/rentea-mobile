import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Card, CardItem, Body, Button } from 'native-base';
import { useSelector, useDispatch } from 'react-redux';
import { format } from 'date-fns';
import { useNavigation } from '@react-navigation/native';

import CrossPlatformHeader from '../../../components/common/CrossPlatformHeader';
import { userLogout } from '../../../redux/actions';

import { tenantDashStyles } from './TenantDashboardStyles';

const TenantDashboard = () => {
	const { userInfo } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const navigation = useNavigation();

	let userDetails;
	if (userInfo) userDetails = userInfo.userDetails;

	const logout = async () => {
		dispatch(userLogout());
	};
	if (!userInfo) {
		return null;
	}
	return (
		<View style={{ flex: 1 }}>
			<CrossPlatformHeader title="Tenant Home" />
			<ScrollView
				contentContainerStyle={tenantDashStyles.tenantDashContainer}
			>
				<Card>
					<CardItem>
						<Body>
							<Text
								style={{
									fontSize: 17,
									fontWeight: 'bold',
								}}
							>
								Owner Details:{' '}
							</Text>
							<Text>Owner Name: {userDetails.ownerName} </Text>
							<Text>Owner Email: {userDetails.ownerEmail} </Text>
							<Text>
								Owner Phone: {userDetails.ownerPhoneNumber}{' '}
							</Text>
						</Body>
					</CardItem>
				</Card>

				<Card>
					<CardItem>
						<Body>
							<Text style={{ fontSize: 17, fontWeight: 'bold' }}>
								Your Details:{' '}
							</Text>
							<Text>Your Name: {userDetails.tenantName}</Text>
							<Text>Your Email: {userDetails.tenantEmail}</Text>
							<Text>
								Your Phone: {userDetails.tenantPhoneNumber}
							</Text>
							<Text>Security Paid: {userDetails.security}</Text>
						</Body>
					</CardItem>
				</Card>

				<Card>
					<CardItem>
						<Body>
							<Text>Rent : {userDetails.rent} </Text>
							<Text>
								Rent Due Date:{' '}
								{format(
									new Date(userDetails.rentDueDate),
									'dd MMM yyyy'
								)}
							</Text>
							<TouchableOpacity
								style={tenantDashStyles.payNowButton}
							>
								<Text
									style={tenantDashStyles.payNowButton_text}
									onPress={navigation.navigate('Payment')}
								>
									Pay Now
								</Text>
							</TouchableOpacity>
						</Body>
					</CardItem>
				</Card>
				<Button onPress={logout}>
					<Text>Logout</Text>
				</Button>
			</ScrollView>
		</View>
	);
};

export default TenantDashboard;
