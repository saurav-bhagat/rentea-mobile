import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import axios from 'axios';

const getStateList = async () => {
	const headers = {
		'X-CSCAPI-KEY': 'API_KEY',
	};
	console.log('going to make api call');
	axios
		.get('https://api.countrystatecity.in/v1/countries/IN/states', {
			headers,
		})
		.then((response) => {
			console.log(response.data);
		})
		.catch((error) => {
			console.log('error ' + error);
		});
};

const SelectStatePicker = ({
	handleTextChange,
	stateAddress,
	onValueChange,
}) => {
	// const [ stateSelect, setStateSelect ] = useState('');

	useEffect(() => {
		// getStateList();
	}, []);

	return (
		<RNPickerSelect
			onValueChange={onValueChange}
			useNativeAndroidPickerStyle={false}
			items={[
				{ label: 'Karnataka', value: 'karnataka' },
				{ label: 'Haryana', value: 'haryana' },
				{ label: 'Jharkhand', value: 'jharkhand' },
			]}
			style={{
				inputAndroidContainer: styles.pickerAndroidContainer,
				inputAndroid: styles.pickerTextStyle,
				placeholder: {
					fontSize: 12,
					paddingLeft: 20,
				},
			}}
			pickerProps={{
				mode: 'dropdown',
				itemStyle: styles.pickerTextStyle,
			}}
			placeholder={{
				label: 'Select State',
				value: 0,
				key: 'select Statesss',
				inputLabel: 'Select State',
				color: '#000000',
			}}
			placeholderTextColor="red"
			textInputProps={{
				style: {},
			}}
			value={stateAddress}
			InputAccessoryView={() => null}
		/>
	);
};

const styles = StyleSheet.create({
	pickerAndroidContainer: {
		borderBottomWidth: 0.7,
		height: 40,
		width: '100%',
	},
	pickerTextStyle: {
		fontSize: 18,
		paddingHorizontal: 10,
		paddingVertical: 8,
		borderWidth: 0.5,
		borderColor: 'purple',
		borderRadius: 8,
		color: '#000000',
		paddingRight: 30,
	},
});

export default SelectStatePicker;
