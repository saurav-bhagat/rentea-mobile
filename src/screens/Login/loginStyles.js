import { ScaledSheet } from 'react-native-size-matters';

export const loginStyles = ScaledSheet.create({
	loginContainer: {
		flex: 1,
		backgroundColor: '#fff',
	},
	login_logo: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	header: {
		// shadowColor: '#000000',
		borderColor: '#f2f2f2',
		borderTopWidth: 1,
		borderLeftWidth: 1,
		borderRightWidth: 1,
		paddingTop: '20@ms',
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
	},
	panelHeader: {
		alignItems: 'center',
	},
	panelHandle: {
		width: '35@s',
		height: '5@vs',
		borderRadius: 4,
		backgroundColor: '#00000040',
		marginBottom: '10@ms',
	},
	sheetContainer: {
		flex: 1,
		// shadowColor: '#000000',
		// shadowOffset: { width: 0, height: 0 },
		// shadowRadius: 5,
		// shadowOpacity: 0.5,
	},
	loginComponentContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: '12@s',
		paddingBottom: '12@s',
		// shadowColor: '#000',
		// shadowOffset: { width: 0, height: 0 },
		// shadowRadius: 5,
		// shadowOpacity: 0.4,
	},
	loginText: {
		fontSize: '27@s',
		color: '#666666',
		marginBottom: '40@ms',
	},
	phoneInputContainer: {
		width: '80%',
	},
	phoneInputBox: {
		paddingLeft: '20@ms',
		height: '45@ms',
	},
	loginContinueButton: {
		width: '100%',
		marginTop: '38@ms',
		backgroundColor: '#109FDA',
		justifyContent: 'center',
		height: '45@ms',
	},
	loginContinueButton_text: {
		color: '#fff',
		fontSize: '18@s',
		fontWeight: 'bold',
		textTransform: 'uppercase',
		letterSpacing: 1,
	},
	loginFooterTextContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: '27@s',
		width: '80%',
	},
	login_footer_text: {
		color: '#bbb',
		fontSize: '10@ms0.3',
	},

	login_footer_underline: {
		marginLeft: '3@s',
		textDecorationLine: 'underline',
		fontSize: '10@ms0.3',
	},
});
