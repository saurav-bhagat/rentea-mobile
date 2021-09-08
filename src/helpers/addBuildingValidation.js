export const validateText = (obj) => {
	const objValues = Object.values(obj);
	const result = objValues.some((ele) => {
		return ele === '' || !ele;
	});
	return !result;
};

export const validatePhone = (phone) => {
	const phoneRegex = /^\d{10}$/;
	return phone.match(phoneRegex);
};

export const validateCount = (obj) => {
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

export const validateRoomFields = (
	{ roomNo, rent, security, floor, sizeInFt, bhk },
	floorCount
) => {
	if (validateCount({ roomNo, rent, security, floor, sizeInFt, bhk })) {
		if (
			bhk > 0 &&
			bhk < 10 &&
			floor > 0 &&
			floor <= floorCount &&
			security <= rent &&
			sizeInFt >= 100
		) {
			return true;
		}
	}
	console.log('Room details validation failed');
	return false;
};
