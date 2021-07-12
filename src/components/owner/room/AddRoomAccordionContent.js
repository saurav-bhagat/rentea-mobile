import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, CardItem, Body, Item, Label, Input, Button } from 'native-base';
import TextInputCommon from '../../common/TextInputCommon';

const AddRoomAccordionContent = () => {
	const [roomNo, setRoomNo] = useState('');

	return (
		<Card style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto' }}>
			<CardItem header>
				<Text style={{ fontSize: 22 }}>Room {roomNo}</Text>
			</CardItem>
			<CardItem style={{ paddingTop: 0, paddingBottom: 30 }}>
				<Body>
					<View style={{ flexDirection: 'row', marginTop: 5 }}>
						<View style={{ flex: 1 }}>
							<Item
								floatingLabel
								style={{
									borderColor: '#666',
									width: '90%',
									alignSelf: 'flex-start',
								}}
							>
								<Label>Room No.</Label>
								<Input onChangeText={(e) => setRoomNo(e)} />
							</Item>
						</View>
						<View style={{ flex: 1 }}>
							<Item
								floatingLabel
								style={{
									borderColor: '#666',
									width: '90%',
									alignSelf: 'flex-end',
								}}
							>
								<Label>Rent Amount</Label>
								<Input />
							</Item>
						</View>
					</View>
					<View style={{ flexDirection: 'row', marginTop: 5 }}>
						<View style={{ flex: 1 }}>
							<TextInputCommon
								label="Security Amount"
								style={{
									width: '90%',
									alignSelf: 'flex-start',
								}}
							/>
						</View>
						<View style={{ flex: 1 }}>
							<TextInputCommon
								label="Floor"
								style={{ width: '90%', alignSelf: 'flex-end' }}
							/>
						</View>
					</View>
					<View style={{ flexDirection: 'row', marginTop: 5 }}>
						<View style={{ flex: 1 }}>
							<TextInputCommon
								label="Size(sq. ft.)"
								style={{
									width: '90%',
									alignSelf: 'flex-start',
								}}
							/>
						</View>
						<View style={{ flex: 1 }}>
							<TextInputCommon
								label="BHK"
								style={{ width: '90%', alignSelf: 'flex-end' }}
							/>
						</View>
					</View>
				</Body>
			</CardItem>
			{/* <CardItem footer style={{ justifyContent: 'flex-end' }}>
				<Button 
					rounded 
					transparent 
					style={styles.addRoomButton} 
					onPress={() => toggleModal()}
				>
						<Text style={styles.addRoomButton_text}>Submit</Text>
				</Button>
            </CardItem> */}
		</Card>
	);
};

const styles = StyleSheet.create({
	addRoomButton: {
		paddingHorizontal: 18,
		borderWidth: 1,
		borderColor: '#ddd',
		marginTop: 10,
		backgroundColor: '#109FDA',
		alignSelf: 'center',
		bottom: 5,
	},
	addRoomButton_text: {
		color: '#fff',
		fontSize: 17,
		letterSpacing: 1,
		textAlign: 'center',
	},
});

export default AddRoomAccordionContent;
