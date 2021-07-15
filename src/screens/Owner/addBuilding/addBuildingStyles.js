import { StyleSheet } from 'react-native';

export const addBuildingStyles = StyleSheet.create({
	addBContainer: {
		flex: 1,
		paddingTop: '2%',
		backgroundColor: 'white',
		width: '85%',
		marginLeft: 'auto',
		marginRight: 'auto',
		justifyContent: 'space-between',
	},
	addBTextContainer: {
		marginBottom: 30,
	},
	addBText: {
		fontSize: 50,
		letterSpacing: 1.3,
		color: '#666666',
		marginBottom: 0,
	},
	addBSkipButton: {
		marginTop: 20,
		backgroundColor: '#109FDA',
		paddingHorizontal: 12,
		justifyContent: 'center',
		width: 100,
		marginRight: 18,
		marginLeft: 12,
		marginBottom: 20,
	},
	addBSkipButtonText: {
		color: '#fff',
		fontSize: 19,
	},
	forwardIcon: {
		color: '#fff',
		marginLeft: 4,
		top: 2,
		fontSize: 22,
	},
});
