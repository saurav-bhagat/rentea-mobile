const validateText = (obj) => {
	const objValues = Object.values(obj);
	const result = objValues.some((ele) => {
		return ele === '' || !ele;
	});
	return !result;
};

const validatePhone = (phone) => {
	return phone && phone.length === 10;
};

const validateCount = (obj) => {
	const objValues = Object.values(obj);
	const result = objValues.every((e) => {
		return e > 0;
	});
	return result;
};

export const isValidBuildingData = ({
	buildingName,
	roomCount,
	floorCount,
	street,
	district,
	pinCode,
	stateAddress,
	maintainerName,
	maintainerPhone,
}) => {
	if (
		validateText({
			buildingName,
			street,
			district,
			stateAddress,
		}) &&
		validateCount({ roomCount, floorCount, pinCode })
		// maintainer Data can be optional
	) {
		return true;
	}
	console.log('Building Data Validation failed');
	return false;
};

export const isValidUserDetails = ({ fName, lName, email }) => {
	if (validateText({ fName, lName, email })) {
		return true;
	}
	console.log('User details validation failed');
	return false;
};
