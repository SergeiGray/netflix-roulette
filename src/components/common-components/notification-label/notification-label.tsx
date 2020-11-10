import React from 'react';
import styled from 'styled-components';

const NotificationMessage =  styled.span`
  width: 100%;
  height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
  color: #ffffff;
  font-size: 2rem;
`

const NotificationLabel: React.FC<{message: string}> = ({ message }): React.ReactElement => {
  return <NotificationMessage>{message}</NotificationMessage>;
};

export default NotificationLabel;