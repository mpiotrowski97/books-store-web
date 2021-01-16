import {Notification} from '../../../core/models/notification';
import {Action, createReducer, createSelector, on} from '@ngrx/store';
import {addFailureNotificationAction, addSuccessNotificationAction, removeNotificationAction} from './notifications.actions';
import {NotificationType} from '../../../core/types/notification-type.enum';

export interface NotificationsState {
  notifications: Notification[];
}

const initialState: NotificationsState = {
  notifications: []
};

export function notificationsReducer(state: NotificationsState | undefined, action: Action): NotificationsState {
  return createReducer(
    initialState,
    on(addSuccessNotificationAction, (currentState, {content}) => ({
      ...currentState,
      notifications: [...currentState.notifications, {type: NotificationType.SUCCESS, content}]
    })),
    on(addFailureNotificationAction, (currentState, {content}) => ({
      ...currentState,
      notifications: [...currentState.notifications, {type: NotificationType.FAILURE, content}]
    })),
    on(removeNotificationAction, (currentState, {notification}) => ({
      ...currentState,
      notifications: currentState.notifications.filter(oldNotification => oldNotification !== notification)
    }))
  )(state, action);
}

export const notificationsSelector = createSelector(
  (state: { notifications: NotificationsState }) => state.notifications,
  (state: NotificationsState) => state.notifications
);
