import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import { Input } from 'react-native-elements/dist/input/Input';
import { useSelector, useDispatch } from 'react-redux';
import * as Print from 'expo-print';

import { sendOtp } from '../../redux/actions';
import { validatePhone } from '../../helpers/addBuildingValidation';
import SnackBar from '../../components/common/SnackBar';
import useSnack from '../../components/common/useSnack';
import { loginStyles } from './loginStyles';

const view = async (fileUrl) => {
	try {
		await Print.printAsync({ uri: fileUrl });
	} catch (err) {
		console.log('Error while viewing pdf', err);
	}
};

const viewPrivacyPolicy = async () => {
	try {
		await view(
			'https://res.cloudinary.com/ddwwsfeeh/image/upload/v1630601412/Privacy_Policy_RenTea_hpwm0f.pdf'
		);
	} catch (error) {
		console.log('Error while fetching privacy and policy');
	}
};

const viewTermsAndCondition = async () => {
	try {
		await view(
			'https://res.cloudinary.com/ddwwsfeeh/image/upload/v1630601412/RenTea_Terms_and_Conditions_ovwnum.pdf'
		);
	} catch (error) {
		console.log('Error while fetching Terms and condition');
	}
};

const viewRefundPolicy = async () => {
	try {
		await view(
			'https://res.cloudinary.com/ddwwsfeeh/image/upload/v1630601412/RenTea_Refund_and_Cancellation_fro5lp.pdf'
		);
	} catch (error) {
		console.log('Error while fetching refund policy');
	}
};

const LoginComponent = () => {
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
			setText('Enter a valid Phone Number');
			setVisible(true);
		}
	};
	return (
		<View style={loginStyles.loginContainer}>
			<View>
				<Text style={loginStyles.loginContainer_row1_txt}>Welcome</Text>
			</View>

			<View>
				<Text style={loginStyles.loginContainer_row2_txt}>
					Get started by{' '}
				</Text>
			</View>

			<View>
				<Text style={loginStyles.loginContainer_row3_txt}>
					creating your account
				</Text>
			</View>

			<View style={loginStyles.countryCodePlusPhoneNumberContainer}>
				<View style={loginStyles.countryCodeContainer}>
					<Text style={loginStyles.countryCodeText}>India (+91)</Text>
				</View>
				<View style={loginStyles.phoneNumberContainer}>
					<Input
						value={phone}
						onChangeText={(value) => {
							setPhone(value);
						}}
						keyboardType="numeric"
						inputContainerStyle={{
							borderBottomWidth: 0,
							paddingTop: 5,
							paddingLeft: 10,
						}}
						inputStyle={{ fontFamily: 'interLight' }}
						placeholder="Phone number ..."
					/>
				</View>
			</View>

			<View
				style={{
					marginTop: 30,
				}}
			>
				<Button
					title="Login"
					titleStyle={{ fontFamily: 'interRegular' }}
					loading={authState.loading ? true : false}
					onPress={() => {
						handleLoginContinue();
					}}
					buttonStyle={loginStyles.loginBtnText}
					containerStyle={loginStyles.loginBtnContainer}
				/>
			</View>

			<View style={loginStyles.policyAndTermContainer}>
				<View style={{ flex: 1 }}>
					<TouchableOpacity
						onPress={() => {
							viewPrivacyPolicy();
						}}
					>
						<Text style={loginStyles.privacyAndAgreementsText}>
							Privacy policy
						</Text>
					</TouchableOpacity>
				</View>
				<View style={{ flex: 2 }}>
					<TouchableOpacity
						onPress={() => {
							viewTermsAndCondition();
						}}
					>
						<Text style={loginStyles.privacyAndAgreementsText}>
							Terms and condition
						</Text>
					</TouchableOpacity>
				</View>
				<View style={{ flex: 1 }}>
					<TouchableOpacity
						onPress={() => {
							viewRefundPolicy();
						}}
					>
						<Text style={loginStyles.privacyAndAgreementsText}>
							Refund policy
						</Text>
					</TouchableOpacity>
				</View>
			</View>
			<View style={{ flex: 1 }}>
				<SnackBar
					visible={visible}
					text={text}
					onDismissSnackBar={onDismissSnackBar}
					onToggleSnackBar={onToggleSnackBar}
				/>
			</View>
		</View>
	);
};

export default LoginComponent;
