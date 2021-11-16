import React from 'react';
import { View, Text, ScrollView, ActivityIndicator, Alert } from 'react-native';
import { Card, CardItem, Body, Button } from 'native-base';
import { format } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import { tenantInfoStyles } from './TenantInfoStyles';
import { payWithCash } from '../../../../redux/actions/payment/payWithCashAction';

import { navigate } from '../../../../navigation/rootNavigation';

const TenantInfoScreen = ({ singleRoomData, propertyInfo }) => {
	const { loading } = useSelector((state) => state.payWithCash);
	const dispatch = useDispatch();
	const tenants = singleRoomData.tenants;
	// console.log(singleRoomData._id, propertyInfo._id);
	const handlePayWithCash = (tenant) => {
		const { _id: tenantUserId, rentDueDate } = tenant;
		let { rent: amount } = tenant;
		if (!singleRoomData.isMultipleTenant) {
			amount = singleRoomData.rent;
		}
		dispatch(
			payWithCash({
				tenantUserId,
				amount,
				rentDueDate,
				roomId: singleRoomData._id,
				buildingId: propertyInfo._id,
			})
		);
	};
	const showConfirmDialog = (tenant) => {
		return Alert.alert(
			'Are your sure?',
			'Are you sure you want to proceed?',
			[
				{
					text: 'Yes',
					onPress: () => {
						handlePayWithCash(tenant);
					},
				},

				{
					text: 'No',
				},
			]
		);
	};
	return (
		<View style={{ marginTop: 10, marginHorizontal: 20 }}>
			<Text style={tenantInfoStyles.tenantInfoTitle}>
				Tenant Info Screen for {singleRoomData.roomNo}
			</Text>

			{tenants &&
				tenants.length &&
				tenants.map((tenant) => {
					return (
						<Card key={tenant._id}>
							<CardItem>
								<Body>
									<Text>Tenant Name: {tenant.name}</Text>
									<Text>
										Tenant Phone: {tenant.phoneNumber}
									</Text>
									<Text>Tenant Email: {tenant.email}</Text>
									<Text>
										Tenant JoinDate:{' '}
										{format(
											new Date(tenant.joinDate),
											'dd MMM yyyy'
										)}
									</Text>
									<Text>
										Rent :{' '}
										{singleRoomData.isMultipleTenant
											? tenant.rent
											: singleRoomData.rent}
									</Text>
									<Text>
										Security Paid: {tenant.securityAmount}
									</Text>
									<Text>
										Next Due date:{' '}
										<Text style={tenantInfoStyles.dueDate}>
											{format(
												new Date(tenant.rentDueDate),
												'dd MMM yyyy'
											)}
										</Text>
									</Text>
									<View
										style={{
											width: '100%',
											marginTop: 20,
											flex: 1,
											flexDirection: 'row',
											justifyContent: 'space-between',
										}}
									>
										<Button
											onPress={() => {
												showConfirmDialog(tenant);
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
												<Text style={{ color: '#fff' }}>
													Paid with cash
												</Text>
											)}
										</Button>
										<Button
											style={{
												backgroundColor: '#109FDA',
												padding: 10,
											}}
											rounded
											onPress={() =>
												navigate('UpdateTenantInfo', {
													singleRoomData,
													propertyInfo,
													tenantInfo: tenant,
													showAddTenantScreenFlag: false,
												})
											}
										>
											<Text style={{ color: '#fff' }}>
												Update Details
											</Text>
										</Button>
									</View>
								</Body>
							</CardItem>
						</Card>
					);
				})}
		</View>
	);
};

export default TenantInfoScreen;
