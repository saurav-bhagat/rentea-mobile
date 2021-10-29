import React, { useEffect } from 'react';
import {
	View,
	Text,
	ScrollView,
	TouchableOpacity,
	ActivityIndicator,
} from 'react-native';
import { Button } from 'native-base';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/core';
import { useIsFocused } from '@react-navigation/native';

import {
	userLogout,
	refreshToken,
} from '../../../../redux/actions/authActions/authAction';
import PropertyList from '../../../../components/dashboard/property/PropertyList';
import { getOwnerDashboard } from '../../../../redux/actions/ownerActions/dashboardAction';
import { propertiesScreenStyles } from './PropertiesScreenStyles';
import AddBuildingFabButton from '../../../../components/owner/building/AddBuildingFabButton';
import CrossPlatformHeader from '../../../../components/common/CrossPlatformHeader';
import SnackBar from '../../../../components/common/SnackBar';
import useSnack from '../../../../components/common/useSnack';
import useNotification from '../../../../components/common/useNotification';

const PropertiesScreen = ({ route }) => {
	const dispatch = useDispatch();
	const navigation = useNavigation();
	const isFocused = useIsFocused();
	useNotification();

	const buildingAdded = 'buildings added successfully';
	const tenantAdded = 'tenant added successfully';

	const {
		visible,
		text,
		setVisible,
		setText,
		onToggleSnackBar,
		onDismissSnackBar,
	} = useSnack();

	const { properties, error, loading } = useSelector(
		(state) => state.ownerDashbhoard
	);

	const { msg } = useSelector((state) => state.buildingDetails);
	const { tenantMsg } = useSelector((state) => state.addTenantResponse);
	let payWithCashResponse;
	if (route && route.params) {
		payWithCashResponse = route.params.payWithCashResponse;
	}

	useEffect(() => {
		if (msg === buildingAdded) {
			setVisible(true);
			setText('Building added successfully.');
		} else if (tenantMsg === tenantAdded) {
			setVisible(true);
			setText('Tenant added successfully.');
		}
	}, [msg, tenantMsg]);

	useEffect(() => {
		if (payWithCashResponse) {
			setVisible(true);
			payWithCashResponse = null;
			setText('Payment successfully updated');
		} else if (payWithCashResponse === false) {
			setVisible(true);
			payWithCashResponse = null;
			setText('Error while payment updation');
		}
	}, [payWithCashResponse]);

	useEffect(() => {
		dispatch(getOwnerDashboard());
	}, [isFocused]);

	if (loading) {
		return (
			<View style={{ flex: 1 }}>
				<CrossPlatformHeader title="Properties" />
				{/* <Button
					onPress={() => {
						dispatch(refreshToken());
					}}
				>
					<Text>Refresh</Text>
				</Button>
				<Button
					onPress={() => {
						dispatch(getOwnerDashboard());
					}}
				>
					<Text>Reload</Text>
				</Button> */}
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
			<ScrollView
				contentContainerStyle={
					propertiesScreenStyles.propertiesContainer
				}
			>
				<CrossPlatformHeader title="Properties" />
				<Text style={{ fontSize: 18 }}>
					Error while fetching properties, Login Again
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
			</ScrollView>
		);
	} else {
		const logout = () => {
			dispatch(userLogout());
		};
		return (
			<View style={{ flex: 1 }}>
				<CrossPlatformHeader title="Properties" />
				<ScrollView
					contentContainerStyle={
						propertiesScreenStyles.propertiesContainer
					}
				>
					<PropertyList properties={properties} />
				</ScrollView>
				<AddBuildingFabButton />
				<SnackBar
					visible={visible}
					text={text}
					onDismissSnackBar={onDismissSnackBar}
					onToggleSnackBar={onToggleSnackBar}
				/>
			</View>
		);
	}
};

export default PropertiesScreen;
