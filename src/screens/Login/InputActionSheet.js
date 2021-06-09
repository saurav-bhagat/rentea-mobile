import React, { createRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import { Item, Input, Button, Content } from 'native-base';

import LoginComponent from './LoginComponent';

const actionSheetRef = createRef();

const InputActionSheet = () => {
	let actionSheet;

	useEffect(() => {
		actionSheetRef.current?.show();
	}, []);

	return (
		<View>
			<View>
				<Image style={{ width: 200, height:200 }} source={require('../../images/test-logo.png')} />
			</View>
			<TouchableOpacity
        			onPress={() => {
          			actionSheetRef.current?.setModalVisible();
        		}}
      		>
        		<Text>Open ActionSheet</Text>
      		</TouchableOpacity>

      		<ActionSheet 
			  ref={actionSheetRef}
			  closeOnPressBack={false}
			//   closeOnTouchBackdrop={false}
			//   closable={false}
			  headerAlwaysVisible={true}
			  indicatorColor='#bbbbbb'
			  overlayColor='white'
			  containerStyle={styles.actionSheetStyle}
			>
        		{/* <LoginComponent /> */}
				<View style={styles.loginComponentContainer}>
					<Text style={styles.loginText}>Log In</Text>
					
					<View style={styles.phoneInputContainer}>
						<Item rounded>
            				<Input style={styles.phoneInputBox} placeholderTextColor={'#ccc'} placeholder='Enter Phone Number'/>
          				</Item>
						<Button rounded transparent style={styles.loginContinueButton}>
							<Text style={styles.loginContinueButton_text}>Continue</Text>
						</Button>
					</View>
					<View style={styles.loginFooterTextContainer}>
						<Text style={{ color: '#bbb', fontSize:11 }}>By clicking continue, you agree to our <Text style={{ textDecorationLine: 'underline' }}>Terms and Conditions</Text></Text>
						<Text style={{ color: '#bbb', fontSize: 11 }}>and have read out <Text style={{ textDecorationLine: 'underline' }}>Privacy Policy</Text></Text>
					</View>
				</View>
      		</ActionSheet>
		</View>
	);
};

const styles = StyleSheet.create({
	inputSheetContainer: {
		flex:1, 
		justifyContent: 'center'
	},
	actionSheetStyle:{
		height: '30%',
		// backgroundColor: 'green'
		borderTopLeftRadius: 50,
		borderTopRightRadius: 50
	},
	loginComponentContainer: {
		// backgroundColor: '#f2f2f2',
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 15,
		paddingBottom: 15
	},
	loginText: {
		fontSize: 37,
		color: '#666',
		marginBottom: 25
	},
	phoneInputContainer:{
		width: '70%'
	},
	phoneInputBox: {
		paddingLeft: 20,
	},	
	loginContinueButton: {
		width: '100%',
		paddingLeft: 20,
		borderWidth: 1,
		borderColor: '#ddd',
		marginTop: 30,
	},
	loginContinueButton_text: {
		color: '#ccc',
		fontSize: 18
	},
	loginFooterTextContainer:{
		color: '#ddd',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 30,
		width: '80%'
	}
});

export default InputActionSheet;