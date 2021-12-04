import React from 'react';
import { View, Text } from 'react-native';

const AddRoomCard = () => {
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: '#109ED9',
				padding: 15,
				borderRadius: 10,
				marginVertical: 15,
			}}
		>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
				}}
			>
				<Text
					style={{
						color: '#ffffff',
						fontSize: 16,
					}}
				>
					Room 1
				</Text>

				<Text
					style={{
						color: '#ffffff',
						fontSize: 12,
					}}
				>
					Edit
				</Text>
			</View>
		</View>
	);
};

export default AddRoomCard;
