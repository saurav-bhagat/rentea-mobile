import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import { Button } from 'native-base';
import { useNavigation } from '@react-navigation/core';
import { useDispatch } from 'react-redux';
import { userDetailsStyles } from './userDetailsStyles';
import { isValidUserDetails } from '../../../helpers/addBuildingValidation';
import { addUserDetail } from '../../../redux/actions/userDetailActions';

const OwnerUserDetailsScreen = () => {
	const navigation = useNavigation();
	const dispatch = useDispatch();
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
			console.log('Dispatching user details save action');
		} else {
			alert('Enter fields properly');
		}
	};

	return (
		<View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
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
							<Text
								style={
									userDetailsStyles.oudsContinueButton_text
								}
							>
								Continue
							</Text>
						</Button>
					</View>
				</View>
			</ScrollView>
		</View>
	);
};

export default OwnerUserDetailsScreen;
