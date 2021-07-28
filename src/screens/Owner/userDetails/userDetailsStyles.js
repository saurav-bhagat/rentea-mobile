import { ScaledSheet } from 'react-native-size-matters';

export const userDetailsStyles = ScaledSheet.create({
	oudsContainer: {
		marginTop: '20%',
		width: '85%',
		marginLeft: 'auto',
		marginRight: 'auto',
	},
	oudsTextContainer: {},
	oudsWelcomeText: {
		fontSize: '50@ms0.3',
		letterSpacing: 1.3,
		color: '#666666',
		marginBottom: '13@s',
	},
	oudsShortText: {
		fontSize: '14@ms0.3',
		color: '#666666',
	},
	oudsFormContainer: {},
	oudsPhoneInputBox: {
		paddingLeft: '20@ms',
		height: '52@ms',
		marginTop: '12%',
		borderWidth: 0.1,
		borderColor: '#ddd',
		borderRadius: 25,
		padding: '10@ms',
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
		width: '100%',
		marginTop: '37@ms',
		backgroundColor: '#109FDA',
		justifyContent: 'center',
		height: '54@ms',
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
		fontSize: '20@ms0.3',
		fontWeight: 'bold',
		textTransform: 'uppercase',
		letterSpacing: 1,
	},
});
