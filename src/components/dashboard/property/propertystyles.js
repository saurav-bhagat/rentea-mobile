import { ScaledSheet } from 'react-native-size-matters';

export const propertyStyles = ScaledSheet.create({
	propertyListContainer: {
		paddingTop: '20@s',
	},
	scrollViewContentContainer: {
		width: '100%',
		marginLeft: 'auto',
		marginRight: 'auto',
		padding: '20@s',
		alignItems: 'stretch',
	},
	singlePropertyButton: {
		marginTop: '6%',
		marginBottom: '6%',
		justifyContent: 'center',
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
	singlePropertyRow1: {
		flexDirection: 'row',
		padding: 20,
	},
	singlePropertyCol1: { flex: 1 },
	singlePropertyCol2: { flex: 3 },
	singlePropertyCol3: { flex: 1 },
	buildingNoTxt: { fontSize: '16@s', fontFamily: 'interRegular' },
	buildingAdrsTxt: { fontSize: '13@s', color: '#979797', marginTop: 5 },
	editIcon: {
		position: 'absolute',
		right: 0,
		fontSize: 20,
		color: '#A6A6A6',
	},
	singlePropertyRow2: {
		flexDirection: 'row',
		paddingBottom: 20,
		paddingHorizontal: 20,
	},
	totalRoomPlusVacantRoomContainer: { flex: 1 },
	totRoomColor: { color: '#979797' },
	vacantRoomColor: { color: '#F78585' },
});
