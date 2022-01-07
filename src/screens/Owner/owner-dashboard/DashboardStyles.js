import { Platform, StatusBar } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Dimensions } from 'react-native';

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
		marginHorizontal: '20@s',
		marginVertical: '15@s',
	},
	leftNavButton: {
		backgroundColor: '#fff',
		borderRadius: 10,
		width: '45@ms',
	},
	walletButton: {
		backgroundColor: '#83DBFF',
		width: '45@ms',
		height: '40@s',
		borderRadius: 10,
		opacity: 0.7,
	},
	revenueText: {
		color: '#fff',
		fontSize: '18@s',
		fontFamily: 'OpenSans_600SemiBold',
		alignSelf: 'flex-end',
		marginBottom: '15@s',
	},
	inInrText: {
		color: '#fff',
		marginLeft: '10@s',
		fontFamily: 'OpenSans_600SemiBold',
		fontSize: '15@ms',
	},
	amountText: {
		color: '#fff',
		fontFamily: 'OpenSans_700Bold',
		marginLeft: '10@s',
		fontSize: '15@ms',
	},
	dashboardHomeContainer: {
		flex: 1,
	},
	buttonView: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
	},
	dashboardButtonStyle: {
		height: '50@vs',
		borderBottomColor: '#109ED9',
	},
	dashboardButton: {
		color: '#000',
		flexGrow: 5,
		backgroundColor: '#FEFEFE',
	},
	summaryContainer: {
		flex: 6,
		marginHorizontal: '25@ms',
		marginTop: '-13@ms',
	},
	propertiesButton: {
		flexGrow: 5,
		backgroundColor: '#FEFEFE',
		color: '#000',
	},
	addPropertyButton: {
		backgroundColor: '#109ED9',
		width: '135@s',
	},
	summaryText: {
		fontFamily: 'OpenSans_600SemiBold',
		fontSize: '21@ms',
		marginTop: '3@s',
	},
	summaryCaptionText: {
		fontFamily: 'OpenSans_600SemiBold',
		fontSize: '14@ms',
		color: '#B8B8B8',
		marginVertical: 7,
		marginTop: 0,
		marginBottom: '7@s',
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
		// height: Dimensions.get('window').height / 8,
		// width: Dimensions.get('window').width / 2.5,
		height: '80@vs',
		width: '145@mvs',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		borderRadius: 5,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.23,
		shadowRadius: 2.62,

		elevation: 4,
	},
	boxTextView: {
		flex: 1,
		marginRight: '7@s',
		marginLeft: '-20@s',
	},
	boxQuantityText: { color: '#109ED9', fontSize: '25@ms' },
	boxQuantityCaptionText: {
		color: '#979797A1',
		fontSize: '13@s',
		fontWeight: '700',
	},
	buttonContainerView: {
		flex: 1,
		marginTop: '15@s',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
	},
	recentNotificationText: {
		fontFamily: 'OpenSans_600SemiBold',
		fontSize: 24,
		marginBottom: 5,
	},
	notificationContentText: {
		fontFamily: 'OpenSans_600SemiBold',
		fontSize: 14,
		color: '#B8B8B8',
	},
	notificationHeadingText: {
		fontFamily: 'OpenSans_600SemiBold',
		fontSize: 16,
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
	OpenSans_600SemiBold: {
		fontFamily: 'OpenSans_600SemiBold',
	},
	notificationContainer: {
		flex: 2.5,
	},
	summaryIcons: {
		flex: 1,
		fontSize: '35@mvs',
		color: '#109ED9',
		marginLeft: '10@s',
	},
});
