import { ScaledSheet } from 'react-native-size-matters';

export const customCounterStyles = ScaledSheet.create({
	counterContainer: { flexDirection: 'row' },
	counterBtn: {
		padding: 0,
		margin: 0,
		width: 35,
		height: 35,
		borderWidth: 0.8,
		borderColor: '#27AAE1',
		borderRadius: 30,
	},
	counterTxtCont: {
		minWidth: 40,
		alignItems: 'center',
		justifyContent: 'center',
	},
	counterTxt: {
		color: '#109ED9',
	},
});
