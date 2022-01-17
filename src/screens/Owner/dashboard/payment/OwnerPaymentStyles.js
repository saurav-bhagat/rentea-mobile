import { ScaledSheet } from 'react-native-size-matters';

export const ownerPaymentStyles = ScaledSheet.create({
	ownerPaymentContainer: {
		flex: 1,
		marginTop: 20,
	},
	transactionCardContainer: {
		marginTop: 10,
		display: 'flex',
		alignItems: 'center',
	},
	tabContainerStyle: {
		backgroundColor: '#109FDA',
		height: '8%',
		borderRadius: 50,
		marginHorizontal: 10,
	},
	tabBackgroundColor: {
		backgroundColor: '#fff',
	},
	tabStyle: {
		backgroundColor: '#109FDA',
		borderRadius: 50,
		height: '80%',
		marginTop: 4.5,
	},
	textStyle: {
		color: '#fff',
	},
	activeTabStyle: {
		height: '80%',
		marginTop: 4.5,
		backgroundColor: '#fff',
		borderRadius: 50,
	},
	activeTextStyle: { color: '#109FDA' },
	transactionScreenContainer: {
		flex: 1,
		backgroundColor: '#fff',
	},
	transactionSlipContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	transactionDataContainer: {
		width: '90%',
		borderRadius: 15,
		paddingVertical: 30,
		paddingHorizontal: 35,
		backgroundColor: '#fff',
		elevation: 7,
	},
	iconStyle: {
		textAlign: 'center',
		marginTop: -80,
		overflow: 'hidden',
	},
	paymentTextStyle: {
		color: '#9FA2AB',
		textAlign: 'center',
		fontSize: 20,
		marginTop: 40,
	},
	transactionAmountTextStyle: {
		fontSize: 40,
		textAlign: 'center',
		color: '#414141',
	},
	dataFieldContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 30,
		marginTop: 10,
	},
	leftSideTransactionTextStyle: {
		color: '#9FA2AB',
		fontSize: 18,
	},
	rightSideTransactionTextStyle: {
		color: '#4c4c4c',
		fontSize: 18,
	},
	horizontalRow: {
		marginTop: 10,
		borderWidth: 1,
		borderRadius: 1,
		borderColor: '#C0C0C0',
	},
});
