import { ScaledSheet } from 'react-native-size-matters';

export const ownerBankDetailsStyles = ScaledSheet.create({
	oudsContainer: {
		marginTop: '2%',
		width: '85%',
		marginLeft: 'auto',
		marginRight: 'auto',
	},
	oudsTextContainer: {},
	oudsShortText: {
		fontSize: '14@ms0.3',
		color: '#666666',
	},
	oudsAsteriskText: {
		fontSize: '12@ms0.3',
		color: '#888888',
	},
	oudsFormContainer: {},
	oudsPhoneInputBox: {
		paddingLeft: '20@ms',
		height: '48@ms',
		marginTop: '12%',
		borderWidth: 0.1,
		borderColor: '#ddd',
		borderRadius: 25,
		padding: '8@ms',
		backgroundColor: 'white',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,
		elevation: 8,
	},
	oudsContinueButton: {
		width: '45%',
		marginTop: '35@ms',
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
	},
	oudsContinueButton_text: {
		color: '#fff',
		fontSize: '15@ms0.3',
		fontWeight: 'bold',
		textTransform: 'uppercase',
		letterSpacing: 1,
	},
});
