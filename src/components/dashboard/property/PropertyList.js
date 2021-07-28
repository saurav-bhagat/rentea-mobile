import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { propertyStyles } from './propertystyles';

const SingleProperty = () => {
	const navigation = useNavigation();
	return (
		<TouchableOpacity
			style={propertyStyles.singlePropertyButton}
			onPress={() => navigation.navigate('PropertyInfo')}
		>
			<Text style={propertyStyles.singlePropertyButton_text}>
				Tirumala Residency
			</Text>
		</TouchableOpacity>
	);
};

const PropertyList = ({ properties = ['one', 'two'] }) => {
	return (
		<View style={propertyStyles.propertyListContainer}>
			{properties.map((item, index) => (
				<SingleProperty key={index} />
			))}
		</View>
	);
};

export default PropertyList;
