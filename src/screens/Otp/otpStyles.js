import { StyleSheet } from 'react-native';

export const otpStyles = StyleSheet.create({
	otpContainer: {
		flex: 1,
		// justifyContent: 'center',
		marginTop: '25%',
		alignItems: 'center',
		width: '90%',
		marginLeft: 'auto',
		marginRight: 'auto',
	},
	otpEnterText: {
		fontSize: 31,
		color: '#666666',
	},
	underlineStyleBase: {
		width: 30,
		height: 45,
		borderWidth: 0,
		borderBottomWidth: 2,
		borderColor: '#666666',
		color: '#109FDA',
		fontSize: 24,
	},

	underlineStyleHighLighted: {
		borderColor: '#000',
	},
	loginContinueButton: {
		width: '100%',
		borderWidth: 1,
		borderColor: '#ddd',
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
});
