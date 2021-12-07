import { ScaledSheet } from 'react-native-size-matters';

export const addRoomFormStyles = ScaledSheet.create({
	headerContainer: {
		paddingVertical: 20,
	},
	headerTxt: {
		fontFamily: 'interRegular',
		fontSize: 20,
		textAlign: 'center',
	},
	addRoomBtnContainer: {
		marginTop: 20,
	},
	addRoomBtn: {
		width: 120,
		backgroundColor: '#109ED9',
		borderRadius: 10,
	},
	textItemStyle: {
		marginBottom: '17@ms',
	},
	inputStyle: {},
	addRoomBtnTxt: {
		fontFamily: 'interRegular',
	},
	addRoomRow: {
		flex: 1,
		marginRight: '5%',
	},
	roomDetailContainer: { flexDirection: 'row' },
	roomDetailCol1: { flex: 1, marginRight: '5%' },
	roomDetailCol2: { flex: 1, marginLeft: '5%' },
	multipleTenantContainer: { flexDirection: 'row', marginTop: '5%' },
	multipleTxt: { color: '#109ED9', fontFamily: 'interRegular' },
});
