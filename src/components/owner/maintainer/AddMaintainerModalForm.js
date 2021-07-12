import React from 'react';
import { Button, Item, Label, Input } from 'native-base';
import { StyleSheet, View, Text } from 'react-native';
import Modal from 'react-native-modal';
import { SafeAreaView } from 'react-native-safe-area-context';

const AddMaintainerModalForm = (props) => {
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
			<Modal
				isVisible={props.isVisible}
				style={styles.addMModalContainer}
				onBackdropPress={props.toggleModal}
			>
				<View style={styles.modalContent}>
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
							style={styles.submitMaintainerButton}
						>
							<Text style={{ color: '#fff', fontSize: 17 }}>
								Submit
							</Text>
						</Button>
						<Button
							rounded
							onPress={props.toggleModal}
							style={styles.submitMaintainerButton}
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

const styles = StyleSheet.create({
	modalContent: {
		flex: 1,
		borderRadius: 30,
		padding: 30,
		backgroundColor: '#fff',
		maxHeight: 300,
		alignContent: 'center',
	},
	submitMaintainerButton: {
		marginTop: 20,
		backgroundColor: '#109FDA',
		paddingHorizontal: 18,
		borderWidth: 1,
		borderColor: '#ddd',
		justifyContent: 'center',
		width: 100,
		marginRight: 18,
	},
});

export default AddMaintainerModalForm;
