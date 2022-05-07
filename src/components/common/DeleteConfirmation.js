import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { ScaledSheet } from 'react-native-size-matters';

DeleteConfirmation = ({ onDismiss, onConfirm }) => {
	onClickDelete = () => {
		onConfirm();
		onDismiss();
	};

	return (
		<View>
			<View style={{ alignItems: 'center' }}>
				<Text style={deleteConfirmationStyles.title}>
					Are you sure you want to delete ?
				</Text>
			</View>
			<View style={deleteConfirmationStyles.btnsView}>
				<Button
					title="Yes"
					containerStyle={deleteConfirmationStyles.btnContainer}
					buttonStyle={deleteConfirmationStyles.btn}
					onPress={() => onClickDelete()}
				/>
				<Button
					title="No"
					onPress={() => onDismiss()}
					buttonStyle={deleteConfirmationStyles.btn}
					containerStyle={deleteConfirmationStyles.btnContainer}
				/>
			</View>
		</View>
	);
};

const deleteConfirmationStyles = ScaledSheet.create({
	title: { fontSize: '18@s', fontWeight: 'bold' },
	btnsView: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		paddingLeft: '10@s',
		paddingTop: '15@s',
	},
	btn: { paddingHorizontal: '15@s' },
	btnContainer: {
		marginLeft: '20@s',
	},
});

export default DeleteConfirmation;
