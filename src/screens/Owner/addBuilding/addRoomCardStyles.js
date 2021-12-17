import { ScaledSheet } from 'react-native-size-matters';

export const addRoomCardStyles = ScaledSheet.create({
	addRoomContainer: {
		flex: 1,
		backgroundColor: '#109ED9',
		paddingVertical: 15,
		paddingHorizontal: 10,
		borderRadius: 10,
		marginVertical: 15,
	},
	modalContainer: {
		backgroundColor: '#fff',
		padding: 20,
		marginHorizontal: 20,
		marginTop: 40,
		borderRadius: 15,
	},
	addRoomRow: {
		flexDirection: 'row',
	},
	addRoomCol1: {
		flex: 3,
	},
	addRoomCol2: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	roomDtlTxt: {
		color: '#ffffff',
		fontSize: 15,
	},
});
