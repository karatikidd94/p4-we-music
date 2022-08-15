import * as messagesAPI from './messages-api';

export async function message(messageData) {
    console.log("Service Message");
    const response = await messagesAPI.createMessage(messageData);
    return response;
}