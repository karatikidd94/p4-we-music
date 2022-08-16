import { useState } from "react";
import UserMessageItem from "../UserMessageItem/UserMessageItem";

export default function UserMessageList({ user, messages, profile }) {
    console.log("UserMessageList messages: ", messages);
    console.log("UserMessageList profile: ", profile);
      return (
        <main >
          <div className="messages-list">
            <h1>Messages</h1>
            <div>
              {messages.map((message, idx) => {
                if(profile._id == message.toUserId) {
                  return <UserMessageItem key={message._id} message={message} />
                }
              })}
            </div>
          </div>
        </main>
    );
}