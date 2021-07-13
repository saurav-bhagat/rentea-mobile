import { DEV_ENDPOINT, PROD_ENDPOINT } from '@env';

const devEnvVariables = {
	API_URL: DEV_ENDPOINT,
};

const prodEnvVariables = {
	API_URL: PROD_ENDPOINT,
};

export default __DEV__ ? devEnvVariables : prodEnvVariables;
