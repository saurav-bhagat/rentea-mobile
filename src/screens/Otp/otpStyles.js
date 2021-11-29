import { ScaledSheet } from 'react-native-size-matters';

export const otpStyles = ScaledSheet.create({
	otpContainer: {
		flex: 1,
		paddingTop: '120@s',
		backgroundColor: '#fff',
	},
	countDownDigitTextStyle: {
		color: '#000000',
		fontSize: '25@ms0.3',
		fontFamily: 'interLight',
		fontWeight: 'normal',
	},
	verificationTextContainer: {
		marginTop: '10@s',
	},
	verificationTextrow: {
		textAlign: 'center',
		fontSize: '15@ms0.3',
		fontFamily: 'interLight',
	},
	otpTextBoxContainer: {
		flexDirection: 'row',
		marginTop: '40@s',
		marginBottom: '40@s',
		paddingLeft: '50@ms',
	},
	otpTextBox: {
		backgroundColor: '#E5E5E5',
		borderWidth: 1,
		borderStyle: 'solid',
		borderRadius: 5,
		borderColor: '#E5E5E5',
		padding: 8,
		marginRight: 10,
		width: '35@vs',
	},
	otpText: {
		textAlign: 'center',
		fontFamily: 'interLight',
	},
	continueBtnStyle: {
		backgroundColor: '#109ED9',
		borderRadius: 10,
		marginLeft: '15%',
		marginRight: '10%',
	},
	otpKeyPadContainer: {
		padding: 20,
		paddingTop: 40,
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	key: {
		fontSize: '20@ms0.3',
		fontFamily: 'interLight',
		textAlign: 'center',
	},
	sendAgainContainer: { marginTop: '35@s' },
	sendAgainTxt: {
		textAlign: 'center',
		color: '#109ED9',
		fontSize: '15@ms0.3',
		fontFamily: 'interRegular',
	},
});
