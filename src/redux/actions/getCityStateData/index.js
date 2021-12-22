import { REACT_APP_STATE_FETCH_URL, REACT_APP_STATE_API_KEY, } from '@env';

export const fetchStates = () => {
    let headers = new Headers();
    headers.append(
        'X-CSCAPI-KEY',
        REACT_APP_STATE_API_KEY ?? 'NOAPIKEY'
    );

    const requestOptions = {
        method: 'GET',
        headers,
        redirect: 'follow',
    };

    return fetch(`${REACT_APP_STATE_FETCH_URL}`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
            return result;
        })
        .catch((error) => console.log('Error in fetching state data', error));
};

export const fetchCities = (cityCode) => {
    let headers = new Headers();
    headers.append(
        'X-CSCAPI-KEY',
        REACT_APP_STATE_API_KEY ?? 'NOAPIKEY'
    );

    const requestOptions = {
        method: 'GET',
        headers,
        redirect: 'follow',
    };

    return fetch(
        `${REACT_APP_STATE_FETCH_URL}/${cityCode}/cities`,
        requestOptions
    )
        .then((response) => response.json())
        .then((result) => {
            return result;
        })
        .catch((error) => console.log('Error in fetching city data', error));
};
