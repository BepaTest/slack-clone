import React, { useState } from 'react';
import styled from 'styled-components';
import firebase from 'firebase';
import { auth, db } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function ChatInput({ channelName, channelId, chatRef }) {
  const [input, setInput] = useState('');
  const [user] = useAuthState(auth);

  const sendMessage = (event) => {
    event.preventDefault();

    console.log('hi');

    if (!channelId) {
      return false;
    }

    db.collection('rooms').doc(channelId).collection('messages').add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user.displayName,
      userImage: user.photoURL,
    });

    chatRef.current.scrollIntoView({ behavior: 'smooth' });

    setInput('');
  };

  return (
    <ChatInputContainer>
      <form onSubmit={sendMessage}>
        <input
          value={input}
          placeholder={`Message #${channelName}`}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }
`;
