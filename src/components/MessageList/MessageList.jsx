import { useState } from "react";
import MessageItem from "../MessageItem/MessageItem";

export default function MessageList({ user, messages, profile }) {
    console.log("MessageList messages: ", messages);
    console.log("MessageList profile: ", profile);
    
      return (
        <main >
        <div>
          <h1>Messages</h1>
          <div>
            {messages.map((message, idx) => {
              if(profile._id == message.toUser && user._id == message.fromUser) {
                return <MessageItem key={message._id} message={message} />
              }
            })}
          </div>
          
        </div>
      </main>
    );
}