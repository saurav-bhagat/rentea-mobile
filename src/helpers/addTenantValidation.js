import {
	validatePhone,
	validateCount,
	validateText,
} from './addBuildingValidation';

export const isValidTenantData = ({
	name,
	email,
	phoneNumber,
	securityAmount,
}) => {
	if (
		validateText({
			name,
			// email,
		}) &&
		// validateCount({ securityAmount }) &&
		validatePhone(phoneNumber)
	) {
		return true;
	}
	console.log('Tenant add Data Validation failed');
	return false;
};
