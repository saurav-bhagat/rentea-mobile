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
	return (
		<View style={propertyStyles.propertyListContainer}>
			{properties.ownerDashboardResult &&
				properties.ownerDashboardResult.buildings &&
				properties.ownerDashboardResult.buildings.map((item, index) => (
					<SingleProperty key={item.name} data={item} />
				))}
		</View>
	);
};

export default PropertyList;
