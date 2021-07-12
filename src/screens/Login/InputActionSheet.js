// import React, { createRef, useEffect } from 'react';
// import { StyleSheet } from 'react-native';
// import ActionSheet from 'react-native-actions-sheet';
// import { useNavigation, useIsFocused } from '@react-navigation/native';

// import LoginComponent from './LoginComponent';

// const InputActionSheet = ({ actionSheetRef }) => {
// 	let actionSheet;

// 	const navigation = useNavigation();
// 	const isFocused = useIsFocused()

// 	useEffect(() => {
// 		navigation.addListener('focus', () => {

// 			setTimeout(() => {
// 				actionSheetRef.current?.show();
// 				console.log(actionSheetRef.current);
// 				console.log('Inside useEffect of InputActionSheet');
// 			}, 1000);

// 		});
// 	}, [isFocused]);

// 	return (
//       	<ActionSheet
// 			ref={actionSheetRef}
// 			closeOnPressBack={false}
// 			closeOnTouchBackdrop={false}
// 			closable={false}
// 			headerAlwaysVisible={true}
// 			indicatorColor='#bbbbbb'
// 			overlayColor='white'
// 			containerStyle={styles.actionSheetStyle}
// 			elevation={10}
// 			>
//         	<LoginComponent />
//       	</ActionSheet>
// 	);
// };

// const styles = StyleSheet.create({
// 	inputSheetContainer: {
// 		// flex:1,
// 		justifyContent: 'center'
// 	},
// 	actionSheetStyle:{
// 		height: '30%',
// 		// backgroundColor: 'green'
// 		borderTopLeftRadius: 50,
// 		borderTopRightRadius: 50
// 	},

// });

// export default InputActionSheet;
