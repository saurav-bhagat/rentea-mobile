import { ScaledSheet } from 'react-native-size-matters';

export const roomInfoScreenStyles = ScaledSheet.create({
	addTenantContainer: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		marginTop: '10@s',
		marginBottom: '10@s',
		marginRight: '20@s',
	},
	addTenantBtn: {
		backgroundColor: '#fff',
		borderRadius: '20@s',
	},
	addTenantTitle: {
		color: '#109FDA',
		fontSize: '15@s',
	},
	cardStyle: {
		marginTop: '20@s',
		width: '90%',
		marginLeft: 'auto',
		marginRight: 'auto',
		borderRadius: '20@s',
	},
	row: {
		flexDirection: 'row',
		marginTop: '5@s',
	},
	col: {
		flex: 1,
		textAlign: 'right',
	},
	col1: {
		flex: 1,
		color: '#979797',
	},
	noTenantTxt: {
		textAlign: 'center',
		marginTop: '20@mvs',
		fontSize: '20@s',
		fontFamily: 'interRegular',
	},
	roomUpdateModalContainer: {
		backgroundColor: '#fff',
		padding: 30,
		marginHorizontal: 20,
		borderRadius: 15,
	},
	addTenantModalContainer: {
		backgroundColor: '#fff',
		paddingVertical: 20,
		marginHorizontal: 20,
		borderRadius: 15,
	},
});
