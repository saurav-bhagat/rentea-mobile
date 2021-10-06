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
		if (obj && obj.rent && obj.rent.length > 0) {
			return true;
		}
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

export const isValidBankDetails = ({
	accountName,
	accountNumber,
	ifsc,
	bankName,
	beneficiaryName,
}) => {
	if (
		!validateText({
			accountName,
			accountNumber,
			ifsc,
			bankName,
			beneficiaryName,
		})
	) {
		return false;
	}
	const ifscRegex = /^[A-Z]{4}0[A-Z0-9]{6}$/;
	const accountNumberRegex = /[0-9]{9,18}/;
	return accountNumberRegex.test(accountNumber) && ifscRegex.test(ifsc);
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
			security >= rent &&
			sizeInFt >= 100
		) {
			return true;
		}
	}
	console.log('Room details validation failed');
	return false;
};
export const validateRoomFieldsForUpdate = ({
	roomNo,
	rent,
	floor,
	roomSize,
	roomType,
}) => {
	if (validateCount({ roomNo, rent, floor, roomSize, roomType })) {
		if (roomType > 0 && roomType < 10 && floor > 0 && roomSize >= 100) {
			return true;
		}
	}
	console.log('Room details validation failed');
	return false;
};
