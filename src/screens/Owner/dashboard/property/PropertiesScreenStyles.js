import { ScaledSheet } from 'react-native-size-matters';

export const propertiesScreenStyles = ScaledSheet.create({
	propertiesContainer: {
		width: '85%',
		marginLeft: 'auto',
		marginRight: 'auto',
		padding: '20@s',
		alignItems: 'stretch',
	},
	propertyInfoContainer: {
		flex: 1,
	},
	propertyTitleContainer: {
		marginTop: '20@s',
		marginBottom: '20@s',
		padding: '10@ms',
		width: '90%',
		marginLeft: 'auto',
		marginRight: 'auto',
	},
	propertyTitle: {
		fontSize: '20@ms0.3',
	},
	propertyHeadingText: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	maintainerContainer: {
		padding: '10@ms',
		width: '90%',
		marginLeft: 'auto',
		marginRight: 'auto',
	},
	maintainerDetailsText: { fontWeight: 'bold', fontSize: 20 },
	maintainerInfoContainer: {
		padding: '8@s',
	},
	maintainerName: {
		fontSize: '15@ms0.3',
	},
	roomsContainer: {
		flex: 1,
		padding: '10@ms',
		width: '85%',
		marginLeft: 'auto',
		marginRight: 'auto',
	},
	roomTitle: {},
	roomsList: {},
	singleRoomTitle: {},
	item: {
		backgroundColor: '#109FDA',
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16,
	},
	title: {
		fontSize: 18,
	},
	listContainer: {
		width: '90%',
		marginLeft: 'auto',
		marginRight: 'auto',
		marginBottom: 15,
	},
	listSubtitle: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		paddingLeft: 10,
		paddingTop: 5,
	},
	roomsAndAddRoomBtnContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginHorizontal: '18@s',
	},
	roomsText: {
		marginBottom: '10@s',
		alignSelf: 'flex-end',
		fontSize: '15@s',
		color: '#979797',
	},
	addRoomBtnContainer: {
		flexDirection: 'row',
		alignContent: 'flex-end',
		justifyContent: 'flex-end',
		marginRight: '15@s',
	},
	roomNoAndAddTenantBtnRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '95%',
	},
	tenantDetailContainer: {},
	tenantDetailContainerCol1: {
		marginTop: 5,
	},
	roomNotTxt: {
		color: '#414141',
		fontSize: 18,
	},
	addRoomBtn: {
		backgroundColor: '#efefef',
	},
	addRoomTitle: {
		color: '#109FDA',
		fontSize: '16@s',
	},
	roomInfoContainer: {
		flexDirection: 'row',
	},
	roomInfoContainerRow1: { flex: 1 },
	roomInfoContainerRow3: { flex: 1 },
	vaccantTxt: {
		color: '#F78585',
		marginTop: 10,
	},
	plsAddRoomContainer: { flex: 1, marginTop: '20@s' },
	plsAddRoomTxt: { textAlign: 'center' },
});
