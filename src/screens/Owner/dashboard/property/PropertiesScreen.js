import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Button } from 'native-base';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/core';
import { useIsFocused } from '@react-navigation/native';
import { userLogout } from '../../../../redux/actions/authActions/authAction';
import PropertyList from '../../../../components/dashboard/property/PropertyList';
import { getOwnerDashboard } from '../../../../redux/actions/ownerActions/dashboardAction';
import { propertiesScreenStyles } from './PropertiesScreenStyles';
import AddBuildingFabButton from '../../../../components/owner/building/AddBuildingFabButton';
import CrossPlatformHeader from '../../../../components/common/CrossPlatformHeader';

const PropertiesScreen = () => {
	const dispatch = useDispatch();
	const navigation = useNavigation();
	const isFocused = useIsFocused();

	const { properties, error, loading } = useSelector(
		(state) => state.ownerDashbhoard
	);

	useEffect(() => {
		dispatch(getOwnerDashboard());
	}, [isFocused]);

	// console.log(
	// 	'Properties: ',
	// 	properties,
	// 	' And error is: ',
	// 	error,
	// 	' And loading is: ',
	// 	loading
	// );
	if (loading) {
		return <Text>Loading....</Text>;
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
			<View>
				<CrossPlatformHeader title="Properties" />
				<ScrollView
					contentContainerStyle={
						propertiesScreenStyles.propertiesContainer
					}
				>
					<PropertyList properties={properties} />
					<AddBuildingFabButton />

					<Button onPress={logout}>
						<Text>Logout</Text>
					</Button>
				</ScrollView>
			</View>
		);
	}
};

export default PropertiesScreen;
