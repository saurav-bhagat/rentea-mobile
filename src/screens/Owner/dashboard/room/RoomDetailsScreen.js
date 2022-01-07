import React from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-elements';

import { navigate } from '../../../../navigation/rootNavigation';
import { roomDetailStyles } from '../room/RoomDetailsStyle';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import RoomIcon from '../../../../../assets/icons/roomIcon.svg';

export default function RoomDetailsScreen({ singleRoomData, propertyInfo }) {
	return (
		<View style={roomDetailStyles.roomInfoContainer}>
			<Card>
				<View style={roomDetailStyles.row1}>
					<View style={roomDetailStyles.col1}>
						<RoomIcon />
					</View>
					<View style={roomDetailStyles.col2}>
						<Text style={roomDetailStyles.roomNoTxt}>
							Room No {singleRoomData.roomNo}
						</Text>

						<View style={roomDetailStyles.rowInCol2}>
							<Text style={roomDetailStyles.col1}>
								Rent: {singleRoomData.rent}
							</Text>
							<Text style={roomDetailStyles.col1}>
								Size: {singleRoomData.roomSize + ' Sq.ft.'}
							</Text>
						</View>
						<View style={roomDetailStyles.rowInCol2}>
							<Text style={roomDetailStyles.col1}>
								Floor: {singleRoomData.floor}
							</Text>
							<Text style={roomDetailStyles.col1}>
								BHK: {singleRoomData.type.split('')[0]}
							</Text>
						</View>
					</View>

					<View style={roomDetailStyles.col3}>
						<FontAwesome5
							onPress={() =>
								navigate('UpdateRoomDetails', {
									singleRoomData,
									propertyInfo,
								})
							}
							style={roomDetailStyles.iconStyle}
							name={'edit'}
						/>
					</View>
				</View>
				<View style={roomDetailStyles.row1}>
					<Text style={roomDetailStyles.col1}>
						MultipleTenant :{' '}
						{singleRoomData.isMultipleTenant ? 'Yes' : 'No'}
					</Text>
				</View>
			</Card>
		</View>
	);
}
