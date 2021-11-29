import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { otpStyles } from './otpStyles';

const CustomKeyboard = ({ setOtpValues, otpValues }) => {
	const keyValues = [
		'1',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
		'',
		'0',
		'-1',
	];
	const setValueInOtpTxt = (value) => {
		otpValues.length !== 6 &&
			value !== '-1' &&
			setOtpValues([...otpValues, value]);
		if (value === '-1') {
			const newOtpValues = [...otpValues];
			newOtpValues.pop();
			setOtpValues(newOtpValues);
		}
	};
	return (
		<View style={otpStyles.otpKeyPadContainer}>
			{keyValues.map((key, index) => {
				return (
					<View key={index} style={{ width: 100 }}>
						<TouchableOpacity
							onPress={() => {
								setValueInOtpTxt(key);
							}}
							style={{ marginTop: 20 }}
						>
							<Text style={otpStyles.key}>
								{key === '-1' ? 'X' : key}
							</Text>
						</TouchableOpacity>
					</View>
				);
			})}
		</View>
	);
};

export default CustomKeyboard;
