import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Item, Input, Button } from 'native-base';
import { useDispatch } from 'react-redux';

import { loginStyles } from './loginStyles';
import { sendOtp } from '../../redux/actions/authAction';
import { validatePhone } from '../../helpers/addBuildingValidation';

const LoginComponent = ({ navigation }) => {
	const dispatch = useDispatch();

	const [phone, setPhone] = useState('');

	const handleLoginContinue = () => {
		if (validatePhone(phone)) {
			dispatch(sendOtp(phone));
		} else {
			alert('Enter valid Phone Number');
		}
	};
	return (
		<View style={loginStyles.loginComponentContainer}>
			<Text style={loginStyles.loginText}>Log In/Sign Up</Text>

			<View style={loginStyles.phoneInputContainer}>
				<Item rounded>
					<Input
						style={loginStyles.phoneInputBox}
						value={phone}
						onChangeText={(val) => setPhone(val)}
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
