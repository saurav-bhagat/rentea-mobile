import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Button } from 'native-base';


const OwnerUserDetailsScreen = () => {
	return(
		<View style={{ flex:1, backgroundColor: 'white' }}>
			<View style={styles.oudsContainer}>
				<View style={styles.oudsTextContainer}>
					<Text style={styles.oudsWelcomeText}>Welcome!</Text>
					<Text style={styles.oudsShortText}>Enter your details below.</Text>
				</View>
				
				<View style={styles.oudsFormContainer}>
					<TextInput 
						style={styles.oudsPhoneInputBox} 
						placeholderTextColor={'#aaa'} 
						placeholder='First Name'
					/>
					<TextInput 
						style={styles.oudsPhoneInputBox} 
						placeholderTextColor={'#aaa'} 
						placeholder='Last Name'
					/>
					<TextInput 
						style={styles.oudsPhoneInputBox} 
						placeholderTextColor={'#aaa'} 
						placeholder='Email ID'
					/>

					<Button rounded transparent style={styles.oudsContinueButton} onPress={() => console.log('Owner Details')}>
						<Text style={styles.oudsContinueButton_text}>Continue</Text>
					</Button>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	oudsContainer: {
		flex:1,
		marginTop: '20%',
		width: '85%',
		marginLeft: 'auto',
		marginRight: 'auto',
	},
	oudsTextContainer: {
	},
	oudsWelcomeText: {
		fontSize: 55,
		letterSpacing: 1.3,
		color: '#666666',
		marginBottom: 15
	},
	oudsShortText: {
		fontSize: 17,
		color: '#666666',
	},
	oudsFormContainer: {
	},
	oudsPhoneInputBox: {
		paddingLeft: 20,
		height: 55,
		marginTop: '12%',
		borderWidth: 0.1,
		borderColor: '#ddd',
		borderRadius: 25,
		padding: 10,
		backgroundColor: 'white',
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.30,
		shadowRadius: 4.65,
		elevation: 8,
	},
	oudsContinueButton: {
		width: '100%',
		marginTop: 40,
		backgroundColor: '#109FDA',
		justifyContent: 'center',
		height: 58,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.30,
		shadowRadius: 4.65,
		elevation: 8,
	},
	oudsContinueButton_text: {
		color: '#fff',
		fontSize: 22,
		fontWeight: 'bold',
		textTransform: 'uppercase',
		letterSpacing: 1
	},
});

export default OwnerUserDetailsScreen;