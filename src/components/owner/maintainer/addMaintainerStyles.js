import { StyleSheet } from 'react-native';

export const addMaintainerStyles = StyleSheet.create({
	modalContent: {
		flex: 1,
		borderRadius: 30,
		padding: 30,
		backgroundColor: '#fff',
		maxHeight: 300,
		alignContent: 'center',
	},
	submitMaintainerButton: {
		marginTop: 20,
		backgroundColor: '#109FDA',
		paddingHorizontal: 18,
		borderWidth: 1,
		borderColor: '#ddd',
		justifyContent: 'center',
		width: 100,
		marginRight: 18,
	},
	addMaintainerContainer: {
		flexDirection: 'row',
		marginTop: 13,
	},
	addMaintainerButton: {
		paddingHorizontal: 18,
		borderWidth: 1,
		borderColor: '#ddd',
		marginTop: 40,
		backgroundColor: '#109FDA',
		alignSelf: 'center',
		bottom: 20,
	},
	addMaintainerButton_text: {
		color: '#fff',
		fontSize: 17,
		letterSpacing: 1,
		textAlign: 'center',
	},
	maintainerDetails: {
		flex: 1,
		padding: 10,
	},
});
