import React from 'react';
import { View, Text, KeyboardAvoidingView } from 'react-native';
import { Item, Input, Button, Content } from 'native-base';
import { useDispatch } from 'react-redux';

import { loginStyles } from './loginStyles';
import { sendOtp } from '../../redux/actions/authAction';

const LoginComponent = ({ navigation }) => {
	const dispatch = useDispatch();
	const handleLoginContinue = () => {
		console.log('Function called here');
		dispatch(sendOtp());
		navigation.navigate('OTP');
	};
	return (
		<View style={loginStyles.loginComponentContainer}>
			<Text style={loginStyles.loginText}>Log In/Sign Up</Text>

			<View style={loginStyles.phoneInputContainer}>
				<Item rounded>
					<Input
						style={loginStyles.phoneInputBox}
						placeholderTextColor={'#ccc'}
						placeholder="Enter Phone Number"
						keyboardType="numeric"
					/>
				</Item>
				<Button
					rounded
					transparent
					style={loginStyles.loginContinueButton}
					onPress={() => handleLoginContinue()}
				>
					<Text style={loginStyles.loginContinueButton_text}>
						Continue
					</Text>
				</Button>
			</View>
			<View style={loginStyles.loginFooterTextContainer}>
				<Text style={loginStyles.login_footer_text}>
					By clicking continue, you agree to our
					<Text style={loginStyles.login_footer_underline}>
						Terms and Conditions
					</Text>
				</Text>
				<Text style={loginStyles.login_footer_text}>
					and have read out
					<Text style={loginStyles.login_footer_underline}>
						Privacy Policy
					</Text>
				</Text>
			</View>
		</View>
	);
};

export default LoginComponent;
