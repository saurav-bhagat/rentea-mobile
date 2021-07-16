import React, { useEffect, useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import axios from 'axios';

import { pickerStyles } from './pickerStyles';

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
				inputAndroidContainer: pickerStyles.pickerAndroidContainer,
				inputAndroid: pickerStyles.pickerTextStyle,
				placeholder: {
					fontSize: 12,
					paddingLeft: 20,
				},
			}}
			pickerProps={{
				mode: 'dropdown',
				itemStyle: pickerStyles.pickerTextStyle,
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

export default SelectStatePicker;
