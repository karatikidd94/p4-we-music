import sendRequest from './send-request';

const BASE_URL = '/api/profiles';

export function getAll() {
    return sendRequest(BASE_URL);
}

export function getProfile() {
    return sendRequest(`${BASE_URL}/profile`);
}

export function createProfile(profileData) {
    return sendRequest(BASE_URL, 'POST', profileData);
}