import { ScaledSheet } from 'react-native-size-matters';

export const customCounterStyles = ScaledSheet.create({
	counterContainer: { flexDirection: 'row' },
	counterBtn: {
		width: 35,
		height: 35,
		borderWidth: 1,
		borderColor: '#27AAE1',
		borderRadius: 30,
		alignItems: 'center',
		justifyContent: 'center',
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
