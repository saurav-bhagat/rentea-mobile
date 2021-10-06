import React from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import { Card, CardItem, Body, Button } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { navigate } from '../../../../navigation/rootNavigation';
import { roomDetailStyles } from '../room/RoomDetailsStyle';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function RoomDetailsScreen({ singleRoomData, propertyInfo }) {
	const tenant = singleRoomData.tenants[0];
	return (
		<ScrollView contentContainerStyle={roomDetailStyles.roomInfoContainer}>
			<Text style={roomDetailStyles.roomInfoTitle}>
				Room Details for {singleRoomData.roomNo}
			</Text>

			<Card>
				<CardItem>
					<Body>
						<FontAwesome5
							onPress={() =>
								navigate('UpdateRoomDetails', {
									singleRoomData,
									propertyInfo,
								})
							}
							style={{
								position: 'absolute',
								right: 0,
								fontSize: 25,
								color: '#109FDA',
							}}
							name={'edit'}
						/>
						<Text>Room No.: {singleRoomData.roomNo}</Text>
						<Text>Rent Amount: {singleRoomData.rent}</Text>
						<Text>Room Size: {singleRoomData.roomSize}</Text>
						<Text>Floor: {singleRoomData.floor}</Text>
						<Text>BHK: {singleRoomData.type.split('')[0]}</Text>
					</Body>
				</CardItem>
			</Card>
		</ScrollView>
	);
}
