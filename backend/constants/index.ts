export const PORT = 4444;
export const isDev = process.argv.some((str) => str == "--dev");
export const NOFIFY_SCRIPT = `
(function() {
    const NativeNotification = window.Notification;
    window.Notification = function(title, options) {
    const notification = new NativeNotification(title, options);
    notification.addEventListener('click', function () {
        window.whatsAppBridge.notifyClick({ type: 'notification-click' }, '*');
    });
    return notification;
    };
    window.Notification.prototype = NativeNotification.prototype;
    window.Notification.permission = NativeNotification.permission;
    window.Notification.requestPermission = NativeNotification.requestPermission.bind(NativeNotification);
})();`;