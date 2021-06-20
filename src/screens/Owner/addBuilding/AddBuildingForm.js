import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Item, Label, Input, Button, Header, Left, Body, Right, Title, Subtitle, Icon  } from 'native-base';

import BackIcon from '../../../components/common/BackIcon';
import SelectStatePicker from '../../../components/owner/building/SelectStatePicker';
import AddMaintainerSection from '../../../components/owner/maintainer/AddMaintainerSection';
import AddRoomSection from './AddRoomsSection';
import TextInputCommon from '../../../components/common/TextInputCommon';


const AddBuildingForm = () => {

	const navigation = useNavigation();
	const [ roomCount, setRoomCount ] = useState(roomCount);

	const handleTextChange = (name, value) => {
		console.log(name, value);
		if(name==='roomCount'){
			setRoomCount(value);
		}
	}

	return(
		<ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: 'white'}} nestedScrollEnabled={true}>
			<View style={styles.addBFcontainer}>
				<View style={styles.addBFHeader}>
					<BackIcon onPress={() => navigation.navigate('AddBuilding')} />
					<Text style={styles.addBFHeaderText}>Add Building Details</Text>
				</View>
				<View style={styles.addBFormContainer}>
					<TextInputCommon  label="Building Name" name="buildingName" handleTextChange={handleTextChange}/>
					<View style={{ flexDirection: 'row', marginTop:30 }}>
						<View style={{ flex:1 }}>
							<TextInputCommon  
								label="Number of Rooms" 
								style={{ width: '80%', alignSelf: 'flex-start' }} 
								name="roomCount" 
								handleTextChange={handleTextChange}
							/>
						</View>
						<View style={{ flex:1 }}>
							<TextInputCommon  
								label="Number of Floors" 
								style={{ width: '80%', alignSelf: 'flex-end' }} 
								name="floorCount" 
								handleTextChange={handleTextChange}
							/>
						</View>
					</View>

					<View style={{ marginTop: 30 }}>
						<SelectStatePicker />
					</View>

					<View style={{ flexDirection: 'row', marginTop:30 }}>
						<View style={{ flex:1 }}>
							<TextInputCommon  
								label="District" 
								style={{ width: '90%', alignSelf: 'flex-start' }} 
								name="district" 
								handleTextChange={handleTextChange}
							/>
						</View>
						<View style={{ flex:1 }}>
							<TextInputCommon  
								label="Pincode" 
								style={{ width: '90%', alignSelf: 'flex-end' }} 
								name="pincode" 
								handleTextChange={handleTextChange}
							/>
						</View>
					</View>
					
					<TextInputCommon  
						label="Street/Locality" 
						style={{ marginTop:30 }} 
						name="street"
						handleTextChange={handleTextChange}
					/>
			
					<Text style={{ fontSize: 22, marginTop: 35, color: '#666' }}>Maintainer:</Text>
					
					<AddMaintainerSection />

					<AddRoomSection roomCount={roomCount} />

					<Button 
						rounded 
						transparent 
						style={styles.submitBuildingDetailsButton}
						onPress={() => navigation.navigate('Home')}
					>
						<Text style={styles.submitBuildingDetailsButton_text}>Submit</Text>
					</Button>

				</View>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	addBFcontainer: {
		flex:1,
		paddingTop: '13%',
		width: '95%',
		marginLeft: 'auto',
		marginRight: 'auto',
		minHeight: '100%'
	},
	addBFHeader: {
		flexDirection: 'row',
		alignItems: 'flex-start',
	},
	addBFHeaderText: {
		flex:1,
		fontSize: 30,
		letterSpacing: 1.3,
		color: '#666666',
		marginBottom: 0,
	},
	addBFormContainer:{
		flex:1,
		padding: 10
	},
	addBFormInput: {
		borderBottomWidth: 1,
		height: 40,
    	margin: 12,
	},
	submitBuildingDetailsButton: {
		width: '100%',
		marginTop: 40,
		backgroundColor: '#109FDA',
		justifyContent: 'center',
		height: 58,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.30,
		shadowRadius: 4.65,
		elevation: 8,
	},
	submitBuildingDetailsButton_text: {
		color: '#fff',
		fontSize: 22,
		fontWeight: 'bold',
		textTransform: 'uppercase',
		letterSpacing: 1
	},
});

export default AddBuildingForm;