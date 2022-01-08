import { ScaledSheet } from 'react-native-size-matters';

export const addRoomFormStyles = ScaledSheet.create({
	headerContainer: {
		paddingBottom: 20,
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

	addRoomContainer: {
		marginVertical: '15@ms',
		paddingVertical: '10@ms',
	},
	textItemStyle: {
		marginBottom: '17@ms',
	},
	inputStyle: {},
	rentSecurityContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginVertical: 10,
	},
	rentTxtInptContainer: {
		height: 40,
		marginVertical: 12,
		marginRight: 12,
		borderBottomWidth: 0.6,
		padding: 10,
		flex: 1,
	},
	securityTxtInptContainer: {
		height: 40,
		marginVertical: 12,
		marginLeft: 12,
		borderBottomWidth: 0.6,
		padding: 10,
		flex: 1,
	},
	row: { flexDirection: 'row' },
	col: { flex: 1, paddingRight: 20 },
});
