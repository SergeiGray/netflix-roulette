import React from 'react';

import NotificationLabel from '../common-components/notification-label';

const ErrorMessage: React.FC = (): React.ReactElement => {
  return (
    <NotificationLabel message={'Error loading the database'}/>
  );
};

export default ErrorMessage;