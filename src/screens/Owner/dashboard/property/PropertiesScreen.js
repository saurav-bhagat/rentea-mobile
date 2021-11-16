import React, { useEffect } from 'react';
import {
	View,
	Text,
	ScrollView,
	TouchableOpacity,
	ActivityIndicator,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

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
import { addExpoPushToken } from '../../../../redux/actions';

const PropertiesScreen = ({ route }) => {
	const dispatch = useDispatch();

	const { expoPushToken: token } = useSelector((state) => state.userDetail);
	const { expoPushToken } = useNotification();

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
		dispatch(getOwnerDashboard());
	}, []);

	useEffect(() => {
		if (token === '' && expoPushToken) {
			//as soon as user comes on property dashboard and there is no expo token in redux
			//the expo token saves in database
			dispatch(addExpoPushToken(expoPushToken));
		}
	}, [expoPushToken]);

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
