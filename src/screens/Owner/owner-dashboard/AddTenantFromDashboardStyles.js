import { ScaledSheet } from 'react-native-size-matters';

export const addTenantFromDashboardStyles = ScaledSheet.create({
	headingText: {
		fontFamily: 'OpenSans_600SemiBold',
		fontSize: '17@s',
		fontWeight: 'bold',
		color: '#109ED9',
	},
	addTenantParentView: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	addTenantView: {
		width: '270@s',
		backgroundColor: '#ffffff',
		borderRadius: 15,
		paddingVertical: 30,
		paddingHorizontal: 35,
		elevation: 7,
		marginHorizontal: '13@ms',
		marginVertical: '17@ms',
	},
	addTenantModalContainer: {
		backgroundColor: '#fff',
		paddingVertical: 20,
		marginHorizontal: 20,
		borderRadius: 15,
	},
	addTenantBtn: {
		backgroundColor: '#109ED9',
		marginTop: 12,
		alignSelf: 'flex-start',
		borderRadius: 10,
	},
	addTenantBtnTxt: {
		paddingHorizontal: 10,
		fontFamily: 'interSemiBold',
	},
	errorText: {
		fontSize: '14@s',
		fontFamily: 'OpenSans_600SemiBold',
		color: '#F78585',
	},
});
