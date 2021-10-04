import { ScaledSheet } from 'react-native-size-matters';

export const addBuildingFormstyles = ScaledSheet.create({
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
		width: '45%',
		marginTop: '37@ms',
		backgroundColor: '#109FDA',
		justifyContent: 'center',
		height: '50@ms',
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
		fontSize: '20@ms0.3',
		fontWeight: 'bold',
		textTransform: 'uppercase',
		letterSpacing: 1,
		textAlign: 'center',
	},
	skipBuildingDetailButton: {
		width: '45%',
		marginTop: '37@ms',
		backgroundColor: '#109FDA',
		justifyContent: 'center',
		height: '50@ms',
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
	skipBuildingDetailButton_text: {
		color: '#fff',
		fontSize: '20@ms0.3',
		fontWeight: 'bold',
		textTransform: 'uppercase',
		letterSpacing: 1,
		textAlign: 'center',
	},
});
