import { ScaledSheet } from 'react-native-size-matters';

export const roomAccordionStyles = ScaledSheet.create({
	accordianHeaderContainer: {
		flexDirection: 'row',
		padding: 9,
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '#fff',
		borderRadius: 50,
		marginBottom: '23@ms',
		marginTop: '9@ms',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,
		elevation: 8,
		width: '95%',
		marginRight: 'auto',
		marginLeft: 'auto',
	},
	accordianHeaderTitle: {
		color: '#666666',
		fontSize: '18@ms0.3',
		fontWeight: '600',
	},
	addRoomButton: {
		paddingHorizontal: 18,
		borderWidth: 1,
		borderColor: '#ddd',
		marginTop: 10,
		backgroundColor: '#109FDA',
		alignSelf: 'center',
		bottom: 5,
	},
	addRoomButton_text: {
		color: '#fff',
		fontSize: 17,
		letterSpacing: 1,
		textAlign: 'center',
	},
});
