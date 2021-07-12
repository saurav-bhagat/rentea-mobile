import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const BuildingAccordionHeader = ({ item, expanded }) => {
	return (
		<View style={styles.accordianHeaderContainer}>
			<Text style={styles.accordianHeaderTitle}> {item.title}</Text>
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

const styles = StyleSheet.create({
	accordianHeaderContainer: {
		flexDirection: 'row',
		padding: 12,
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '#fff',
		borderRadius: 50,
		marginBottom: 30,
		marginTop: 10,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,
		elevation: 8,
		width: '95%',
		marginRight: 'auto',
		marginLeft: 'auto',
	},
	accordianHeaderTitle: {
		color: '#666666',
		fontSize: 25,
		fontWeight: '600',
	},
});

export default BuildingAccordionHeader;
