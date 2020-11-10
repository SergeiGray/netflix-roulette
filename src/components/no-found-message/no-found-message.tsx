import React from 'react';

import NotificationLabel from '../common-components/notification-label';

const NoFoundMessage: React.FC = (): React.ReactElement => {
  return (
    <NotificationLabel message={'No movies found'}/>
  );
};

export default NoFoundMessage;