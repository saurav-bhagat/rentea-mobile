import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import * as Linking from 'expo-linking';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { propertyStyles } from './propertystyles';
import BuildingIcon from '../../../../assets/icons/buildingIcon.svg';
import { navigate } from '../../../navigation/rootNavigation';

const SingleProperty = ({ data, vaccantRooms, address }) => {
	return (
		<TouchableOpacity
			style={propertyStyles.singlePropertyButton}
			onPress={() => navigate('PropertyInfo', { propertyInfo: data })}
		>
			<View style={propertyStyles.singlePropertyRow1}>
				<View style={propertyStyles.singlePropertyCol1}>
					<BuildingIcon />
				</View>
				<View style={propertyStyles.singlePropertyCol2}>
					<Text style={propertyStyles.buildingNoTxt}>
						{data.name}
					</Text>
					<Text style={propertyStyles.buildingAdrsTxt}>
						{address}
					</Text>
				</View>
				<View style={propertyStyles.singlePropertyCol3}>
					<FontAwesome5
						onPress={() => {
							navigate('AddBuildingForm', {
								buildingInfo: data,
							});
						}}
						style={propertyStyles.editIcon}
						name={'edit'}
					/>
				</View>
			</View>
			<View style={propertyStyles.singlePropertyRow2}>
				<View style={propertyStyles.totalRoomPlusVacantRoomContainer}>
					<Text style={{ color: '#979797' }}>
						Total rooms
						<Text style={{ color: 'black' }}>
							{'   '}
							{data.rooms.length}
						</Text>
					</Text>
				</View>
				<View style={propertyStyles.totalRoomPlusVacantRoomContainer}>
					<Text style={propertyStyles.totRoomColor}>
						Vaccant rooms
						<Text style={propertyStyles.vacantRoomColor}>
							{'    '}
							{vaccantRooms}
						</Text>
					</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

const PropertyList = ({ properties }) => {
	const phoneNumber = '8789330638';
	return (
		<View style={propertyStyles.propertyListContainer}>
			<ScrollView
				contentContainerStyle={
					propertyStyles.scrollViewContentContainer
				}
			>
				{properties.ownerDashboardResult &&
				properties.ownerDashboardResult.buildings &&
				properties.ownerDashboardResult.buildings.length ? (
					properties.ownerDashboardResult.buildings.map(
						(item, index) => {
							const { rooms } = item;
							let vaccantRooms = 0;
							for (const room of rooms) {
								room.tenants.length === 0 && vaccantRooms++;
							}
							let addressForView = item.address.split(',');
							addressForView = `${addressForView[0]} , ${addressForView[1]}`;
							return (
								<SingleProperty
									key={index}
									data={item}
									vaccantRooms={vaccantRooms}
									address={addressForView}
								/>
							);
						}
					)
				) : (
					<View>
						<Text>
							Add your properties using the + button below
						</Text>
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
			</ScrollView>
		</View>
	);
};

export default PropertyList;
