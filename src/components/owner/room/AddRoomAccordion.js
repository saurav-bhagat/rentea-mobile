import React, { useEffect, useState } from 'react';
import { Accordion } from 'native-base';
import { LogBox } from 'react-native';

import AddRoomAccordionContent from './AddRoomAccordionContent';
import AddRoomAccordionHeader from './AddRoomAccordionHeader';

const AddRoomAccordion = ({ roomCount }) => {
	const [dataArray, setDataArray] = useState([]);

	useEffect(() => {
		LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
		let tempArray = [];
		for (let i = 0; i < roomCount; i++) {
			tempArray.push({
				title: 'Room Name',
				content: <AddRoomAccordionContent />,
			});
		}
		setDataArray(tempArray);
	}, []);

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
			onAccordionOpen={(item, index) => console.log('')}
			onAccordionClose={(item, index) => console.log('')}
			style={{ backgroundColor: 'white' }}
		/>
	);
};

export default AddRoomAccordion;
