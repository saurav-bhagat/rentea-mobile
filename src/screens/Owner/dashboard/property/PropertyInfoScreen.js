import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Button, Header, Left, Right, Body, Title } from 'native-base';

import { propertiesScreenStyles } from './PropertiesScreenStyles';
import { useNavigation } from '@react-navigation/native';

const PropertyInfoScreen = () => {
	const navigation = useNavigation();

	return (
		<View>
			<ScrollView
				contentContainerStyle={
					propertiesScreenStyles.propertyInfoContainer
				}
			>
				<View style={propertiesScreenStyles.propertyTitleContainer}>
					<Text style={propertiesScreenStyles.propertyTitle}>
						Tirumala Residency
					</Text>
				</View>

				<View style={propertiesScreenStyles.maintainerContainer}>
					<Text>Maintainer Details..</Text>
					<View
						style={propertiesScreenStyles.maintainerInfoContainer}
					>
						<Text style={propertiesScreenStyles.maintainerName}>
							Name: Shivam Gupta
						</Text>
						<Text style={propertiesScreenStyles.maintainerName}>
							Phone: +91 9876543210
						</Text>
					</View>
				</View>

				<View style={propertiesScreenStyles.roomsContainer}>
					<Text>Rooms</Text>
					<View style={propertiesScreenStyles.roomsList}>
						<Text style={propertiesScreenStyles.singleRoomTitle}>
							1. Room 101
						</Text>
						<Text style={propertiesScreenStyles.singleRoomTitle}>
							2. Room 102
						</Text>
						<Text style={propertiesScreenStyles.singleRoomTitle}>
							3. Room 103
						</Text>
						<Text style={propertiesScreenStyles.singleRoomTitle}>
							4. Room 104
						</Text>
					</View>
				</View>
			</ScrollView>
		</View>
	);
};

export default PropertyInfoScreen;
