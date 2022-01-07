import { ScaledSheet } from 'react-native-size-matters';
export const roomDetailStyles = ScaledSheet.create({
	roomInfoContainer: {
		marginTop: '10%',
	},
	roomInfoTitle: {
		fontSize: '18@ms0.3',
		marginBottom: '20@s',
	},
	row1: { flexDirection: 'row', marginTop: '3@s' },
	col1: { flex: 1, color: '#979797' },
	col2: { flex: 6, paddingHorizontal: 10 },
	rowInCol2: { flexDirection: 'row', marginTop: '3@s' },
	col3: { flex: 1 },
	roomNoTxt: { color: '#414141', fontSize: '18@s' },
	iconStyle: {
		position: 'absolute',
		right: 0,
		fontSize: '18@s',
		color: '#109FDA',
	},
});
