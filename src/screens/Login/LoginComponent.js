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

const viewPrivacyAndAgreements = async () => {
	try {
		await view(
			'https://res.cloudinary.com/ddwwsfeeh/image/upload/v1630601412/RenTea_Terms_and_Conditions_ovwnum.pdf'
		);
		await view(
			'https://res.cloudinary.com/ddwwsfeeh/image/upload/v1630601412/Privacy_Policy_RenTea_hpwm0f.pdf'
		);
		await view(
			'https://res.cloudinary.com/ddwwsfeeh/image/upload/v1630601412/RenTea_Refund_and_Cancellation_fro5lp.pdf'
		);
	} catch (error) {
		console.log('error while fetching privacy and agreements');
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
						inputStyle={{}}
						placeholder="Phone number ..."
					/>
				</View>
			</View>

			<View
				style={{
					marginTop: 15,
				}}
			>
				<TouchableOpacity
					onPress={() => {
						viewPrivacyAndAgreements();
					}}
				>
					<Text style={loginStyles.privacyAndAgreementsText}>
						Privacy and agreements
					</Text>
				</TouchableOpacity>
			</View>

			<View
				style={{
					marginTop: 20,
				}}
			>
				<Button
					title="Login"
					loading={authState.loading ? true : false}
					onPress={() => {
						handleLoginContinue();
					}}
					buttonStyle={loginStyles.loginBtnText}
					containerStyle={loginStyles.loginBtnContainer}
				/>
			</View>
			<SnackBar
				visible={visible}
				text={text}
				onDismissSnackBar={onDismissSnackBar}
				onToggleSnackBar={onToggleSnackBar}
				bottom={45}
			/>
		</View>
	);
};

export default LoginComponent;
