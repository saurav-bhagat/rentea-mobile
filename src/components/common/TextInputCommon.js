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
	inputStyle,
}) => {
	return (
		<Item floatingLabel style={[{ borderColor: '#666' }, style]}>
			<Label style={{ fontSize: 13 }}>{label}</Label>
			<Input
				style={[styles.defaultInputStyle, inputStyle]}
				onChangeText={onChangeText}
				value={value}
				keyboardType={keyboardType}
			/>
		</Item>
	);
};

const styles = StyleSheet.create({
	defaultInputStyle: {},
});

export default TextInputCommon;
