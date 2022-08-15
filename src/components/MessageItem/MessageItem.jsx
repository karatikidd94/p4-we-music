import { useState } from "react";
import * as messagesAPI from '../../utilities/messages-api'

export default function MessageItem(props) {
    console.log("MessageItem messages: ", props.message);

    const [ message, setMessage ] = useState([]);

   async function onDelete(messageId) {
      const messageDel = await messagesAPI.deleteMessage(messageId)
      setMessage(messageDel);
    }
  return (
    <main >
      <ul>
        <li>{props.message.fromUser}: {props.message.content}
          <button onClick={() => onDelete(props.message._id)}>X</button>
        </li>
        <hr />
        <br />
      </ul>
    </main>
  );
}