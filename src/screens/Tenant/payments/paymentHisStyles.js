import { ScaledSheet } from 'react-native-size-matters';

export const paymentHisStyles = ScaledSheet.create({
	payHisContainer: {
		marginTop: '20%',
		alignItems: 'stretch',
		flex: 1,
	},
	headText: {
		fontSize: '17@ms0.3',
		marginBottom: '10@s',
		left: '10@s',
	},
	transactionCard_row1: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: '5@s',
	},
	transactionCard_row2: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		padding: '5@s',
	},
	boldValue: {
		fontSize: '15@ms0.3',
		fontWeight: 300,
	},
});
