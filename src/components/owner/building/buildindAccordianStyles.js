import { ScaledSheet } from 'react-native-size-matters';

export const buildingAccordianStyles = ScaledSheet.create({
	accordianContentContainer: {
		width: '90%',
		marginRight: 'auto',
		marginLeft: 'auto',
	},
	buildingDetailCard: {
		width: '100%',
		marginLeft: 'auto',
		marginRight: 'auto',
	},
	accordianHeaderContainer: {
		flexDirection: 'row',
		padding: 12,
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '#fff',
		borderRadius: 50,
		marginBottom: '28@ms',
		marginTop: 10,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,
		elevation: 8,
		width: '95%',
		marginRight: 'auto',
		marginLeft: 'auto',
	},
	accordianHeaderTitle: {
		color: '#666666',
		fontSize: '22@ms0.3',
		fontWeight: '600',
	},
});
