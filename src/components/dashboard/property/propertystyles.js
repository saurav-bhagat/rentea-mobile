import { ScaledSheet } from 'react-native-size-matters';

export const propertyStyles = ScaledSheet.create({
	propertyListContainer: {
		paddingTop: '20@s',
		paddingHorizontal: '5@ms',
	},
	singlePropertyButton: {
		height: '52@ms',
		marginTop: '6%',
		marginBottom: '6%',
		justifyContent: 'center',
		borderRadius: 25,
		padding: '14@ms',
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
	singlePropertyButton_text: {
		color: '#666666',
		fontSize: '16@ms0.3',
		textAlign: 'center',
		letterSpacing: 1,
	},
});
