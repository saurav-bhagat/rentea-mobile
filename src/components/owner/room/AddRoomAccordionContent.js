import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Card, CardItem, Body, Item, Label, Input, Button } from 'native-base';
import { useDispatch } from 'react-redux';

import TextInputCommon from '../../common/TextInputCommon';
import { roomAccordionStyles } from './addRoomAccordionStyles';
import { saveRoomData } from '../../../redux/actions';
import { validateRoomFields } from '../../../helpers/addBuildingValidation';

const AddRoomAccordionContent = ({ isData, data }) => {
	const dispatch = useDispatch();

	const [roomNo, setRoomNo] = isData ? useState(data.roomNo) : useState('');
	const [rent, setRent] = isData ? useState(data.rent) : useState('');
	const [security, setSecurity] = isData
		? useState(data.security)
		: useState('');
	const [floor, setFloor] = isData ? useState(data.floor) : useState('');
	const [sizeInFt, setSizeInFt] = isData
		? useState(data.sizeInFt)
		: useState('');
	const [bhk, setBhk] = isData ? useState(data.bhk) : useState('');

	const currentRoomData = {
		roomNo,
		rent,
		security,
		floor,
		sizeInFt,
		bhk,
	};

	const handleAddRoomClick = () => {
		if (validateRoomFields(currentRoomData)) {
			dispatch(saveRoomData(currentRoomData));
		} else {
			alert('Enter fields properly');
		}
	};

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
								<Input
									onChangeText={(e) => setRoomNo(e)}
									value={roomNo}
								/>
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
								<Input
									onChangeText={(val) => setRent(val)}
									value={rent}
									keyboardType="numeric"
								/>
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
								onChangeText={(val) => setSecurity(val)}
								value={security}
								keyboardType="numeric"
							/>
						</View>
						<View style={{ flex: 1 }}>
							<TextInputCommon
								label="Floor"
								style={{ width: '90%', alignSelf: 'flex-end' }}
								keyboardType="numeric"
								onChangeText={(val) => setFloor(val)}
								value={floor}
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
								onChangeText={(val) => setSizeInFt(val)}
								value={sizeInFt}
								keyboardType="numeric"
							/>
						</View>
						<View style={{ flex: 1 }}>
							<TextInputCommon
								label="BHK"
								style={{ width: '90%', alignSelf: 'flex-end' }}
								onChangeText={(val) => setBhk(val)}
								keyboardType="numeric"
								value={bhk}
							/>
						</View>
					</View>
				</Body>
			</CardItem>
			<CardItem footer style={{ justifyContent: 'flex-end' }}>
				<Button
					rounded
					transparent
					style={roomAccordionStyles.addRoomButton}
					onPress={() => handleAddRoomClick()}
				>
					<Text style={roomAccordionStyles.addRoomButton_text}>
						Add Room
					</Text>
				</Button>
			</CardItem>
		</Card>
	);
};

export default AddRoomAccordionContent;
