import { ScaledSheet } from 'react-native-size-matters';

export const addBuildingStyles = ScaledSheet.create({
	addBuildingContainer: {
		flex: 1,
		paddingTop: '25%',
		backgroundColor: 'white',
		paddingHorizontal: '10%',
	},
	addBuildingRow1Txt: { fontSize: 42, color: '#666666' },
	addBuildingRow2Txt: { fontSize: 16, marginTop: 10, color: '#888888' },
	addBuildingRow3Txt: { fontSize: 10, marginTop: 10, color: '#999999' },
	skipAndContinueContainer: {
		flexDirection: 'row',
		marginTop: '5%',
	},
	skipBtn: { justifyContent: 'flex-start', borderColor: '#fff' },
	continueBtn: { justifyContent: 'flex-end', borderColor: '#fff' },
	addBTextContainer: {
		marginBottom: '28@ms',
	},
	addBText: {
		fontSize: '47@ms0.3',
		letterSpacing: 1.3,
		color: '#666666',
		marginBottom: 0,
	},
	addBSkipButton: {
		marginTop: 20,
		backgroundColor: '#109FDA',
		paddingHorizontal: 12,
		justifyContent: 'center',
		width: 100,
		marginRight: 18,
		marginLeft: 12,
		marginBottom: 20,
	},
	addBSkipButtonText: {
		color: '#fff',
		fontSize: 19,
	},
	forwardIcon: {
		color: '#fff',
		marginLeft: 4,
		top: 2,
		fontSize: '22@s',
	},
	addBtn: {
		borderColor: '#109ED9',
		borderWidth: 1.2,
		borderRadius: 5,
	},
	buildingDetailContainer: {
		borderColor: '#404040',
		borderWidth: 0.3,
		borderRadius: 5,
		paddingHorizontal: 20,
		paddingVertical: 10,
		marginBottom: 10,
	},
	buidlingDetailTxt: {
		color: '#109ED9',
		fontFamily: 'interRegular',
	},
});
