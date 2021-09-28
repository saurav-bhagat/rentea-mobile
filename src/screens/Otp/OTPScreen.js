import React, { useState } from 'react';
import { View, Text, Alert, ActivityIndicator } from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import CountDown from 'react-native-countdown-component';
import { Button } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';

import { otpStyles } from './otpStyles';
import { verifyOtp } from '../../redux/actions';
import { sendOtp } from '../../redux/actions';
import SnackBar from '../../components/common/SnackBar';
import useSnack from '../../components/common/useSnack';

const OTPScreen = ({ route }) => {
	const dispatch = useDispatch();
	const authState = useSelector((state) => state.auth);
	const [code, setCode] = useState();
	const [random, setRandom] = useState(Math.random().toString());
	const { phoneNumber } = route.params;
	const {
		visible,
		onToggleSnackBar,
		onDismissSnackBar,
		setVisible,
		text,
		setText,
	} = useSnack();

	const handleOTPSubmit = (code) => {
		if (!code || code.length != 6) {
			// alert('OTP not valid');
			setVisible(true);
			setText('Invalid OTP');
			return;
		}
		if (code.length === 6) {
			dispatch(verifyOtp(phoneNumber, code));
		} else {
			// alert('Invalid otp');
			setVisible(true);
			setText('Invalid OTP');
		}
	};

	const resendOTP = () => {
		const resend = true;
		// Alert.alert('Login Code Sent', 'OTP is sent to your device.', [
		// 	{ text: 'OK' },
		// ]);
		setVisible(true);
		setText('OTP is sent to your device.');
		setRandom(Math.random().toString());
		dispatch(sendOtp(phoneNumber, resend));
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
			<View style={otpStyles.resendContainer}>
				<Text style={otpStyles.resendText}>
					Didn't Receive OTP ? Resend in
				</Text>
				<CountDown
					id={random}
					style={otpStyles.countDownContainer}
					until={60}
					onFinish={() => resendOTP()}
					size={15}
					digitStyle={{ backgroundColor: '#eff2ed' }}
					digitTxtStyle={{ color: '#109FDA' }}
					timeToShow={['S']}
					timeLabels={{ m: null, s: null }}
				/>
				<Text style={otpStyles.sText}>s</Text>
			</View>
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

			<SnackBar
				text={text}
				visible={visible}
				onDismissSnackBar={onDismissSnackBar}
				onToggleSnackBar={onToggleSnackBar}
			/>
		</View>
	);
};

export default OTPScreen;
