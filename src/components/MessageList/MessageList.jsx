import { useState } from "react";
import MessageItem from "../MessageItem/MessageItem";

export default function MessageList({ user, setMessages, messages, profile }) {
    console.log("MessageList messages: ", messages);
    console.log("MessageList profile: ", profile);
    
      return (
        <main>
          <div className="messages-list">
            <h1>Messages</h1>
            <div>
              {messages.map((message, idx) => {
                if(profile._id == message.toUserId && user._id == message.fromUserId) {
                  return <MessageItem key={message._id} message={message} messages={messages} setMessages={setMessages} />
                }
              })}
            </div>
          </div>
        </main>
    );
}