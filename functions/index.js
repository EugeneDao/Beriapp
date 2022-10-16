const functions = require("firebase-functions");
const admin = require("firebase-admin");
const { database } = require("firebase-admin");
admin.initializeApp();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});
exports.getData = functions.https.onRequest((request, response) => {
admin.firestore().collection('Transaction').get()
.then(data =>{
  let transaction = [];
  data.forEach( doc ={
    transaction.push(doc.data());
  })
return response.json(transaction);

})
.catch(err => console.log)
});