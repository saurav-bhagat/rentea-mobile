import { ScaledSheet } from 'react-native-size-matters';

export const otpStyles = ScaledSheet.create({
	otpContainer: {
		flex: 1,
		marginTop: '25%',
		alignItems: 'center',
		width: '90%',
		marginLeft: 'auto',
		marginRight: 'auto',
	},
	otpEnterText: {
		fontSize: '28@ms0.3',
		color: '#666666',
	},
	underlineStyleBase: {
		width: '26@s',
		height: '45@vs',
		borderWidth: 0,
		borderBottomWidth: 2,
		borderColor: '#666666',
		color: '#109FDA',
		fontSize: '22@ms0.3',
	},

	underlineStyleHighLighted: {
		borderColor: '#000',
	},
	loginContinueButton: {
		width: '100%',
		borderWidth: 1,
		borderColor: '#ddd',
		marginTop: '37@s',
		backgroundColor: '#109FDA',
		justifyContent: 'center',
		height: '47@s',
	},
	loginContinueButton_text: {
		color: '#fff',
		fontSize: '20@ms0.3',
		fontWeight: 'bold',
		textTransform: 'uppercase',
		letterSpacing: 1,
	},
});
