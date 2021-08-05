import React from 'react';
import {
	View,
	Text,
	ScrollView,
	FlatList,
	TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Button, Header, Left, Right, Body, Title } from 'native-base';

import { propertiesScreenStyles } from './PropertiesScreenStyles';
import { useNavigation } from '@react-navigation/native';

const Item = ({ title, id }) => {
	const navigation = useNavigation();
	return (
		<TouchableOpacity
			style={propertiesScreenStyles.item}
			onPress={() => {
				navigation.navigate('RoomInfo', {
					id,
					title,
				});
			}}
		>
			<Text style={propertiesScreenStyles.title}>{title}</Text>
		</TouchableOpacity>
	);
};

const PropertyInfoScreen = () => {
	const DATA = [
		{
			id: '101',
			title: 'Room 1',
		},
		{
			id: '102',
			title: 'Room 2',
		},
		{
			id: '103',
			title: 'Room 3',
		},
	];

	const renderItem = ({ item }) => <Item title={item.title} id={item.id} />;
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
					<Text>Maintainer Details: </Text>
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
					<Text style={{ marginBottom: 20 }}>Rooms: </Text>
					<View style={propertiesScreenStyles.roomsList}>
						<FlatList
							data={DATA}
							renderItem={renderItem}
							keyExtractor={(item) => item.id}
						/>
					</View>
				</View>
			</ScrollView>
		</View>
	);
};

export default PropertyInfoScreen;
