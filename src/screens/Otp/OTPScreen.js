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

	const setValueInOtpTxt = (value) => {
		otpValues.length !== 6 &&
			value !== -1 &&
			setOtpValues([...otpValues, value]);
		if (value === -1) {
			const newOtpValues = [...otpValues];
			newOtpValues.pop();
			setOtpValues(newOtpValues);
		}
	};

	const handleOTPSubmit = () => {
		const otp = otpValues.reduce((prev, curr) => prev + curr);
		dispatch(verifyOtp(phoneNumber, otp));
	};

	return (
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
					Type the verification code
				</Text>
				<Text style={otpStyles.verificationTextrow}>
					we've sent you
				</Text>
			</View>

			<View style={otpStyles.otpTextBoxContainer}>
				<View style={otpStyles.otpTextBox}>
					<Text style={otpStyles.otpText}>{otpValues[0]}</Text>
				</View>
				<View style={otpStyles.otpTextBox}>
					<Text style={otpStyles.otpText}>{otpValues[1]}</Text>
				</View>
				<View style={otpStyles.otpTextBox}>
					<Text style={otpStyles.otpText}>{otpValues[2]}</Text>
				</View>
				<View style={otpStyles.otpTextBox}>
					<Text style={otpStyles.otpText}>{otpValues[3]}</Text>
				</View>
				<View style={otpStyles.otpTextBox}>
					<Text style={otpStyles.otpText}>{otpValues[4]}</Text>
				</View>
				<View style={otpStyles.otpTextBox}>
					<Text style={otpStyles.otpText}>{otpValues[5]}</Text>
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

			<View style={otpStyles.otpKeyPadContainer}>
				<View style={otpStyles.otpKeyPadRow}>
					<TouchableOpacity
						onPress={() => {
							setValueInOtpTxt('1');
						}}
						style={otpStyles.otpKeyPadCol}
					>
						<Text style={otpStyles.key}>1</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => {
							setValueInOtpTxt('2');
						}}
						style={otpStyles.otpKeyPadCol}
					>
						<Text style={otpStyles.key}>2</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => {
							setValueInOtpTxt('3');
						}}
						style={otpStyles.otpKeyPadCol}
					>
						<Text style={otpStyles.key}>3</Text>
					</TouchableOpacity>
				</View>
				<View style={otpStyles.otpKeyPadRow}>
					<TouchableOpacity
						style={otpStyles.otpKeyPadCol}
						onPress={() => {
							setValueInOtpTxt('4');
						}}
					>
						<Text style={otpStyles.key}>4</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={otpStyles.otpKeyPadCol}
						onPress={() => {
							setValueInOtpTxt('5');
						}}
					>
						<Text style={otpStyles.key}>5</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={otpStyles.otpKeyPadCol}
						onPress={() => {
							setValueInOtpTxt('6');
						}}
					>
						<Text style={otpStyles.key}>6</Text>
					</TouchableOpacity>
				</View>
				<View style={otpStyles.otpKeyPadRow}>
					<TouchableOpacity
						style={otpStyles.otpKeyPadCol}
						onPress={() => {
							setValueInOtpTxt('7');
						}}
					>
						<Text style={otpStyles.key}>7</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={otpStyles.otpKeyPadCol}
						onPress={() => {
							setValueInOtpTxt('8');
						}}
					>
						<Text style={otpStyles.key}>8</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={otpStyles.otpKeyPadCol}
						onPress={() => {
							setValueInOtpTxt('9');
						}}
					>
						<Text style={otpStyles.key}>9</Text>
					</TouchableOpacity>
				</View>
				<View style={otpStyles.otpKeyPadRow}>
					<TouchableOpacity
						style={otpStyles.otpKeyPadCol}
					></TouchableOpacity>
					<TouchableOpacity
						style={otpStyles.otpKeyPadCol}
						onPress={() => {
							setValueInOtpTxt('0');
						}}
					>
						<Text style={otpStyles.key}>0</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={otpStyles.otpKeyPadCol}
						onPress={() => {
							setValueInOtpTxt(-1);
						}}
					>
						<Text style={otpStyles.key}>X</Text>
					</TouchableOpacity>
				</View>
			</View>

			<TouchableOpacity style={otpStyles.sendAgainContainer}>
				<Text style={otpStyles.sendAgainTxt} onPress={resendOTP}>
					{sendAgainTextFlag && 'Send again'}
				</Text>
			</TouchableOpacity>

			<SnackBar
				text={text}
				visible={visible}
				onDismissSnackBar={onDismissSnackBar}
				onToggleSnackBar={onToggleSnackBar}
			/>
		</View>
	);
};

export default OtpScreen;
