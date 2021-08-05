import React from 'react';
import {
	View,
	Text,
	ScrollView,
	FlatList,
	TouchableOpacity,
	SafeAreaView,
} from 'react-native';

import { propertiesScreenStyles } from './PropertiesScreenStyles';
import { useNavigation } from '@react-navigation/native';

const Item = ({ item }) => {
	const navigation = useNavigation();
	console.log('inside item compo', item);
	return (
		<TouchableOpacity
			style={propertiesScreenStyles.item}
			onPress={() => {
				navigation.navigate('RoomInfo', {
					singleRoomData: item,
				});
			}}
		>
			<Text style={propertiesScreenStyles.title}>{item.roomNo}</Text>
		</TouchableOpacity>
	);
};

const PropertyInfoScreen = ({ route }) => {
	const { propertyInfo } = route.params;
	const roomListData = propertyInfo.rooms;

	const renderItem = ({ item }) => <Item item={item} />;
	return (
		<SafeAreaView style={propertiesScreenStyles.propertyInfoContainer}>
			<View style={propertiesScreenStyles.propertyTitleContainer}>
				<Text style={propertiesScreenStyles.propertyTitle}>
					{propertyInfo.name}
				</Text>
			</View>

			<View style={propertiesScreenStyles.maintainerContainer}>
				<Text>Maintainer Details: </Text>
				<View style={propertiesScreenStyles.maintainerInfoContainer}>
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
						data={roomListData}
						renderItem={renderItem}
						keyExtractor={(item) => item.id}
						scrollEnabled={true}
					/>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default PropertyInfoScreen;
