import React from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import { Card, CardItem, Body, Button } from 'native-base';
import { format } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import { tenantInfoStyles } from './TenantInfoStyles';
import { payWithCash } from '../../../../redux/actions/payment/payWithCashAction';

const TenantInfoScreen = ({ singleRoomData }) => {
	const { loading } = useSelector((state) => state.payWithCash);
	const dispatch = useDispatch();
	const tenant = singleRoomData.tenants[0];

	const handlePayWithCash = () => {
		const {
			_id: tenantUserId,
			securityAmount: amount,
			rentDueDate,
		} = tenant;
		dispatch(payWithCash({ tenantUserId, amount, rentDueDate }));
	};

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
						<View style={{ marginTop: 20 }}>
							<Button
								onPress={() => {
									handlePayWithCash();
								}}
								style={{
									backgroundColor: '#109FDA',
									padding: 10,
								}}
								rounded
							>
								{loading ? (
									<ActivityIndicator
										color="#ffffff"
										size="large"
									/>
								) : (
									<Text>Paid with cash</Text>
								)}
							</Button>
						</View>
					</Body>
				</CardItem>
			</Card>
		</ScrollView>
	);
};

export default TenantInfoScreen;
