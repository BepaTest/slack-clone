import React from 'react';
import styled from 'styled-components';

function Meaasge({ message, user, timestamp, userImage }) {
  let newDate = new Date(timestamp?.toDate().toUTCString());

  return (
    <MessageContainer>
      <img src={userImage} alt={user} />
      <MessageInfo>
        <h4>
          {user} <span>{newDate.toString()}</span>
          <p>{message}</p>
        </h4>
      </MessageInfo>
    </MessageContainer>
  );
}

export default Meaasge;

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;

  > img {
    height: 50px;
    border-radius: 8px;
  }
`;
const MessageInfo = styled.div`
  padding-left: 10px;

  > h4 > span {
    color: gray;
    font-weight: 300;
    margin-left: 4px;
    font-size: 10px;
  }
`;
