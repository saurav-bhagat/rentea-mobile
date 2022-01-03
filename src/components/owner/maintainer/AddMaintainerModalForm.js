import React from 'react';
import { Button, Item, Label, Input } from 'native-base';
import { View, Text } from 'react-native';
import Modal from 'react-native-modal';
import { SafeAreaView } from 'react-native-safe-area-context';

import { addMaintainerStyles } from './addMaintainerStyles';

const AddMaintainerModalForm = (props) => {
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
			<Modal
				isVisible={props.isVisible}
				style={styles.addMModalContainer}
				onBackdropPress={props.toggleModal}
			>
				<View style={addMaintainerStyles.modalContent}>
					<Text style={{ fontSize: 24 }}>Add Maintainer Details</Text>
					<Item
						floatingLabel
						style={{ borderColor: '#666', margin: 10 }}
					>
						<Label>Name</Label>
						<Input />
					</Item>
					<Item
						floatingLabel
						style={{ borderColor: '#666', margin: 10 }}
					>
						<Label>Phone</Label>
						<Input />
					</Item>
					<View style={{ flexDirection: 'row' }}>
						<Button
							rounded
							onPress={props.toggleModal}
							style={addMaintainerStyles.submitMaintainerButton}
						>
							<Text style={{ color: '#fff', fontSize: 17 }}>
								Submit
							</Text>
						</Button>
						<Button
							rounded
							onPress={props.toggleModal}
							style={addMaintainerStyles.submitMaintainerButton}
						>
							<Text style={{ color: '#fff', fontSize: 17 }}>
								Close
							</Text>
						</Button>
					</View>
				</View>
			</Modal>
		</SafeAreaView>
	);
};

export default AddMaintainerModalForm;
