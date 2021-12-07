import { ScaledSheet } from 'react-native-size-matters';

export const addBuildingFormstyles = ScaledSheet.create({
	blueColor: {
		color: '#0A8ED9',
	},
	addBFcontainer: {
		flex: 1,
		width: '95%',
		marginLeft: 'auto',
		marginRight: 'auto',
		justifyContent: 'center',
	},
	addBFormContainer: {
		flex: 1,
		padding: 10,
	},
	addBFCard: {
		backgroundColor: '#ffffff',
		borderRadius: 15,
		paddingVertical: 30,
		paddingHorizontal: 35,
		elevation: 7,
		marginHorizontal: '13@ms',
		marginVertical: '17@ms',
	},
	textItemStyle: {
		marginBottom: '17@ms',
	},
	inputStyle: {},
	roomAndFloorC: {
		marginVertical: 24,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	roomAndFloorText: {
		color: '#0A8ED9',
		marginBottom: 10,
	},
	addRoomContainer: {
		marginVertical: '15@ms',
		paddingVertical: '10@ms',
	},
	addRoomFormModalContainer: {
		backgroundColor: '#fff',
		padding: 30,
		marginHorizontal: 20,
		borderRadius: 15,
	},
	submitBtn: {
		backgroundColor: '#109ED9',
		marginTop: 12,
		alignSelf: 'flex-start',
		borderRadius: 10,
	},
	submitBtnTxt: {
		paddingHorizontal: 10,
		fontFamily: 'interSemiBold',
	},
	roomDetailRow: { flexDirection: 'row' },
	roomDtlCol: { flex: 1 },
	roomDtlColTxt1: { fontFamily: 'interBold', color: '#109ED9' },
	roomDtlColTxt2: {
		fontFamily: 'interBold',
		color: '#109ED9',
		textAlign: 'center',
	},
	roomDtlColTxt3: {
		fontFamily: 'interBold',
		color: '#109ED9',
		textAlign: 'center',
	},
});
