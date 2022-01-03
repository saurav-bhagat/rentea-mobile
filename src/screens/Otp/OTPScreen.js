import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import CountDown from 'react-native-countdown-component';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-native-elements';

import SnackBar from '../../components/common/SnackBar';
import useSnack from '../../components/common/useSnack';
import { verifyOtp } from '../../redux/actions';
import { sendOtp } from '../../redux/actions';
import { otpStyles } from './otpStyles';
import CustomKeyboard from './CustomKeyboard';
import CrossPlatformHeader from '../../components/common/CrossPlatformHeader';
import { navigate } from '../../navigation/rootNavigation';

const OtpScreen = ({ route }) => {
	const dispatch = useDispatch();
	const authState = useSelector((state) => state.auth);
	const [random, setRandom] = useState(Math.random().toString());
	const {
		visible,
		onToggleSnackBar,
		onDismissSnackBar,
		setVisible,
		text,
		setText,
	} = useSnack();
	const [otpValues, setOtpValues] = useState([]);
	const [sendAgainTextFlag, setSendAgainTextFlag] = useState(false);
	const { phoneNumber } = route.params;

	useEffect(() => {
		setVisible(true);
		setText('OTP is sent to your device.');
	}, []);

	const resendOTP = () => {
		const resend = true;
		const newOtpValues = [];
		setOtpValues(newOtpValues);
		setVisible(true);
		setText('OTP is sent to your device.');
		setSendAgainTextFlag(!sendAgainTextFlag);
		setRandom(Math.random().toString());
		dispatch(sendOtp(phoneNumber, resend));
	};

	const handleOTPSubmit = () => {
		const otp = otpValues.reduce((prev, curr) => prev + curr);
		dispatch(verifyOtp(phoneNumber, otp));
	};

	return (
		<View style={otpStyles.otpScreenSection}>
			<CrossPlatformHeader
				profile={false}
				backCallback={() => {
					navigate('Login');
				}}
			/>
			<View style={otpStyles.otpContainer}>
				<CountDown
					id={random}
					style={{ marginLeft: '-1%' }}
					until={59}
					onFinish={() => setSendAgainTextFlag(!sendAgainTextFlag)}
					size={15}
					digitStyle={{ backgroundColor: '#fff' }}
					digitTxtStyle={otpStyles.countDownDigitTextStyle}
					timeToShow={['M', 'S']}
					timeLabels={{ m: null, s: null }}
					showSeparator
					separatorStyle={{ color: '#000000', fontSize: 23 }}
				/>

				<View style={otpStyles.verificationTextContainer}>
					<Text style={otpStyles.verificationTextrow}>
						Enter verification code
					</Text>
					<Text style={otpStyles.verificationTextrow}>
						Sent on +91{phoneNumber.substr(0, 6)}****
						<TouchableOpacity
							onPress={() => {
								navigate('Login');
							}}
						>
							<Text style={otpStyles.editBtnTxt}> edit</Text>
						</TouchableOpacity>
					</Text>
				</View>
				<View style={otpStyles.otpInputSection}>
					<View style={otpStyles.otpTextBoxContainer}>
						<View style={otpStyles.otpTextBox}>
							<Text style={otpStyles.otpText}>
								{otpValues[0]}
							</Text>
						</View>
						<View style={otpStyles.otpTextBox}>
							<Text style={otpStyles.otpText}>
								{otpValues[1]}
							</Text>
						</View>
						<View style={otpStyles.otpTextBox}>
							<Text style={otpStyles.otpText}>
								{otpValues[2]}
							</Text>
						</View>
						<View style={otpStyles.otpTextBox}>
							<Text style={otpStyles.otpText}>
								{otpValues[3]}
							</Text>
						</View>
						<View style={otpStyles.otpTextBox}>
							<Text style={otpStyles.otpText}>
								{otpValues[4]}
							</Text>
						</View>
						<View style={otpStyles.otpTextBox}>
							<Text style={otpStyles.otpText}>
								{otpValues[5]}
							</Text>
						</View>
					</View>

					<View>
						<Button
							title="Continue"
							titleStyle={{ fontFamily: 'interRegular' }}
							loading={authState.loading ? true : false}
							onPress={handleOTPSubmit}
							buttonStyle={otpStyles.continueBtnStyle}
							disabled={otpValues.length !== 6}
						/>
					</View>
				</View>

				<TouchableOpacity style={otpStyles.sendAgainContainer}>
					<Text style={otpStyles.sendAgainTxt} onPress={resendOTP}>
						{sendAgainTextFlag && 'Send again'}
					</Text>
				</TouchableOpacity>

				<CustomKeyboard
					setOtpValues={setOtpValues}
					otpValues={otpValues}
				/>

				<SnackBar
					text={text}
					visible={visible}
					onDismissSnackBar={onDismissSnackBar}
					onToggleSnackBar={onToggleSnackBar}
				/>
			</View>
		</View>
	);
};

export default OtpScreen;
