import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Button } from 'native-base';
import { useNavigation } from '@react-navigation/core';
import { userDetailsStyles } from './userDetailsStyles';
import { isValidUserDetails } from '../../../helpers/addBuildingValidation';

const OwnerUserDetailsScreen = () => {
	const navigation = useNavigation();

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
			console.log('Dispatching user details save action');
		} else {
			alert('Enter fields properly');
		}
	};

	return (
		<View style={{ flex: 1, backgroundColor: 'white' }}>
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
						<Text style={userDetailsStyles.oudsContinueButton_text}>
							Continue
						</Text>
					</Button>
				</View>
			</View>
		</View>
	);
};

export default OwnerUserDetailsScreen;
