import React from 'react';
import { View, Text } from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { Button } from 'native-base';
import { useNavigation } from '@react-navigation/core';
import { useDispatch, useSelector } from 'react-redux';

import { otpStyles } from './otpStyles';
import { verifyOtp } from '../../redux/actions/authAction';

const OTPScreen = ({ route }) => {
	const navigation = useNavigation();
	const dispatch = useDispatch();

	const error = useSelector((state) => state.auth.error);
	const msg = useSelector((state) => state.auth.msg);

	const handleOTPSubmit = (code) => {
		console.log(`Code is ${code}, you are good to go!`);
		const { phone } = route.params;
		if (code.length === 6) {
			dispatch(verifyOtp(phone, code));
			// Todo : For now we directly calling navigate not handling error from store
			navigation.navigate('OwnerUserDetails');
			// Todo : Find a correct position  to use this and  also a case when it occur
			// if(error){
			// 	alert(msg);
			//  }else{
			// 	 navigation.navigate('OwnerUserDetails');
			//  }
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
				// onCodeChanged = {code => { this.setState({code})}}
				autoFocusOnLoad
				codeInputFieldStyle={otpStyles.underlineStyleBase}
				codeInputHighlightStyle={otpStyles.underlineStyleHighLighted}
				onCodeFilled={(code) => {
					handleOTPSubmit(code);
				}}
			/>
			<Button rounded transparent style={otpStyles.loginContinueButton}>
				<Text style={otpStyles.loginContinueButton_text}>Continue</Text>
			</Button>
		</View>
	);
};

export default OTPScreen;
