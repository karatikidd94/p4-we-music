import { useState } from "react";
import MessageItem from "../MessageItem/MessageItem";

export default function UserMessageList({ user, messages, profile }) {
    console.log("UserMessageList messages: ", messages);
    console.log("UserMessageList profile: ", profile);
      return (
        <main >
        <div>
          <h1>Messages</h1>
          <div>
            {messages.map((message, idx) => {
              if(profile._id == message.toUser) {
                return <MessageItem key={message._id} message={message} />
              }
            })}
          </div>
        </div>
      </main>
    );
}