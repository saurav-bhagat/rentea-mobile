import React, { useState } from 'react';
import { View, Text, TextInput, ActivityIndicator } from 'react-native';
import { Button } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { userDetailsStyles } from './userDetailsStyles';
import { isValidUserDetails } from '../../../helpers/addBuildingValidation';
import { addUserDetail } from '../../../redux/actions';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import useNotification from '../../../components/common/useNotification';

const OwnerUserDetailsScreen = () => {
	const dispatch = useDispatch();
	const addUserState = useSelector((state) => state.userDetail);
	const [fName, setFName] = useState('');
	const [lName, setLName] = useState('');
	const [email, setEmail] = useState('');

	const { expoPushToken } = useNotification();

	const handleUserDetailsSubmit = () => {
		let formData = {
			fName,
			lName,
			email,
			expoPushToken,
		};
		if (isValidUserDetails(formData)) {
			// dispatch SaveUserDetails Action, remove console.log
			dispatch(addUserDetail(formData));
		} else {
			alert('Enter fields properly');
		}
	};

	return (
		<KeyboardAwareScrollView>
			<View style={userDetailsStyles.oudsContainer}>
				<View style={userDetailsStyles.oudsTextContainer}>
					<Text style={userDetailsStyles.oudsWelcomeText}>
						Welcome!
					</Text>
					<Text style={userDetailsStyles.oudsShortText}>
						Enter your details below.
					</Text>
					<Text style={userDetailsStyles.oudsAsteriskText}>
						* Mandatory field.
					</Text>
				</View>

				<View style={userDetailsStyles.oudsFormContainer}>
					<TextInput
						style={userDetailsStyles.oudsPhoneInputBox}
						placeholderTextColor={'#aaa'}
						placeholder="First Name*"
						onChangeText={(val) => setFName(val)}
					/>
					<TextInput
						style={userDetailsStyles.oudsPhoneInputBox}
						placeholderTextColor={'#aaa'}
						placeholder="Last Name*"
						onChangeText={(val) => setLName(val)}
					/>
					<TextInput
						style={userDetailsStyles.oudsPhoneInputBox}
						placeholderTextColor={'#aaa'}
						placeholder="Email ID*"
						onChangeText={(val) => setEmail(val)}
					/>

					<Button
						rounded
						transparent
						style={userDetailsStyles.oudsContinueButton}
						onPress={() => handleUserDetailsSubmit()}
					>
						{addUserState.loading ? (
							<ActivityIndicator color="#ffffff" size="large" />
						) : (
							<Text
								style={
									userDetailsStyles.oudsContinueButton_text
								}
							>
								Continue
							</Text>
						)}
					</Button>
				</View>
			</View>
		</KeyboardAwareScrollView>
	);
};

export default OwnerUserDetailsScreen;
