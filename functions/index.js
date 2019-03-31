const functions = require('firebase-functions');
const admin = require('firebase-admin');

const smsEndpoints = require('./lib/sms');
exports.sms = functions.https.onRequest(smsEndpoints);

// Set company id to document reference id
exports.updateCompanyId = functions.firestore
    .document('companies/{companyId}')
    .onCreate((snap, context) => {
        const company = snap.data();
        company.id = snap.id;
        snap.ref.update(company);
    });

// Set user access control on create
