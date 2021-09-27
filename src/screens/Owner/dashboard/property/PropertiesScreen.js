import React, { useEffect, useState } from 'react';
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
import { Snackbar } from 'react-native-paper';
import { addBuildingDone } from '../../../../redux/actions';
import { addTenantComplete } from '../../../../redux/actions/ownerActions/addTenantAction';

const PropertiesScreen = () => {
	const dispatch = useDispatch();
	const navigation = useNavigation();
	const isFocused = useIsFocused();

	const buildingAdded = 'buildings added successfully';
	const tenantAdded = 'added tenant successfully';

	const [visible, setVisible] = useState(false);
	const [snackText, setSnackText] = useState('');

	const onToggleSnackBar = () => setVisible(!visible);

	const onDismissSnackBar = () => {
		setVisible(false);
		if (msg === buildingAdded) {
			dispatch(addBuildingDone());
		} else if (tenantMsg === tenantAdded) {
			dispatch(addTenantComplete());
		}
	};

	const { properties, error, loading } = useSelector(
		(state) => state.ownerDashbhoard
	);

	const { msg } = useSelector((state) => state.buildingDetails);
	const { tenantMsg } = useSelector((state) => state.addTenantResponse);

	const updateSnack = () => {
		if (msg === buildingAdded) {
			setSnackText(msg);
			setVisible(true);
		} else if (tenantMsg === tenantAdded) {
			setSnackText(tenantMsg);
			setVisible(true);
		}
	};

	useEffect(() => {
		updateSnack();
	}, [msg, tenantMsg]);

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
				<Snackbar
					visible={visible}
					onDismiss={onDismissSnackBar}
					action={{
						label: 'OK!',
						onPress: () => {
							onToggleSnackBar();
						},
					}}
					duration={3000}
					style={{ backgroundColor: '#000', bottom: 50 }}
				>
					{snackText}
				</Snackbar>
			</View>
		);
	}
};

export default PropertiesScreen;
