import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Card, CardItem, Body, Item, Label, Input } from 'native-base';

import TextInputCommon from '../../common/TextInputCommon';
import { roomAccordionStyles } from './addRoomAccordionStyles';

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
		</Card>
	);
};

export default AddRoomAccordionContent;
