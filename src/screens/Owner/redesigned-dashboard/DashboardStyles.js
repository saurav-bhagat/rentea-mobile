import { Platform, StatusBar } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

export const dashboardStyles = ScaledSheet.create({
	dashBoardContainer: {
		flex: 1,
		paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
	},
	topView: {
		flex: 1.5,
		backgroundColor: '#109ED9',
		width: '100%',
		height: '200@s',
	},
	topContentContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'flex-end',
		marginHorizontal: 30,
		marginVertical: 20,
	},
	leftNavButton: {
		backgroundColor: '#fff',
		borderRadius: 10,
		width: 50,
	},
	walletButton: {
		backgroundColor: '#83DBFF',
		width: 50,
		borderRadius: 10,
		opacity: 0.7,
	},
	revenueText: {
		color: '#fff',
		fontSize: '20@s',
		fontFamily: 'OpenSans_600SemiBold',
		alignSelf: 'flex-end',
		marginBottom: 20,
	},
	inInrText: {
		color: '#fff',
		marginLeft: 10,
		fontFamily: 'OpenSans_600SemiBold',
		fontSize: 15,
	},
	amountText: {
		color: '#fff',
		fontFamily: 'OpenSans_700Bold',
		marginLeft: 10,
		fontSize: 15,
	},
	buttonView: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
	},
	dashboardButton: {
		color: '#000',
		flexGrow: 5,
		backgroundColor: '#FEFEFE',
	},
	propertiesButton: {
		flexGrow: 5,
		backgroundColor: '#FEFEFE',
		color: '#000',
	},
	addPropertyButton: {
		backgroundColor: '#109ED9',
		width: 150,
	},
	summaryText: {
		fontFamily: 'OpenSans_600SemiBold',
		fontSize: 24,
	},
	summaryCaptionText: {
		fontFamily: 'OpenSans_600SemiBold',
		fontSize: 14,
		color: '#B8B8B8',
		marginVertical: 7,
		marginTop: 0,
	},
	summaryView: {
		flex: 4,
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignContent: 'space-around',
		justifyContent: 'space-between',
	},
	boxView: {
		backgroundColor: '#FFF',
		height: 100,
		width: 160,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		borderRadius: 10,
	},
	boxTextView: {
		flex: 1,
		marginRight: 5,
	},
	boxQuantityText: { color: '#109ED9', fontSize: 30 },
	boxQuantityCaptionText: { color: '#979797A1' },
	buttonContainerView: {
		flex: 1,
		marginTop: 10,
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
	},
	recentNotificationText: {
		fontFamily: 'OpenSans_600SemiBold',
		fontSize: 24,
		marginBottom: 5,
	},
	randomNotificationView: {
		width: '100%',
		backgroundColor: '#fff',
		height: 60,
		borderRadius: 6,
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		marginTop: 5,
	},
});
