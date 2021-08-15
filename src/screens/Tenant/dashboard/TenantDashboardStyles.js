import { ScaledSheet } from 'react-native-size-matters';

export const tenantDashStyles = ScaledSheet.create({
	tenantDashContainer: {
		// marginTop: '20%',
		width: '100%',
		marginLeft: 'auto',
		marginRight: 'auto',
		padding: '20@s',
		alignItems: 'stretch',
	},
	payNowButton: {
		padding: 20,
		marginTop: '20@ms',
		backgroundColor: '#109FDA',
		justifyContent: 'center',
		height: '50@ms',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,
		elevation: 8,
		borderRadius: 35,
	},
	payNowButton_text: {
		color: '#fff',
		// fontSize: '20@ms0.3',
		fontWeight: 'bold',
		textTransform: 'uppercase',
		letterSpacing: 1,
		textAlign: 'center',
	},
});
