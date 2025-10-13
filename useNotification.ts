import { useCallback } from 'react';
import { useNotificationState } from './notificationAtom';
import { NotificationMessage } from './types';

  const useNotificationSet = () => {
    const [, setValue] = useNotificationState();
    return setValue;
  };

export const useNotification = (ns = 'notifications') => {
  const setNotification = useNotificationSet();

  const showNotification = useCallback(
    (notification: Omit<NotificationMessage, 'id'>) => {
      setNotification({
        ns,
        ...notification,
        id: Date.now().toString(),
      });
    },
    [ns, setNotification],
  );

  const clearNotification = useCallback(() => {
    setNotification(null);
  }, [setNotification]);

  return {
    showNotification,
    clearNotification,
  };
};
