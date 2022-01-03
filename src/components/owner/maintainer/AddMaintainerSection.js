import React from 'react';
import { View } from 'react-native';

import TextInputCommon from '../../common/TextInputCommon';
import { addMaintainerStyles } from './addMaintainerStyles';

const AddMaintainerSection = ({ setMaintainerPhone, setMaintainerName }) => {
	return (
		<View style={addMaintainerStyles.addMaintainerContainer}>
			<View style={{ flex: 1 }}>
				<TextInputCommon
					label="Name"
					style={{ width: '90%', alignSelf: 'flex-start' }}
					name="MaintainerName"
					onChangeText={(val) => setMaintainerName(val)}
				/>
			</View>
			<View style={{ flex: 1 }}>
				<TextInputCommon
					label="Phone"
					style={{ width: '90%', alignSelf: 'flex-end' }}
					name="MaintainerPhone"
					onChangeText={(val) => setMaintainerPhone(val)}
					keyboardType="numeric"
				/>
			</View>
		</View>
	);
};

export default AddMaintainerSection;
