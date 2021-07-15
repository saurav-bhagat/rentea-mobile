import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Button } from 'native-base';
import { useNavigation } from '@react-navigation/core';

import { userDetailsStyles } from './userDetailsStyles';

const OwnerUserDetailsScreen = () => {
	const navigation = useNavigation();
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
					/>
					<TextInput
						style={userDetailsStyles.oudsPhoneInputBox}
						placeholderTextColor={'#aaa'}
						placeholder="Last Name"
					/>
					<TextInput
						style={userDetailsStyles.oudsPhoneInputBox}
						placeholderTextColor={'#aaa'}
						placeholder="Email ID"
					/>

					<Button
						rounded
						transparent
						style={userDetailsStyles.oudsContinueButton}
						onPress={() => navigation.navigate('AddBuilding')}
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
