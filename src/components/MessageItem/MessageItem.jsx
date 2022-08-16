import { useState } from "react";
import * as messagesAPI from '../../utilities/messages-api'

export default function MessageItem({ message, messages, setMessages}) {
    console.log("MessageItem messages: ", message);

   async function onDelete(messageId) {
      const messageDel = await messagesAPI.deleteMessage(messageId);
      const messagesIdx = messages.map(obj => obj._id).indexOf(messageId);
      const tempMessage = [ ...messages ];
      tempMessage.splice(messagesIdx, 1);
      setMessages(tempMessage);
    }

    async function onEdit(messageObj) {
      console.log("Edit Message: ", messageObj);
      const messageEdit = await messagesAPI.editMessage(messageObj);
      // alert("Edit It!");
    }
  return (
    <main >
      <ul>
        <li>{message.fromUser}: {message.content}
          <button onClick={() => onDelete(message._id)}>X</button>
          <button onClick={() => onEdit(message)}>Edit</button>
        </li>
        <hr />
        <br />
      </ul>
    </main>
  );
}