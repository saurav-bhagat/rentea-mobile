import { ScaledSheet } from 'react-native-size-matters';

export const tenantReceiptStyles = ScaledSheet.create({
	receiptContainer: {
		alignItems: 'stretch',
		flex: 1,
	},
	headText: {
		fontSize: '17@ms0.3',
		marginBottom: '10@s',
		left: '10@s',
	},
	receiptCard_row1: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: '5@s',
	},
	receiptCard_row2: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: '5@s',
	},
	boldValue: {
		fontSize: '15@ms0.3',
		fontWeight: 'bold',
	},
	actionButtonContainer: {
		flexDirection: 'row',
	},
	actionButton: {
		padding: '10@ms',
	},
	actionButton_text: {
		color: '#109FDA',
	},
});
