import React from 'react';
import { Input, Item, Label } from 'native-base';
import { StyleSheet } from 'react-native';

const TextInputCommon = ({
	label,
	style,
	name,
	value,
	onChangeText,
	keyboardType,
}) => {
	return (
		<Item floatingLabel style={[{ borderColor: '#666' }, style]}>
			<Label>{label}</Label>
			<Input
				style={styles.inputStyle}
				onChangeText={onChangeText}
				value={value}
				keyboardType={keyboardType}
			/>
		</Item>
	);
};

const styles = StyleSheet.create({
	inputStyle: {},
});

export default TextInputCommon;
