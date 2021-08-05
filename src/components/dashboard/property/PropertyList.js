import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { propertyStyles } from './propertystyles';

const SingleProperty = ({ data }) => {
	const navigation = useNavigation();
	return (
		<TouchableOpacity
			style={propertyStyles.singlePropertyButton}
			onPress={() =>
				navigation.navigate('PropertyInfo', { propertyInfo: data })
			}
		>
			<Text style={propertyStyles.singlePropertyButton_text}>
				{data.name}
			</Text>
		</TouchableOpacity>
	);
};

const PropertyList = ({ properties }) => {
	// TODO: change the spelling of owenerDashboardResult below once its resolved in backend
	return (
		<View style={propertyStyles.propertyListContainer}>
			{properties.ownerDashoardResult &&
				properties.ownerDashoardResult.buildings.map((item, index) => (
					<SingleProperty key={item.name} data={item} />
				))}
		</View>
	);
};

export default PropertyList;
