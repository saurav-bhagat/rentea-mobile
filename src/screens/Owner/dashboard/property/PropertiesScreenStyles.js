import { ScaledSheet } from 'react-native-size-matters';

export const propertiesScreenStyles = ScaledSheet.create({
	propertiesContainer: {
		marginTop: '20%',
		width: '85%',
		marginLeft: 'auto',
		marginRight: 'auto',
		padding: '20@s',
		alignItems: 'stretch',
	},
	propertyInfoContainer: {
		padding: '10@ms',
		width: '85%',
		marginLeft: 'auto',
		marginRight: 'auto',
	},
	propertyTitleContainer: {
		marginTop: '20@s',
		marginBottom: '20@s',
	},
	propertyTitle: {
		fontSize: '20@ms0.3',
	},
	maintainerContainer: {},
	maintainerInfoContainer: {
		padding: '8@s',
	},
	maintainerName: {
		fontSize: '15@ms0.3',
	},
	roomsContainer: {
		padding: '5@s',
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
