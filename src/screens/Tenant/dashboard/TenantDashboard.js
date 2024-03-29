import React, { useEffect } from 'react';
import {
	View,
	Text,
	ScrollView,
	TouchableOpacity,
	ActivityIndicator,
} from 'react-native';
import { Card, CardItem, Body, Button } from 'native-base';
import { useSelector, useDispatch } from 'react-redux';
import { format } from 'date-fns';
import { useNavigation, useIsFocused } from '@react-navigation/native';

import CrossPlatformHeader from '../../../components/common/CrossPlatformHeader';
import { userLogout } from '../../../redux/actions';

import { tenantDashStyles } from './TenantDashboardStyles';
import { getTenantDashboard } from '../../../redux/actions/tenantAction/dashboardAction';
import SnackBar from '../../../components/common/SnackBar';
import useSnack from '../../../components/common/useSnack';

const TenantDashboard = ({ route }) => {
	const { tenantDetails, error, loading } = useSelector(
		(state) => state.tenantDashboard
	);
	const dispatch = useDispatch();
	const navigation = useNavigation();
	const isFocused = useIsFocused();
	const {
		visible,
		text,
		setVisible,
		setText,
		onToggleSnackBar,
		onDismissSnackBar,
	} = useSnack();

	let userDetails;
	if (tenantDetails) userDetails = tenantDetails;
	let paytmResponse;
	if (route && route.params) {
		paytmResponse = route.params.paytmResponse;
	}

	useEffect(() => {
		dispatch(getTenantDashboard());
	}, [isFocused]);

	useEffect(() => {
		if (paytmResponse) {
			setVisible(true);
			paytmResponse = false;
			setText('Payment successfull, receipt Generated');
		} else if (paytmResponse === false) {
			setVisible(true);
			paytmResponse = null;
			setText('Error while paying with paytm ');
		}
	}, [paytmResponse]);

	const logout = async () => {
		dispatch(userLogout());
	};

	if (loading) {
		return (
			<View style={{ flex: 1 }}>
				<CrossPlatformHeader title="Tenant Home" />
				<View
					style={{
						flex: 1,
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<ActivityIndicator color="#109FDA" size="large" />
				</View>
			</View>
		);
	}
	if (error) {
		return (
			<View>
				<CrossPlatformHeader title="Tenant Home" />
				<Text style={{ fontSize: 18 }}>
					Error while fetching tenant dashboard, Login Again
				</Text>
				<Text>
					After clicking logout, shake your phone or press ctrl+M and
					reload app.
				</Text>
				<TouchableOpacity
					onPress={() => {
						dispatch(userLogout());
					}}
				>
					<Text style={{ fontSize: 28, marginTop: 20 }}>Logout</Text>
				</TouchableOpacity>
			</View>
		);
	} else {
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
								<Text>
									Owner Name: {userDetails.ownerName}{' '}
								</Text>
								<Text>
									Owner Email: {userDetails.ownerEmail}{' '}
								</Text>
								<Text>
									Owner Phone: {userDetails.ownerPhoneNumber}{' '}
								</Text>
							</Body>
						</CardItem>
					</Card>

					<Card>
						<CardItem>
							<Body>
								<Text
									style={{ fontSize: 17, fontWeight: 'bold' }}
								>
									Your Details:{' '}
								</Text>
								<Text>Your Name: {userDetails.tenantName}</Text>
								<Text>
									Your Email: {userDetails.tenantEmail}
								</Text>
								<Text>
									Your Phone: {userDetails.tenantPhoneNumber}
								</Text>
								<Text>
									Security/Advance Paid:{' '}
									{userDetails.security}
								</Text>
							</Body>
						</CardItem>
					</Card>

					<Card>
						<CardItem>
							<Body>
								<Text>Rent : {userDetails.rent} </Text>
								<Text>
									Rent Due Date:{' '}
									{userDetails.rentDueDate &&
										format(
											new Date(userDetails.rentDueDate),
											'dd MMM yyyy'
										)}
								</Text>
								<TouchableOpacity
									style={tenantDashStyles.payNowButton}
								>
									<Text
										style={
											tenantDashStyles.payNowButton_text
										}
										onPress={() =>
											navigation.navigate('TenantPay')
										}
									>
										Pay Now
									</Text>
								</TouchableOpacity>
							</Body>
						</CardItem>
					</Card>
					<SnackBar
						visible={visible}
						text={text}
						onDismissSnackBar={onDismissSnackBar}
						onToggleSnackBar={onToggleSnackBar}
						bottom={5}
					/>
				</ScrollView>
			</View>
		);
	}
};

export default TenantDashboard;
