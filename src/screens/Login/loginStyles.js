import { ScaledSheet } from 'react-native-size-matters';

export const loginStyles = ScaledSheet.create({
	loginContainer: {
		flex: 1,
		marginHorizontal: '40@mvs0.3',
		marginTop: '100@s',
	},
	loginContainer_row1_txt: {
		fontSize: '30@ms0.3',
		fontFamily: 'interLight',
	},
	loginContainer_row2_txt: {
		fontSize: '26@ms0.3',
		fontFamily: 'interLight',
	},
	loginContainer_row3_txt: {
		fontSize: '25@ms0.3',
		fontFamily: 'interLight',
	},
	loginBtnText: {
		backgroundColor: '#109ED9',
		borderRadius: 10,
		paddingTop: 10,
		paddingBottom: 10,
		fontFamily: 'interLight',
	},
	loginBtnContainer: {
		borderRadius: 10,
		elevation: 40,
	},
	privacyAndAgreementsText: {
		color: '#109ED9',
		textAlign: 'center',
		textDecorationLine: 'underline',
		fontFamily: 'interLight',
	},
	countryCodePlusPhoneNumberContainer: {
		borderWidth: 1,
		borderStyle: 'solid',
		borderRadius: 10,
		marginTop: '30@ms0.3',
	},
	countryCodeContainer: {
		paddingLeft: 20,
		paddingTop: 15,
		paddingBottom: 5,
	},
	countryCodeText: {
		fontFamily: 'interLight',
	},
	phoneNumberContainer: {
		marginTop: '10@mvs0.3',
		borderWidth: 1,
		borderStyle: 'solid',
		borderBottomWidth: 0,
		borderLeftWidth: 0,
		borderRightWidth: 0,
		marginBottom: -20,
	},
});
