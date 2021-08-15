import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Card, CardItem, Body, Button } from 'native-base';
import { useSelector } from 'react-redux';
import CrossPlatformHeader from '../../../components/common/CrossPlatformHeader';
import { format } from 'date-fns';

import { tenantDashStyles } from './TenantDashboardStyles';

const TenantDashboard = () => {
	const { userInfo } = useSelector((state) => state.auth);
	const { userDetails } = userInfo;
	const clearAsyncStorage = async () => {
		AsyncStorage.clear();
	};
	return (
		<View style={{ flex: 1 }}>
			<CrossPlatformHeader title="Tenant Home" />
			<ScrollView
				contentContainerStyle={tenantDashStyles.tenantDashContainer}
			>
				{/* <Text style={{ fontSize: 15, marginBottom: 20 }}>
				{' '}
				Tenant Home(use common header){' '}
			</Text> */}
				{/* <CrossPlatformHeader title="Tenant Home" /> */}
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
								>
									Pay Now
								</Text>
							</TouchableOpacity>
						</Body>
					</CardItem>
				</Card>
				<Button onPress={clearAsyncStorage}>
					<Text>Clear Async Storage</Text>
				</Button>
			</ScrollView>
		</View>
	);
};

export default TenantDashboard;
