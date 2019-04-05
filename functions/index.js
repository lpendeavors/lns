const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();
const firestore = admin.firestore();
const settings = { timestampInSnapshots: true };
firestore.settings(settings);

const smsEndpoints = require('./lib/sms');
exports.sms = functions.https.onRequest(smsEndpoints);

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
    return admin.auth().setCustomUserClaims(userId, { company: company.id, isCompanyAdmin: true });
});

exports.updateContactId = functions.firestore
.document('contacts/{contactId}')
.onCreate((snap, context) => {
    console.log(`Contact successfully created: ${snap.id}`);
    console.log(`Copying id field for convenience...`);

    const contact = snap.data();
    contact.id = snap.id;
    return snap.ref.update(contact);
});

exports.updateGroupId = functions.firestore
.document('groups/{groupId}')
.onCreate((snap, context) => {
    console.log(`Group successfully created: ${snap.id}`);
    console.log(`Copying id field for convenience...`);

    const group = snap.data();
    group.id = snap.id;
    return snap.ref.update(group);
}); 

exports.updateSegmentId = functions.firestore
.document('segments/{segmentId}')
.onCreate((snap, context) => {
    console.log(`Segment successfully created: ${snap.id}`);
    console.log(`Copying id field for convenience...`);

    const segment = snap.data();
    segment.id = snap.id;
    return snap.ref.update(segment);
});
