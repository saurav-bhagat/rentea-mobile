import React, { useState, useEffect } from 'react';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { Text, View, ActivityIndicator } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome5';
import { dashboardStyles } from './DashboardStyles';
import { ScrollView } from 'react-native-gesture-handler';
import PropertiesScreen from '../dashboard/property/PropertiesScreen';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { getOwnerDashboard } from '../../../redux/actions/ownerActions/dashboardAction';
import Notification from './Notification';
const DashboardHome = ({ route }) => {
	const dispatch = useDispatch();
	const [showDashboard, setShowDashboard] = useState(true);
	const [summaryDetails, setSummaryDetails] = useState({
		propertiesNo: 0,
		rooms: 0,
		vacantRooms: 0,
		totalTenants: 0,
	});
	const navigation = useNavigation();

	const { properties, error, loading } = useSelector(
		(state) => state.ownerDashbhoard
	);
	let buildingUpdateFlag;
	if (route && route.params) {
		buildingUpdateFlag = route.params.buildingUpdateFlag;
	}
	const getSummaryViewDetails = () => {
		if (Object.keys(properties).length !== 0) {
			const buildings = properties.ownerDashboardResult.buildings;
			if (Array.isArray(buildings) && buildings.length) {
				let numberOfRooms = 0;
				let numberOfTenants = 0;
				let numberOfVacantRooms = 0;
				for (const building of buildings) {
					for (const room of building.rooms) {
						numberOfTenants += room.tenants.length;
						if (room.tenants.length === 0) {
							numberOfVacantRooms += 1;
						}
					}
					numberOfRooms += building.rooms.length;
				}
				setSummaryDetails({
					propertiesNo:
						properties.ownerDashboardResult.buildings.length,
					rooms: numberOfRooms,
					totalTenants: numberOfTenants,
					vacantRooms: numberOfVacantRooms,
				});
			}
		}
	};
	// This useeffect order matter for building update
	useEffect(() => {
		setShowDashboard(false);
	}, [buildingUpdateFlag]);
	useEffect(() => {
		dispatch(getOwnerDashboard());
		setShowDashboard(true);
	}, []);

	useEffect(() => {
		if (!error) {
			getSummaryViewDetails();
		}
	}, [properties]);

	return (
		<View style={dashboardStyles.dashboardHomeContainer}>
			<View style={dashboardStyles.buttonView}>
				<Button
					type="clear"
					containerStyle={dashboardStyles.dashboardButton}
					title="Dashboard"
					buttonStyle={[
						dashboardStyles.dashboardButtonStyle,
						{ borderBottomWidth: showDashboard ? 2 : 0 },
					]}
					titleStyle={dashboardStyles.OpenSans_600SemiBold}
					onPress={() => setShowDashboard(true)}
				/>
				<Button
					type="clear"
					containerStyle={dashboardStyles.propertiesButton}
					title="My Properties"
					buttonStyle={[
						dashboardStyles.dashboardButtonStyle,
						{ borderBottomWidth: showDashboard ? 0 : 2 },
					]}
					titleStyle={dashboardStyles.OpenSans_600SemiBold}
					onPress={() => setShowDashboard(false)}
				/>
			</View>
			{showDashboard ? (
				<View style={dashboardStyles.summaryContainer}>
					<Text style={dashboardStyles.summaryText}>Summary</Text>
					<Text style={dashboardStyles.summaryCaptionText}>
						Key statistics of your account
					</Text>
					<View style={dashboardStyles.summaryView}>
						<View style={dashboardStyles.boxView}>
							<Icons
								name="home-city"
								style={dashboardStyles.summaryIcons}
							/>
							<View style={dashboardStyles.boxTextView}>
								<Text style={dashboardStyles.boxQuantityText}>
									{loading ? (
										<ActivityIndicator
											color="#109FDA"
											size="small"
										/>
									) : (
										summaryDetails.propertiesNo
									)}
								</Text>
								<Text
									style={
										dashboardStyles.boxQuantityCaptionText
									}
								>
									Properties
								</Text>
							</View>
						</View>
						<View style={dashboardStyles.boxView}>
							<FontAwesomeIcons
								name="door-open"
								style={dashboardStyles.summaryIcons}
							/>
							<View style={dashboardStyles.boxTextView}>
								<Text style={dashboardStyles.boxQuantityText}>
									{loading ? (
										<ActivityIndicator
											color="#109FDA"
											size="small"
										/>
									) : (
										summaryDetails.rooms
									)}
								</Text>
								<Text
									style={
										dashboardStyles.boxQuantityCaptionText
									}
								>
									Rooms
								</Text>
							</View>
						</View>
						<View style={dashboardStyles.boxView}>
							<FontAwesomeIcons
								name="door-open"
								style={[
									dashboardStyles.summaryIcons,
									{ color: '#F78585' },
								]}
							/>
							<View style={dashboardStyles.boxTextView}>
								<Text style={dashboardStyles.boxQuantityText}>
									{loading ? (
										<ActivityIndicator
											color="#109FDA"
											size="small"
										/>
									) : (
										summaryDetails.vacantRooms
									)}
								</Text>
								<Text
									style={
										dashboardStyles.boxQuantityCaptionText
									}
								>
									Vacant Rooms
								</Text>
							</View>
						</View>
						<View style={dashboardStyles.boxView}>
							<FontAwesomeIcons
								name="users"
								style={[
									dashboardStyles.summaryIcons,
									{ color: '#65C466' },
								]}
							/>
							<View style={dashboardStyles.boxTextView}>
								<Text style={dashboardStyles.boxQuantityText}>
									{loading ? (
										<ActivityIndicator
											color="#109FDA"
											size="small"
										/>
									) : (
										summaryDetails.totalTenants
									)}
								</Text>
								<Text
									style={
										dashboardStyles.boxQuantityCaptionText
									}
								>
									Total Tenants
								</Text>
							</View>
						</View>
					</View>
					<View style={dashboardStyles.buttonContainerView}>
						<Button
							type="solid"
							title="Add Property"
							containerStyle={dashboardStyles.addPropertyButton}
							titleStyle={dashboardStyles.OpenSans_600SemiBold}
							onPress={() =>
								navigation.navigate('AddBuildingForm')
							}
						/>
						<Button
							type="solid"
							title="Add Tenants"
							containerStyle={dashboardStyles.addPropertyButton}
							titleStyle={dashboardStyles.OpenSans_600SemiBold}
							onPress={() => setShowDashboard(false)}
						/>
					</View>
					<View style={dashboardStyles.notificationContainer}>
						{false && <Notification />}
					</View>
				</View>
			) : (
				<View style={{ flex: 9 }}>
					<PropertiesScreen />
				</View>
			)}
		</View>
	);
};

export default DashboardHome;
