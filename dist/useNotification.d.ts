import { NotificationMessage } from './types';
export declare const useNotification: (ns?: string) => {
    showNotification: (notification: Omit<NotificationMessage, "id">) => void;
    clearNotification: () => void;
};
