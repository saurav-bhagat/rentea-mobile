import React, { useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { Button } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';

import { otpStyles } from './otpStyles';
import { verifyOtp } from '../../redux/actions';

const OTPScreen = ({ route }) => {
	const dispatch = useDispatch();
	const authState = useSelector((state) => state.auth);
	const [code, setCode] = useState();

	const handleOTPSubmit = (code) => {
		if (!code || code.length != 6) {
			alert('OTP not valid');
			return;
		}

		const { phoneNumber } = route.params;
		if (code.length === 6) {
			dispatch(verifyOtp(phoneNumber, code));
		} else {
			alert('Invalid otp');
		}
	};
	return (
		<View style={otpStyles.otpContainer}>
			<Text style={otpStyles.otpEnterText}>
				Enter OTP received on your mobile:
			</Text>
			<OTPInputView
				style={{ width: '80%', height: 200 }}
				pinCount={6}
				// code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
				onCodeChanged={(code) => {
					setCode(code);
				}}
				autoFocusOnLoad
				codeInputFieldStyle={otpStyles.underlineStyleBase}
				codeInputHighlightStyle={otpStyles.underlineStyleHighLighted}
				// onCodeFilled={(code) => {
				// 	handleOTPSubmit(code);
				// }}
			/>
			<Button
				rounded
				transparent
				style={otpStyles.loginContinueButton}
				onPress={() => {
					handleOTPSubmit(code);
				}}
			>
				{authState.loading ? (
					<ActivityIndicator color="#ffffff" size="large" />
				) : (
					<Text style={otpStyles.loginContinueButton_text}>
						Continue
					</Text>
				)}
			</Button>
		</View>
	);
};

export default OTPScreen;
