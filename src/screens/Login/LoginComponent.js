import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Item, Input, Button } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import * as Print from 'expo-print';

import { loginStyles } from './loginStyles';
import { sendOtp } from '../../redux/actions';
import { validatePhone } from '../../helpers/addBuildingValidation';
import SnackBar from '../../components/common/SnackBar';
import useSnack from '../../components/common/useSnack';

const view = async (fileUrl) => {
	try {
		await Print.printAsync({ uri: fileUrl });
	} catch (err) {
		console.log('Error while viewing pdf', err);
	}
};

const viewTermsAndConditions = async () => {
	await view(
		'https://res.cloudinary.com/ddwwsfeeh/image/upload/v1630601412/RenTea_Terms_and_Conditions_ovwnum.pdf'
	);
};

const viewPrivacyPolicy = async () => {
	await view(
		'https://res.cloudinary.com/ddwwsfeeh/image/upload/v1630601412/Privacy_Policy_RenTea_hpwm0f.pdf'
	);
};
const viewRefundPolicy = async () => {
	await view(
		'https://res.cloudinary.com/ddwwsfeeh/image/upload/v1630601412/RenTea_Refund_and_Cancellation_fro5lp.pdf'
	);
};

const LoginComponent = ({ navigation }) => {
	const dispatch = useDispatch();
	const authState = useSelector((state) => state.auth);
	const resend = false;

	const [phone, setPhone] = useState('');

	const {
		visible,
		text,
		setVisible,
		setText,
		onToggleSnackBar,
		onDismissSnackBar,
	} = useSnack();

	const handleLoginContinue = () => {
		if (validatePhone(phone)) {
			dispatch(sendOtp(phone, resend));
		} else {
			// alert('Enter valid Phone Number');
			setText('Enter a valid Phone Number');
			setVisible(true);
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
					{authState.loading ? (
						<ActivityIndicator color="#ffffff" size="large" />
					) : (
						<Text style={loginStyles.loginContinueButton_text}>
							Continue
						</Text>
					)}
				</Button>
			</View>
			<View style={loginStyles.loginFooterTextContainer}>
				<Text style={loginStyles.login_footer_text}>
					By clicking continue, you agree to our{' '}
					<TouchableOpacity onPress={viewTermsAndConditions}>
						<Text style={loginStyles.login_footer_underline}>
							Terms and Conditions
						</Text>
					</TouchableOpacity>
				</Text>
				<Text style={loginStyles.login_footer_text}>
					and have read out{' '}
					<TouchableOpacity onPress={viewPrivacyPolicy}>
						<Text style={loginStyles.login_footer_underline}>
							Privacy Policy
						</Text>
					</TouchableOpacity>
				</Text>
				<Text style={loginStyles.login_footer_text}>
					and
					<TouchableOpacity onPress={viewRefundPolicy}>
						<Text style={loginStyles.login_footer_underline}>
							Refund Policy
						</Text>
					</TouchableOpacity>
				</Text>
			</View>
			<SnackBar
				visible={visible}
				text={text}
				onDismissSnackBar={onDismissSnackBar}
				onToggleSnackBar={onToggleSnackBar}
				bottom={-25}
			/>
		</View>
	);
};

export default LoginComponent;
