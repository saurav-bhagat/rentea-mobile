import React from 'react';
import { View, Text } from 'react-native';

import { propertiesScreenStyles } from './PropertiesScreenStyles';

const PropertiesScreen = () => {
	return (
		<View style={propertiesScreenStyles.propertiesContainer}>
			<Text>List of properties will be displayed here!</Text>
		</View>
	);
};

export default PropertiesScreen;
