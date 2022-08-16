import sendRequest from './send-request';

const BASE_URL = '/api/messages';

export function getAll() {
    return sendRequest(BASE_URL);
}

export function editMessage(message) {
    return sendRequest(`${BASE_URL}/${message._id}`, 'PUT', message);
}

export function deleteMessage(messageId) {
    return sendRequest(`${BASE_URL}/${messageId}`, 'DELETE');
}

export function createMessage(messageData) {
    return sendRequest(BASE_URL, 'POST', messageData);
}