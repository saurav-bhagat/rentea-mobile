import { StyleSheet } from 'react-native';

export const addBuildingFormstyles = StyleSheet.create({
	addBFcontainer: {
		flex: 1,
		width: '95%',
		marginLeft: 'auto',
		marginRight: 'auto',
		minHeight: '100%',
	},
	addBFormContainer: {
		flex: 1,
		padding: 10,
	},
	submitBuildingDetailsButton: {
		width: '100%',
		marginTop: 40,
		backgroundColor: '#109FDA',
		justifyContent: 'center',
		height: 58,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,
		elevation: 8,
		borderRadius: 35,
	},
	submitBuildingDetailsButton_text: {
		color: '#fff',
		fontSize: 22,
		fontWeight: 'bold',
		textTransform: 'uppercase',
		letterSpacing: 1,
		textAlign: 'center',
	},
});
