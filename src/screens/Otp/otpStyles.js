import { ScaledSheet } from 'react-native-size-matters';

export const otpStyles = ScaledSheet.create({
	otpScreenSection: {
		flex: 1,
		backgroundColor: '#fff',
	},
	otpContainer: {
		flex: 1,
		paddingTop: '10%',
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
		marginBottom: '10@ms',
	},
	otpTextBoxContainer: {
		flexDirection: 'row',
		marginVertical: '40@s',
	},
	otpInputSection: {
		alignItems: 'center',
		marginVertical: '15@ms',
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
		borderRadius: 5,
		paddingHorizontal: '60@ms',
		paddingVertical: '12@ms',
	},
	otpKeyPadContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		marginTop: '30@ms',
		position: 'absolute',
		bottom: 0,
	},
	numpadChild: {
		width: '33%',
		borderColor: '#aaa',
		borderBottomWidth: 0.6,
		borderLeftWidth: 0.6,
	},
	numpadTopBorder: {
		borderTopWidth: 0.6,
	},
	key: {
		fontSize: '20@ms0.3',
		fontFamily: 'interLight',
		textAlign: 'center',
	},
	sendAgainContainer: {
		marginTop: '10%',
	},
	sendAgainTxt: {
		textAlign: 'center',
		color: '#109ED9',
		fontSize: '15@ms0.3',
		fontFamily: 'interRegular',
	},
	editBtnTxt: {
		color: '#109ED9',
		fontFamily: 'interRegular',
		fontSize: 12,
	},
	backSpaceIcon: {
		fontSize: '23@ms0.3',
	},
});
