import { Notifications, Permissions } from 'expo';

import { 
    getNotificationKey,
    removeNotificationKey,
    setNotificationKey 
} from './utility';

export const clearLocalNotification = () => {
    return removeNotificationKey()
        .then(Notifications.cancelAllScheduledNotificationsAsync);
}

export const setLocalNotification = (title, body) => {
    getNotificationKey()
        .then(JSON.parse)
        .then((data) => {
            if (data === null) {
                Permissions
                    .askAsync(Permissions.NOTIFICATIONS)
                    .then(({ status }) => {
                        if (status === "granted") {

                            Notifications.cancelAllScheduledNotificationsAsync();

                            let tomorrow = new Date();

                            tomorrow.setDate(tomorrow.getDate() + 1);
                            tomorrow.setHours(21);
                            tomorrow.setMinutes(30);

                            Notifications.scheduleLocalNotificationAsync(
                                createNotification(title, body),
                                {
                                    time: tomorrow,
                                    repeat: "day"
                                }
                            );

                            setNotificationKey(true);
                        }
                    })
            }
        })
}

/**
 * Private methods
 */

const createNotification = (title, body) => {
    return {
        title,
        body,
        ios: {
            sound: true,
        },
        android: {
            sound: true,
            priority: "high",
            sticky: false,
            vibrate: true,
        }
    };
}