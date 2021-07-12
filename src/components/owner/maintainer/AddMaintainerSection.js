import React from 'react';
import { StyleSheet, View } from 'react-native';
import TextInputCommon from '../../common/TextInputCommon';


const AddMaintainerSection = ({setMaintainerPhone,setMaintainerName}) => {
	return (
		<View style={styles.addMaintainerContainer}>
			<View style={{ flex:1 }}>
				<TextInputCommon 
				            label="Name"
							style={{ width: '90%', alignSelf: 'flex-start' }}
							name="MaintainerName"
							onChangeText={(val)=>setMaintainerName(val)}
				/>
			</View>
			<View style={{ flex: 1 }}>
				<TextInputCommon 
				       label="Phone" 
					   style={{ width: '90%', alignSelf: 'flex-end' }}
					   name="MaintainerPhone"
					   onChangeText={(val)=>setMaintainerPhone(val)}
				/>
			</View>
		</View>
	);
};


const styles = StyleSheet.create({
	addMaintainerContainer: {
		flexDirection: 'row',
		marginTop: 13
	},
	addMaintainerButton: {
		paddingHorizontal: 18,
		borderWidth: 1,
		borderColor: '#ddd',
		marginTop: 40,
		backgroundColor: '#109FDA',
		alignSelf: 'center',
		bottom: 20
	},
	addMaintainerButton_text: {
		color: '#fff',
		fontSize: 17,
		letterSpacing: 1,
		textAlign: 'center'
	},
	maintainerDetails: { 
		flex:1,
		padding: 10,
	}
});

export default AddMaintainerSection;