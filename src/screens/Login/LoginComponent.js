import React from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Item, Input, Button, Content } from 'native-base';


const LoginComponent = ({ navigation }) => {


	const handleLoginContinue = () => {
		console.log('Function called here');
		navigation.navigate('OTP');
	}
	return (
		
		<View style={styles.loginComponentContainer}>
			<Text style={styles.loginText}>Log In/Sign Up</Text>
					
			<View style={styles.phoneInputContainer}>
				<Item rounded>
					<Input 
						style={styles.phoneInputBox} 
						placeholderTextColor={'#ccc'} 
						placeholder='Enter Phone Number'
						keyboardType='numeric'
					/>
				</Item>
				<Button rounded transparent style={styles.loginContinueButton} onPress={() => handleLoginContinue()}>
					<Text style={styles.loginContinueButton_text}>Continue</Text>
				</Button>
			</View>
			<View style={styles.loginFooterTextContainer}>
				<Text style={styles.login_footer_text}>By clicking continue, you agree to our 
					<Text style={styles.login_footer_underline}>Terms and Conditions</Text>
				</Text>
				<Text style={styles.login_footer_text}>and have read out 
					<Text style={styles.login_footer_underline}>Privacy Policy</Text>
				</Text>
			</View>
		</View>
		
	);
};


const styles = StyleSheet.create({
	loginComponentContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 15,
		paddingBottom: 15,
		shadowColor: '#000',
    	shadowOffset: { width: 0, height: 0 },
    	shadowRadius: 5,
    	shadowOpacity: 0.4
	},
	loginText: {
		fontSize: 34,
		color: '#666666',
		marginBottom: 45
	},
	phoneInputContainer:{
		width: '80%'
	},
	phoneInputBox: {
		paddingLeft: 20,
		height:50
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
	loginFooterTextContainer:{
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 30,
		width: '70%'
	},
	login_footer_text: {
		color: '#bbb', 
		fontSize: 11
	},
	login_footer_underline: {
		textDecorationLine: 'underline' 
	}
});

export default LoginComponent;

