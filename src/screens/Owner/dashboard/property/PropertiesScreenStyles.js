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
		width: '85%',
		marginLeft: 'auto',
		marginRight: 'auto',
	},
	propertyTitle: {
		fontSize: '20@ms0.3',
	},
	maintainerContainer: {
		padding: '10@ms',
		width: '90%',
		marginLeft: 'auto',
		marginRight: 'auto',
	},
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
		width: '95%',
	},
	roomsText: {
		marginBottom: '20@s',
		marginLeft: '30@s',
		fontWeight: 'bold',
		alignSelf: 'flex-end',
	},
	addRoomBtnContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: '10@s',
		marginLeft: '20@s',
	},
});
