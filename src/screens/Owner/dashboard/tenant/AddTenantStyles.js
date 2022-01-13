import { ScaledSheet } from 'react-native-size-matters';

export const addTenantStyles = ScaledSheet.create({
	addTenantContainer: {
		flex: 1,
		width: '90%',
		marginLeft: 'auto',
		marginRight: 'auto',
		minHeight: '100%',
		paddingTop: '30@s',
	},
	submitButton: {
		marginVertical: '30@ms',
		backgroundColor: '#109ED9',
		borderRadius: 10,
	},
	submitButton_text: {
		fontFamily: 'interRegular',
	},
	row: { flexDirection: 'row' },
	col: { flex: 1, paddingRight: 20 },
});
