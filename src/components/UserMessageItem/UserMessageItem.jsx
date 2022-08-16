import { useState } from "react";
import * as messagesAPI from '../../utilities/messages-api'
import EditMessagingForm from "../EditMessageForm/EditMessageForm";

export default function MessageItem({ message, messages, setMessages}) {
  const [ showEdit, setShowEdit ] = useState(false);

   async function onDelete(messageId) {
      const messageDel = await messagesAPI.deleteMessage(messageId);
      const messagesIdx = messages.map(obj => obj._id).indexOf(messageId);
      const tempMessage = [ ...messages ];
      tempMessage.splice(messagesIdx, 1);
      setMessages(tempMessage);
    }

    async function onEdit(content) {
      const messageEdit = await messagesAPI.editMessage(message, content);
      const messagesIdx = messages.map(obj => obj._id).indexOf(message._id);
      const tempMessage = [ ...messages ];
      tempMessage[messagesIdx].content = content.content;
      setMessages(tempMessage);
    }
  return (
    <main >
      <ul>
          <button onClick={() => onDelete(message._id)}>X</button>
          <span className="from-user">{message.fromUser}: <span className="from-user-message">{message.content}</span></span>
        <hr />
        <br />
      </ul>
    </main>
  );
}