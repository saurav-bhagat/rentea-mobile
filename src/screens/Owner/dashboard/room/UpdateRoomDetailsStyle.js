import { ScaledSheet } from 'react-native-size-matters';

export const updateRoomDetailsStyle = ScaledSheet.create({
	updateRoomContainer: {
		flex: 1,
		width: '90%',
		marginLeft: 'auto',
		marginRight: 'auto',
		minHeight: '100%',
		paddingTop: '30@s',
	},
	submitButton: {
		borderRadius: 30,
		borderWidth: 2,
		marginTop: '37@ms',
		backgroundColor: '#109FDA',
		justifyContent: 'center',
		height: '50@ms',
	},
	submitButton_text: {
		color: '#fff',
		fontSize: '20@ms0.3',
		fontWeight: 'bold',
		textTransform: 'uppercase',
		letterSpacing: 1,
		textAlign: 'center',
	},
});
