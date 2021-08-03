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
});
