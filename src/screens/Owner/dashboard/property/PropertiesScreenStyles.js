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
		width: '85%',
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
});
