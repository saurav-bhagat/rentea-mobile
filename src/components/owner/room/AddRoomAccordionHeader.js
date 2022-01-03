import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { roomAccordionStyles } from './addRoomAccordionStyles';

const AddRoomAccordionHeader = ({ item, expanded }) => {
	return (
		<View style={roomAccordionStyles.accordianHeaderContainer}>
			<Text style={roomAccordionStyles.accordianHeaderTitle}>
				{' '}
				{item.title}
			</Text>
			{expanded ? (
				<Icon
					style={{ fontSize: 35, color: '#666666' }}
					name="chevron-up-circle-outline"
				/>
			) : (
				<Icon
					style={{ fontSize: 35, color: '#666666' }}
					name="chevron-down-circle-outline"
				/>
			)}
		</View>
	);
};

export default AddRoomAccordionHeader;
