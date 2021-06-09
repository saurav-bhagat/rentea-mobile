import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InputActionSheet from './InputActionSheet';

const LoginScreen = () => {
	return (
		<View style={styles.loginContainer}>
			{/* <Text>Login Screen</Text> */}
			<InputActionSheet />
		</View>
	);
};

const styles = StyleSheet.create({
	loginContainer: {
		flex : 1,
		justifyContent: 'center',
		alignItems: 'center',
		zIndex: -1,
		// backgroundColor: 'skyblue'
	}
});

export default LoginScreen;