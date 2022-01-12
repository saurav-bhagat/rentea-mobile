import { ScaledSheet } from 'react-native-size-matters';

export const transactionCardStyles = ScaledSheet.create({
	cardContainer: {
		width: '90%',
		borderRadius: 10,
	},
	cardItem: {
		borderRadius: 10,
	},
	cardBodyView: {
		display: 'flex',
		flexDirection: 'row',
	},
	cardTextContainer: {
		marginLeft: '17@s',
		display: 'flex',
		flexDirection: 'column',
	},
	tenantTextStyle: { color: '#fff', fontSize: '17@s' },
	dateTextStyle: { color: '#fff', fontSize: '13@s' },
});
