import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import * as Linking from 'expo-linking';

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
	const phoneNumber = '8789330638';
	return (
		<View style={propertyStyles.propertyListContainer}>
			{properties.ownerDashboardResult &&
			properties.ownerDashboardResult.buildings &&
			properties.ownerDashboardResult.buildings.length ? (
				properties.ownerDashboardResult.buildings.map((item, index) => (
					<SingleProperty key={item.name} data={item} />
				))
			) : (
				<View>
					<Text>Add your properties using the + button below</Text>
					<Text style={{ textAlign: 'center' }}> or</Text>
					<Text>
						Contact
						<Text
							onPress={() => {
								Linking.openURL(`tel:${phoneNumber}`);
							}}
							style={{ color: '#109FDA' }}
						>
							{' '}
							customer support{'  '}
						</Text>
						to get your properties listed
					</Text>
				</View>
			)}
		</View>
	);
};

export default PropertyList;
