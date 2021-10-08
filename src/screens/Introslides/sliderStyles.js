import { ScaledSheet } from 'react-native-size-matters';

export const sliderStyles = ScaledSheet.create({
	introContainer: {
		flex: 1,
		justifyContent: 'space-evenly',
		alignItems: 'center',
		backgroundColor: '#ffffff',
	},
	logo: {},
	image: {},
	textContainer: {},
	title: {
		fontWeight: 'bold',
		fontSize: '17@s',
		marginTop: '8@s',
	},
	description: {
		fontSize: '14@s',
		textAlign: 'center',
		marginTop: '28@s',
		marginBottom: '20@s',
	},
	activeDot: {
		backgroundColor: '#109ED9',
		width: '26@s',
		marginBottom: '140%',
	},
	dotStyle: {
		backgroundColor: '#109ED9',
		marginBottom: '140%',
	},
	nextButton: {
		borderColor: '#109ED9',
		borderWidth: 2,
		borderRadius: 14,
		width: '80@s',
		alignSelf: 'center',
	},
});
