const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();
const firestore = admin.firestore();

const smsEndpoints = require('./lib/sms');
exports.sms = functions.https.onRequest(smsEndpoints);

// Set company id to document reference id
exports.updateCompanyId = functions.firestore
    .document('companies/{companyId}')
    .onCreate((snap, context) => {
        console.log(`Company successfully created: ${snap.id}`);
        console.log(`Copying id field for convenience...`);

        const company = snap.data();
        company.id = snap.id;
        snap.ref.update(company)
            .then(() => console.log(`Company id field updated successfully.`))
            .catch(err => console.error(err));
            
        const userId = firestore.collection('users').doc(company.admin);
        console.log(`Settings custom claims for admin user: ${userId}`);
        admin.auth().setCustomUserClaims(userId, { company: company.id, isCompanyAdmin: true })
            .then(() => console.log(`Successfully update user claims for ${userId}`))
            .catch(err => console.error(err));
    });
