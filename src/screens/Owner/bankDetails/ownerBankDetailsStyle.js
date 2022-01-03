import { ScaledSheet } from 'react-native-size-matters';

export const ownerBankDetailsStyles = ScaledSheet.create({
	oudsContainer: {
		marginTop: '2%',
		width: '85%',
		marginLeft: 'auto',
		marginRight: 'auto',
	},
	oudsTextContainer: {
		marginBottom: 40,
	},
	oudsShortText: {
		fontSize: '45@ms0.3',
		color: '#666666',
	},
	oudsdetailsText: {
		fontSize: '15@ms0.3',
		color: '#888888',
	},
	oudsFormContainer: {},
	bankDetailsInput: {
		paddingLeft: '20@ms',
		height: '47@ms',
		marginTop: '6%',
		borderWidth: 0.5,
		borderColor: '#109ED9',
		borderRadius: 12,
		backgroundColor: 'white',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,
		elevation: 1,
	},
	oudsContinueButton: {
		marginTop: '55@ms',
		justifyContent: 'center',
	},
	oudsContinueButton_text: {
		color: '#109ED9',
		fontSize: '18@ms0.3',
		fontWeight: '500',
		letterSpacing: 1,
	},
});
