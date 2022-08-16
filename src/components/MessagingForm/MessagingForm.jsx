import { useState } from 'react';
import { createMessage } from '../../utilities/messages-api';

export default function MessagingForm({ user, profile, setMessages, messages }) {
  const [ newMessage, setNewMessage ] = useState({
    fromUserId: '',
    fromUser: '',
    toUserId: '',
    toUser: '',
    content: '',
});

async function handleAddMessage(evt) {
  evt.preventDefault();
  const updatedMessage = {...newMessage, fromUserId: user._id, fromUser: user.name, toUserId: profile._id, toUser: profile.name}
  const message = await createMessage(updatedMessage);
  console.log("Handle Add Profile from ProfileForm: ", message);
  setMessages([ ...messages, message ]);
  setNewMessage({ fromUserId: '', fromUser: '', toUserId: '', toUser: '', content: '' });
}

function handleChange(evt) {
    setNewMessage({ ...newMessage, [evt.target.name]: evt.target.value });
}

  return (
    <div>
      <div>
        <form onSubmit={handleAddMessage} className="message-form">
          <label className='message-form-label'>Message</label>
          <input 
          name="content"
          value={newMessage.content}
          onChange={handleChange}
          placeholder={''}
          className="message-form-input"
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
