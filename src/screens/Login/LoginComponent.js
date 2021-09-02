import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Item, Input, Button } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';

import Constants from 'expo-constants';
import * as Print from 'expo-print';
import * as FileSystem from 'expo-file-system';

import { loginStyles } from './loginStyles';
import { sendOtp } from '../../redux/actions';
import { validatePhone } from '../../helpers/addBuildingValidation';
import { API_URL } from '@env';

const view = async (fileUrl) => {
	console.log('Inside', fileUrl);
	try {
		await Print.printAsync({ uri: fileUrl });
		console.log('Inside printAsync', fileUrl);

		// if (Platform.OS === 'ios') {
		// 	await Print.PrintAsync({ uri });
		// 	console.log('if');
		// } else {
		// 	console.log('Inside android', fileUrl, uri);
		// 	await Print.printAsync({ uri }); // this opens the pdf that can either be save or print
		// }
	} catch (err) {
		console.log('Error while viewing pdf', err);
	}
};

// const downloadFile = async (fileUrl, fileName) => {
// 	FileSystem.downloadAsync(fileUrl, FileSystem.documentDirectory + fileName)
// 		.then(({ uri }) => {
// 			console.log('Finished downloading to ', uri);
// 		})
// 		.catch((error) => {
// 			console.error(error);
// 		});
// };

const viewTermsAndConditions = async () => {
	console.log('Inside view');
	await view(
		'https://res.cloudinary.com/ddwwsfeeh/raw/upload/v1630419305/RenTea_Terms_and_Conditions_bve5ie.docx'
	);
};

const viewPrivacyPolicy = async () => {
	await view(
		'https://res.cloudinary.com/ddwwsfeeh/raw/upload/v1630419305/Privacy_Policy_RenTea_tflno9.docx'
	);
};
const viewRefundPolicy = async () => {
	await view(
		'https://res.cloudinary.com/ddwwsfeeh/raw/upload/v1630419305/RenTea_Refund_and_Cancellation_gnb0tl.docx'
	);
};

const LoginComponent = ({ navigation }) => {
	const dispatch = useDispatch();
	const authState = useSelector((state) => state.auth);

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
		</View>
	);
};

export default LoginComponent;
