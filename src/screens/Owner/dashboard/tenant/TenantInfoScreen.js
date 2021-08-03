import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Header, Content, Card, CardItem, Body } from 'native-base';

import { tenantInfoStyles } from './TenantInfoStyles';

const TenantInfoScreen = ({ title }) => {
	return (
		<ScrollView
			contentContainerStyle={tenantInfoStyles.tenantInfoContainer}
		>
			<Text style={tenantInfoStyles.tenantInfoTitle}>
				Tenant Info Screen for {title}
			</Text>

			<Card>
				<CardItem>
					<Body>
						<Text>Tenant Name: Random Tenant</Text>
						<Text>Tenant Phone: 9876543213</Text>
						<Text>
							Next Due date:{' '}
							<Text style={tenantInfoStyles.dueDate}>
								28 July, 2021
							</Text>
						</Text>
					</Body>
				</CardItem>
			</Card>
		</ScrollView>
	);
};

export default TenantInfoScreen;
