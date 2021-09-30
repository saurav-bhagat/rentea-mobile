import React from 'react';
import { View, Text, ScrollView, Button } from 'react-native';
import { Card, CardItem, Body } from 'native-base';
import { format } from 'date-fns';

import { tenantInfoStyles } from './TenantInfoStyles';
import { navigate } from '../../../../navigation/rootNavigation';

const TenantInfoScreen = ({ singleRoomData, propertyInfo }) => {
	const tenant = singleRoomData.tenants[0];

	return (
		<ScrollView
			contentContainerStyle={tenantInfoStyles.tenantInfoContainer}
		>
			<Text style={tenantInfoStyles.tenantInfoTitle}>
				Tenant Info Screen for {singleRoomData.roomNo}
			</Text>

			<Card>
				<CardItem>
					<Body>
						<Text>Tenant Name: {tenant.name}</Text>
						<Text>Tenant Phone: {tenant.phoneNumber}</Text>
						<Text>Tenant Email: {tenant.email}</Text>
						<Text>
							Tenant JoinDate:{' '}
							{format(new Date(tenant.joinDate), 'dd MMM yyyy')}
						</Text>
						<Text>Security Paid: {tenant.securityAmount}</Text>
						<Text>
							Next Due date:{' '}
							<Text style={tenantInfoStyles.dueDate}>
								{format(
									new Date(tenant.rentDueDate),
									'dd MMM yyyy'
								)}
							</Text>
						</Text>
						<Button
							title="Update Details"
							onPress={() =>
								navigate('UpdateTenantInfo', {
									singleRoomData,
									propertyInfo,
								})
							}
						/>
					</Body>
				</CardItem>
			</Card>
		</ScrollView>
	);
};

export default TenantInfoScreen;
