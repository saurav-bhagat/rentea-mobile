import React, { useEffect, useState } from 'react';
import { Accordion } from 'native-base';
import { LogBox } from 'react-native';
import { useSelector } from 'react-redux';

import AddRoomAccordionContent from './AddRoomAccordionContent';
import AddRoomAccordionHeader from './AddRoomAccordionHeader';

const AddRoomAccordion = ({ roomCount }) => {
	const roomsFormData = useSelector((state) => state.addRoomDetails);
	const roomsInStore = roomsFormData.roomDetails;

	const [dataArray, setDataArray] = useState([]);

	const handleRoomAccordionClose = (item, index) => {
		console.log('Accordion closed');
	};

	const handleRoomAccordionOpen = (item, index) => {
		console.log('Accordion opened');
	};

	useEffect(() => {
		LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
		let tempArray = [];
		let roomsPresentLength = roomsInStore.length; // end index of present rooms
		let roomsStartLength = 0; // start index of present rooms

		for (let i = 0; i < roomCount; i++) {
			if (roomsPresentLength > 0) {
				tempArray.push({
					title: `Room ${i + 1}`,
					content: (
						<AddRoomAccordionContent
							isData={true}
							data={roomsInStore[roomsStartLength]}
						/>
					),
				});
				roomsStartLength++;
			} else {
				tempArray.push({
					title: `Room ${i + 1}`,
					content: <AddRoomAccordionContent isData={false} />,
				});
			}
			roomsPresentLength--;
		}
		setDataArray(tempArray);
	}, [roomsFormData]);

	const renderHeader = (item, expanded) => (
		<AddRoomAccordionHeader item={item} expanded={expanded} />
	);
	const renderContent = (item) => item.content;

	return (
		<Accordion
			dataArray={dataArray}
			animation={true}
			expanded={[]}
			renderHeader={(item, expanded) => renderHeader(item, expanded)}
			renderContent={(e) => renderContent(e)}
			onAccordionOpen={(item, index) =>
				handleRoomAccordionOpen(item, index)
			}
			onAccordionClose={(item, index) =>
				handleRoomAccordionClose(item, index)
			}
			style={{ backgroundColor: 'white' }}
		/>
	);
};

export default AddRoomAccordion;
