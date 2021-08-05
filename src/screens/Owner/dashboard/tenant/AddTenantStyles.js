import { ScaledSheet } from 'react-native-size-matters';

export const addTenantStyles = ScaledSheet.create({
	addTenantContainer: {
		flex: 1,
		width: '90%',
		marginLeft: 'auto',
		marginRight: 'auto',
		minHeight: '100%',
		paddingTop: '30@s',
	},
	submitButton: {
		width: '100%',
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
	submitButton_text: {
		color: '#fff',
		fontSize: '20@ms0.3',
		fontWeight: 'bold',
		textTransform: 'uppercase',
		letterSpacing: 1,
		textAlign: 'center',
	},
});
