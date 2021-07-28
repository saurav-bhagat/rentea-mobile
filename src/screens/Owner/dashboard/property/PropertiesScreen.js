import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';

import PropertyList from '../../../../components/dashboard/property/PropertyList';
import { propertiesScreenStyles } from './PropertiesScreenStyles';

const PropertiesScreen = () => {
	useEffect(() => {
		// dispatch an action to get all the buildings information and add to state
		// pass that to PropertyList Component
	}, []);

	return (
		<ScrollView
			contentContainerStyle={propertiesScreenStyles.propertiesContainer}
		>
			<Text style={{ fontSize: 22 }}>Properties List</Text>

			<PropertyList />
		</ScrollView>
	);
};

export default PropertiesScreen;
