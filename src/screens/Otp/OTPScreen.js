import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { Button } from 'native-base';
import { useNavigation } from '@react-navigation/core';

const OTPScreen = () => {

	const navigation = useNavigation();
	const handleOTPSubmit = (code) => {
		console.log(`Code is ${code}, you are good to go!`);

		// once otp is verified, navigate to home screen 
		setTimeout(() => {
			navigation.navigate('OwnerUserDetails');
		}, 2000);
	}
	return(
		<View style={styles.otpContainer}>
			<Text style={styles.otpEnterText}>Enter OTP received on your mobile:</Text>
			<OTPInputView
    			style={{width: '80%', height: 200}}
    			pinCount={4}
    			// code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
    			// onCodeChanged = {code => { this.setState({code})}}
    			autoFocusOnLoad
    			codeInputFieldStyle={styles.underlineStyleBase}
    			codeInputHighlightStyle={styles.underlineStyleHighLighted}
    			onCodeFilled = {(code) => {
					handleOTPSubmit(code);
    			}}
			/>
			<Button rounded transparent style={styles.loginContinueButton}>
				<Text style={styles.loginContinueButton_text}>Continue</Text>
			</Button>
		</View>
	);
};

const styles = StyleSheet.create({
	otpContainer: {
		flex:1,
		// justifyContent: 'center',
		marginTop: '25%',
		alignItems: 'center',
		width: '90%',
		marginLeft: 'auto',
		marginRight: 'auto'
	},
	otpEnterText:{
		fontSize: 31,
		color: '#666666'
	},	
	underlineStyleBase: {
		width: 30,
		height: 45,
		borderWidth: 0,
		borderBottomWidth: 2,
		borderColor: '#666666',
		color: '#109FDA',
		fontSize: 24
	  },
	 
	  underlineStyleHighLighted: {
		borderColor: "#000",
	  },
	  loginContinueButton: {
		width: '100%',
		borderWidth: 1,
		borderColor: '#ddd',
		marginTop: 40,
		backgroundColor: '#109FDA',
		justifyContent: 'center',
		height: 50
	},
	loginContinueButton_text: {
		color: '#fff',
		fontSize: 22,
		fontWeight: 'bold',
		textTransform: 'uppercase',
		letterSpacing: 1
	},
});

export default OTPScreen;