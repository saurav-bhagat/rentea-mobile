import { StyleSheet } from 'react-native';

export const userDetailsStyles = StyleSheet.create({
	oudsContainer: {
		flex: 1,
		marginTop: '20%',
		width: '85%',
		marginLeft: 'auto',
		marginRight: 'auto',
	},
	oudsTextContainer: {},
	oudsWelcomeText: {
		fontSize: 55,
		letterSpacing: 1.3,
		color: '#666666',
		marginBottom: 15,
	},
	oudsShortText: {
		fontSize: 17,
		color: '#666666',
	},
	oudsFormContainer: {},
	oudsPhoneInputBox: {
		paddingLeft: 20,
		height: 55,
		marginTop: '12%',
		borderWidth: 0.1,
		borderColor: '#ddd',
		borderRadius: 25,
		padding: 10,
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
		marginTop: 40,
		backgroundColor: '#109FDA',
		justifyContent: 'center',
		height: 58,
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
		fontSize: 22,
		fontWeight: 'bold',
		textTransform: 'uppercase',
		letterSpacing: 1,
	},
});
