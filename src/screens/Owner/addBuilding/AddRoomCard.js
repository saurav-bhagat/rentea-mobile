import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Portal, Modal } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { Icon } from 'react-native-elements';

import { removeRoomData } from '../../../redux/actions/ownerActions/addRoomAction';
import AddRoomForm from './AddRoomForm';
import { addRoomCardStyles } from './addRoomCardStyles';

const AddRoomCard = ({ roomDetail, floorCount }) => {
	const [modalVisible, setModalVisible] = useState(false);
	const dispatch = useDispatch();
	return (
		<View style={addRoomCardStyles.addRoomContainer}>
			<View style={addRoomCardStyles.addRoomRow}>
				<View style={addRoomCardStyles.addRoomCol1}>
					<Text style={addRoomCardStyles.roomDtlTxt}>
						{roomDetail.roomNo}
					</Text>
				</View>
				<View style={addRoomCardStyles.addRoomCol2}>
					<View>
						<Icon
							name={'edit'}
							color="#fff"
							onPress={() => {
								setModalVisible(true);
							}}
							size={20}
						/>
					</View>
					<View>
						<Icon
							name={'delete'}
							color="#fff"
							onPress={() => {
								dispatch(removeRoomData(roomDetail._id));
							}}
							size={20}
						/>
					</View>
				</View>
			</View>

			{/* Modal for edit room  */}
			<Portal>
				<Modal
					visible={modalVisible}
					onDismiss={() => {
						setModalVisible(false);
					}}
					contentContainerStyle={addRoomCardStyles.modalContainer}
				>
					<AddRoomForm
						floorCount={floorCount}
						dismissAddRoomForm={() => {
							setModalVisible(false);
						}}
						roomDetail={roomDetail}
					/>
				</Modal>
			</Portal>
		</View>
	);
};

export default AddRoomCard;
