import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

import AddRoomAccordion from '../../../components/owner/room/AddRoomAccordion';

const AddRoomSection = ({ roomCount }) => {
	const [showRoomDetails, setShowRoomDetails] = useState(false);

	return (
		<View>
			<Button
				transparent
				onPress={() => setShowRoomDetails(!showRoomDetails)}
				style={{ marginTop: 25 }}
			>
				<Text style={{ color: '#109FDA' }}>
					Add Room Details {'  '}
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
			</Button>
			{showRoomDetails && <AddRoomAccordion roomCount={roomCount} />}
		</View>
	);
};

const styles = StyleSheet.create({});

export default AddRoomSection;
