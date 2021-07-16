import { ScaledSheet } from 'react-native-size-matters';

export const addMaintainerStyles = ScaledSheet.create({
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
		marginTop: '12@ms',
	},
});
