import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Button } from 'react-native-elements';

import { useDispatch, useSelector } from 'react-redux';
import { userDetailsStyles } from './userDetailsStyles';
import { isValidUserDetails } from '../../../helpers/addBuildingValidation';
import { addUserDetail } from '../../../redux/actions';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import useNotification from '../../../components/common/useNotification';

const OwnerUserDetailsScreen = () => {
	const dispatch = useDispatch();
	const addUserState = useSelector((state) => state.userDetail);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [address, setAddress] = useState('');
	const { expoPushToken } = useNotification();

	const handleUserDetailsSubmit = () => {
		let formData = {
			name,
			email,
			address,
			expoPushToken,
		};
		if (isValidUserDetails(formData)) {
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
						Get Started
					</Text>
					<Text style={userDetailsStyles.oudsShortText}>
						Enter your details
					</Text>
					{/* <Text style={userDetailsStyles.oudsAsteriskText}>
						* Mandatory field.
					</Text> */}
				</View>

				<View style={userDetailsStyles.oudsFormContainer}>
					<TextInput
						style={userDetailsStyles.oudsPhoneInputBox}
						placeholderTextColor={'#aaa'}
						placeholder="Full Name*"
						onChangeText={(val) => setName(val)}
					/>
					<TextInput
						style={userDetailsStyles.oudsPhoneInputBox}
						placeholderTextColor={'#aaa'}
						placeholder="Email ID*"
						onChangeText={(val) => setEmail(val)}
					/>
				</View>
				<View style={userDetailsStyles.oudsTextContainer}>
					<Text style={userDetailsStyles.oudsShortText2}>
						Enter your personal address
					</Text>
				</View>
				<View style={userDetailsStyles.oudsFormContainer}>
					<TextInput
						value={address}
						style={userDetailsStyles.oudsPhoneInputBox}
						placeholderTextColor={'#aaa'}
						placeholder="Address"
						onChangeText={(val) => setAddress(val)}
						multiline
						numberOfLines={4}
						textAlignVertical="top"
					/>
				</View>
				<View>
					<Button
						title="Continue"
						onPress={() => handleUserDetailsSubmit()}
						loading={addUserState.loading}
						buttonStyle={userDetailsStyles.oudsContinueButton}
						containerStyle={{ borderRadius: 10 }}
					/>
				</View>
			</View>
		</KeyboardAwareScrollView>
	);
};

export default OwnerUserDetailsScreen;
