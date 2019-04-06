const admin = require('firebase-admin');
const twilio = require('twilio');
// const twilioVerifyKey = functions.config().twilioverify.key;
const twilioVerifyKey = "YL34hgTarSz7O0fX6Wyy26X3D35gB70s";
const authy = require('authy')(twilioVerifyKey);

const cors = require('cors');
const express = require('express');
const app = express();

const firestore = admin.firestore();

app.use(cors({ origin: true }));

app.post('/sendSMSCode', (req, res) => {
    const phoneNumber = req.body.phone;
    const userId = req.body.user;

    if (userId) {
        const userProfile = firestore.collection('users').doc(userId);
        userProfile.set({
            id: userId,
            phone: phoneNumber,
            isSMSVerified: false
        });
    } else {
        return res.status(400).send({ message: "You must provide a user id" });
    }

    if (phoneNumber) {
        authy.phones()
        .verification_start(phoneNumber, "1", "sms", (err, response) => {
            if (err) return res.status(400).send(err);
            return res.status(200).send(true);
        });
    } else {
        return res.status(400).send({ message: "You must provide a phone number" });
    }
    
});

app.post('/verifySMSCode', (req, res) => {
    const code = req.body.code;
    const userId = req.body.user;
    let phoneNumber;

    if (!userId) {
        return res.statusCode(400).send({ message: "You must provide a user id" });
    } else if (!code) {
        return res.statusCode(400).send({ message: "You must provide a verification code id" });
    }

    firestore.collection('users').doc(userId).get()
        .then(profile => {
            phoneNumber = profile.get('phone');
            authy.phones()
            .verification_start(phoneNumber, "1", code, (err, response) => {
                if (err) return res.status(400).send(err);
                profile.set({
                    isSMSVerified: true
                });
                return res.status(200).send(true);
            });
        })
        .catch(err => res.status(404).send(err));
});

app.post('/sendSMSMessage', (req, res) => {
    console.log(req.body);
    res.sendStatus(200);
});

module.exports = app;