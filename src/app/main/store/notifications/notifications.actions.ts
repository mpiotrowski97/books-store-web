import {createAction, props} from '@ngrx/store';
import {Notification} from '../../../core/models/notification';

export enum NotificationsActionsTypes {
  ADD_NOTIFICATION_ACTION_TYPE = '[MAIN] [NOTIFICATIONS] Add notification',
  ADD_SUCCESS_NOTIFICATION_ACTION_TYPE = '[MAIN] [NOTIFICATIONS] Add success notification',
  REMOVE_NOTIFICATION_ACTION_TYPE = '[MAIN] [NOTIFICATIONS] Remove notification'
}

export const addNotificationAction = createAction(
  NotificationsActionsTypes.ADD_NOTIFICATION_ACTION_TYPE,
  props<{notification: Notification}>()
);

export const addSuccessNotificationAction = createAction(
  NotificationsActionsTypes.ADD_SUCCESS_NOTIFICATION_ACTION_TYPE,
  props<{content: string}>()
);

export const removeNotificationAction = createAction(
  NotificationsActionsTypes.REMOVE_NOTIFICATION_ACTION_TYPE,
  props<{notification: Notification}>()
);

