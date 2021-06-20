import React from 'react';
import { Input, Item, Label } from 'native-base';
import { StyleSheet } from 'react-native';

const TextInputCommon = ({ label, style, name, handleTextChange }) => {
	return (
		<Item floatingLabel style={[{ borderColor: '#666' }, style ]}>
			<Label>{label}</Label>
			<Input 
				style={styles.inputStyle}
				onChangeText={(value) => handleTextChange(name, value)}
			/>
		</Item>
	);
};

const styles = StyleSheet.create({
	inputStyle: {
	
	}
});

export default TextInputCommon;