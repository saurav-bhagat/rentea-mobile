import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Card, CardItem, Body } from 'native-base';
import { useSelector } from 'react-redux';

import { tenantDashStyles } from './TenantDashboardStyles';

const TenantDashboard = () => {
	const { userInfo } = useSelector((state) => state.auth);
	const { userDetails } = userInfo;

	return (
		<ScrollView
			contentContainerStyle={tenantDashStyles.tenantDashContainer}
		>
			<Text style={{ fontSize: 15, marginBottom: 20 }}>
				{' '}
				Tenant Home(use common header){' '}
			</Text>

			<Card>
				<CardItem>
					<Body>
						<Text style={{ fontSize: 17, fontWeight: 'bold' }}>
							Owner Details:{' '}
						</Text>
						<Text>Owner name: {userDetails.ownerName} </Text>
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
						<Text>Your name: {userDetails.tenantName}</Text>
						<Text>Your email: {userDetails.tenantEmail}</Text>
						<Text>Your phone: {userDetails.tenantPhoneNumber}</Text>
						<Text>Security paid: {userDetails.security}</Text>
					</Body>
				</CardItem>
			</Card>

			<Card>
				<CardItem>
					<Body>
						<Text>Rent : {userDetails.rent} </Text>
						<Text>
							Rent Due Date:{' '}
							{new Date(
								userDetails.rentDueDate
							).toLocaleDateString()}
						</Text>
						<TouchableOpacity style={tenantDashStyles.payNowButton}>
							<Text style={tenantDashStyles.payNowButton_text}>
								Pay Now
							</Text>
						</TouchableOpacity>
					</Body>
				</CardItem>
			</Card>
		</ScrollView>
	);
};

export default TenantDashboard;
