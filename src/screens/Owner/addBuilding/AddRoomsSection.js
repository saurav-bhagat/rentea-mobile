import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Button } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

import AddRoomAccordion from '../../../components/owner/room/AddRoomAccordion';

const AddRoomSection = ({ roomCount }) => {
	const [showRoomDetails, setShowRoomDetails] = useState(false);

	return (
		<View>
			<TouchableOpacity
				transparent
				onPress={() => setShowRoomDetails(!showRoomDetails)}
				style={{ marginTop: 35 }}
			>
				<Text style={{ color: '#109FDA', fontSize: 20 }}>
					Click here to Add Room Details {'  '}
					{showRoomDetails ? (
						<Icon
							style={{ fontSize: 15, color: '#109FDA' }}
							name="chevron-up-outline"
						/>
					) : (
						<Icon
							style={{ fontSize: 15, color: '#109FDA' }}
							name="chevron-down-outline"
						/>
					)}
				</Text>
			</TouchableOpacity>
			{roomCount && roomCount > 1
				? showRoomDetails && <AddRoomAccordion roomCount={roomCount} />
				: showRoomDetails && <Text>Enter number of rooms</Text>}
		</View>
	);
};

export default AddRoomSection;
