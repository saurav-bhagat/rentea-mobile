import { ScaledSheet } from 'react-native-size-matters';

export const addRoomCardStyles = ScaledSheet.create({
	addRoomContainer: {
		flex: 1,
		backgroundColor: '#109ED9',
		padding: 15,
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
	addRoomCol: {
		flex: 1,
	},
	roomDtlTxt: { color: '#ffffff', fontSize: 15 },
});
