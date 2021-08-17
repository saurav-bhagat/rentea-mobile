import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Button } from 'native-base';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/core';

import { userLogout } from '../../../../redux/actions/authActions/authAction';
import PropertyList from '../../../../components/dashboard/property/PropertyList';
import { getOwnerDashboard } from '../../../../redux/actions/ownerActions/dashboardAction';
import { propertiesScreenStyles } from './PropertiesScreenStyles';

const PropertiesScreen = () => {
	const dispatch = useDispatch();
	const navigation = useNavigation();

	const { properties, error, loading } = useSelector(
		(state) => state.ownerDashbhoard
	);

	useEffect(() => {
		dispatch(getOwnerDashboard());
	}, []);

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
			<ScrollView
				contentContainerStyle={
					propertiesScreenStyles.propertiesContainer
				}
			>
				<Text style={{ fontSize: 22 }}>Properties List</Text>
				<PropertyList properties={properties} />
				<Button onPress={logout}>
					<Text>Logout</Text>
				</Button>
			</ScrollView>
		);
	}
};

export default PropertiesScreen;
