import { TOptionsBase } from 'i18next';
import { $Dictionary } from 'i18next/typescript/helpers';

export interface NotificationMessage {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
  autoHideDuration?: number;
  textTransOption?: TOptionsBase & $Dictionary;
  ns?: string;
}
type TypeNotification = 'like' | 'message' | 'comments' | 'follow';
interface UserNotification {
    uid: string;
    type: TypeNotification;
    postId?: string;
    typePost?: string;
    token: string;
    message?: string;
    data?: Date;
    read: boolean;
    notificationId: string;
    nickname?: string;
    titlePost?: string;
}

type NotificationConfig = Partial<Omit<NotificationMessage, 'id'>>;

export type { NotificationConfig, UserNotification };
