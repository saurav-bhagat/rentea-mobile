import { ScaledSheet } from 'react-native-size-matters';

export const tenantInfoStyles = ScaledSheet.create({
	tenantInfoContainer: {
		marginTop: '10%',
		width: '90%',
		marginLeft: 'auto',
		marginRight: 'auto',
	},
	tenantInfoTitle: {
		fontSize: '18@ms0.3',
		marginBottom: '20@s',
	},
	dueDate: {
		fontWeight: 'bold',
	},
	row: {
		flexDirection: 'row',
		marginTop: '7@s',
	},
	col: { flex: 1, textAlign: 'right', fontFamily: 'interSemiBold' },
	col1: { flex: 1, color: '#979797', fontFamily: 'interRegular' },
	updateTenantContainer: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		paddingBottom: '10@s',
	},
	iconStyle: {
		fontSize: '18@s',
		color: '#109FDA',
	},
	paidWithCashContainer: {
		marginTop: '20@s',
		marginLeft: 'auto',
		marginRight: 'auto',
	},
	paidWithCashBtn: {
		backgroundColor: '#fff',
	},
	paidWithCashTitle: {
		color: '#109ED9',
		fontFamily: 'interBold',
	},
	tenantUpdateModalContainer: {
		backgroundColor: '#fff',
		paddingVertical: 20,
		marginHorizontal: 20,
		borderRadius: 15,
	},
});
