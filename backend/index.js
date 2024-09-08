const webPush = require('web-push');

// VAPID keys should be generated only once.
const vapidKeys = {
    publicKey: 'BHPfHBst_rPZX-3V5bYQi-84eg9uap3QRGf-1DfVs3KOW6RSv-QRFoSY3Ci5tbLE04xOU7VychycfSz1cMiO23I',
    privateKey: 'cgQeevrIuVEYKYcRj8ELAYvu5b_bkmK0LBgJt16gtBA'
};

webPush.setVapidDetails(
    'mailto:your-email@example.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);

const pushSubscription = {
    endpoint: 'https://fcm.googleapis.com/fcm/send/dMYD7MbrLTk:APA91bHKy2qnByDd2ABpyyVWY3ZAjgRnfhahFyiho6qsyTvElEhyrwbHfCCNNbcRNZL4_ewuUaZ6496p8iZsLwrLKWjWqqidhSyLYB204JWR-Y9_GfNQi6qLjXclJofjwz7O_zgDV6KR',
    keys: {
        p256dh: 'BNcLQgs3GnHLw-nrxY3eAg-nKyve9l13hov3oU45ko5FviMXpJB6rmNuoKpGlvxkEfKIm0ufHToH42dV5mGhsIA',
        auth: '6rGljFJ-pTJtqsBxtdY1QQ'
    }
};

const payload = JSON.stringify({
    notification: {
        title: 'Hello!',
        body: 'This is a test notificalotion.',
        icon: 'path/to/icon.png'
    }
});

webPush.sendNotification(pushSubscription, payload)
    .then(response => {
        console.log('Sent notification', response);
    })
    .catch(error => {
        console.error('Error sending notification', error);
    });
