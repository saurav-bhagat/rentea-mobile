import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const BackIcon = ({ onPress }) => {
	return (
		<View style={styles.backIconContainer}>
			<Icon
				style={styles.backIcon}
				name="chevron-back-outline"
				onPress={onPress}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	backIconContainer: {
		width: 50,
		height: 50,
		backgroundColor: 'white',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 50,
		marginLeft: 10,
		marginRight: 20,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,
		elevation: 8,
		bottom: 5,
		// borderWidth: 2
	},
	backIcon: {
		fontSize: 35,
		color: '#666',
		fontWeight: '900',
	},
});

export default BackIcon;
