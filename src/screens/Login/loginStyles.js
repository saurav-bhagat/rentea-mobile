import { StyleSheet } from 'react-native';

export const loginStyles = StyleSheet.create({
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
		shadowColor: '#000000',
		borderColor: '#f2f2f2',
		borderTopWidth: 1,
		borderLeftWidth: 1,
		borderRightWidth: 1,
		paddingTop: 20,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
	},
	panelHeader: {
		alignItems: 'center',
	},
	panelHandle: {
		width: 40,
		height: 8,
		borderRadius: 4,
		backgroundColor: '#00000040',
		marginBottom: 10,
	},
	sheetContainer: {
		flex: 1,
		shadowColor: '#000000',
		shadowOffset: { width: 0, height: 0 },
		shadowRadius: 5,
		shadowOpacity: 0.5,
	},
	loginComponentContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 15,
		paddingBottom: 15,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 0 },
		shadowRadius: 5,
		shadowOpacity: 0.4,
	},
	loginText: {
		fontSize: 34,
		color: '#666666',
		marginBottom: 45,
	},
	phoneInputContainer: {
		width: '80%',
	},
	phoneInputBox: {
		paddingLeft: 20,
		height: 50,
	},
	loginContinueButton: {
		width: '100%',
		marginTop: 40,
		backgroundColor: '#109FDA',
		justifyContent: 'center',
		height: 50,
	},
	loginContinueButton_text: {
		color: '#fff',
		fontSize: 22,
		fontWeight: 'bold',
		textTransform: 'uppercase',
		letterSpacing: 1,
	},
	loginFooterTextContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 30,
		width: '70%',
	},
	login_footer_text: {
		color: '#bbb',
		fontSize: 11,
	},
	login_footer_underline: {
		textDecorationLine: 'underline',
	},
});
