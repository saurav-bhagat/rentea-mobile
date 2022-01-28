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
	datePickerStyle: {
		width: 200,
		marginTop: 20,
	},
	rentDateEndText: { fontSize: '11.5@s' },
	checkoxContainer: {
		marginTop: '15@ms',
		width: '100%',
		borderRadius: 50,
	},
});
