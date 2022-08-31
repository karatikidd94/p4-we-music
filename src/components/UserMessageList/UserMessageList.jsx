import { useState } from "react";
import UserMessageItem from "../UserMessageItem/UserMessageItem";

export default function UserMessageList({ user, messages, profile }) {
      return (
        <main >
          <div className="messages-list">
            <h1 className="center-txt">Messages</h1>
            <div className="message-item">
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