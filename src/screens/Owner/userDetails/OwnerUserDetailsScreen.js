import React, { useState } from 'react';
import {
	View,
	Text,
	TextInput,
	ScrollView,
	ActivityIndicator,
} from 'react-native';
import { Button } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { userDetailsStyles } from './userDetailsStyles';
import { isValidUserDetails } from '../../../helpers/addBuildingValidation';
import { addUserDetail } from '../../../redux/actions';
import { KeyboardAvoidingView } from 'react-native';

const OwnerUserDetailsScreen = () => {
	const dispatch = useDispatch();
	const addUserState = useSelector((state) => state.userDetail);
	const [fName, setFName] = useState('');
	const [lName, setLName] = useState('');
	const [email, setEmail] = useState('');

	const handleUserDetailsSubmit = () => {
		let formData = {
			fName,
			lName,
			email,
		};
		if (isValidUserDetails(formData)) {
			// dispatch SaveUserDetails Action, remove console.log
			dispatch(addUserDetail(formData));
		} else {
			alert('Enter fields properly');
		}
	};

	return (
		<KeyboardAvoidingView
			style={{
				flex: 1,
				paddingTop: 30,
				paddingHorizontal: 20,
			}}
			behavior="height"
		>
			<ScrollView>
				<View style={userDetailsStyles.oudsContainer}>
					<View style={userDetailsStyles.oudsTextContainer}>
						<Text style={userDetailsStyles.oudsWelcomeText}>
							Welcome!
						</Text>
						<Text style={userDetailsStyles.oudsShortText}>
							Enter your details below.
						</Text>
					</View>

					<View style={userDetailsStyles.oudsFormContainer}>
						<TextInput
							style={userDetailsStyles.oudsPhoneInputBox}
							placeholderTextColor={'#aaa'}
							placeholder="First Name"
							onChangeText={(val) => setFName(val)}
						/>
						<TextInput
							style={userDetailsStyles.oudsPhoneInputBox}
							placeholderTextColor={'#aaa'}
							placeholder="Last Name"
							onChangeText={(val) => setLName(val)}
						/>
						<TextInput
							style={userDetailsStyles.oudsPhoneInputBox}
							placeholderTextColor={'#aaa'}
							placeholder="Email ID"
							onChangeText={(val) => setEmail(val)}
						/>

						<Button
							rounded
							transparent
							style={userDetailsStyles.oudsContinueButton}
							onPress={() => handleUserDetailsSubmit()}
						>
							{addUserState.loading ? (
								<ActivityIndicator
									color="#ffffff"
									size="large"
								/>
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
			</ScrollView>
		</KeyboardAvoidingView>
	);
};

export default OwnerUserDetailsScreen;
