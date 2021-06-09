import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LoginComponent = () => {
	return (
		<View style={styles.loginComponentContainer}>
			<Text>
				LoginComponent
			</Text>
		</View>
	);
};


const styles = StyleSheet.create({
	loginComponentContainer: {
		backgroundColor: '#f2f2f2',
		justifyContent: 'center',
		alignItems: 'center',
		flex:1,
		height:'60%'
	}
});

export default LoginComponent;

