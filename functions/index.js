import firebase from "./src/LandingPage/components/config.js";

const functions = firebase.functions();

exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});

exports.getData = functions.https.onRequest((request, response) => {
  firebase
    .firestore()
    .collection("Transaction")
    .get()
    .then((data) => {
      let transaction = [];
      data.forEach((doc) => {
        transaction.push(doc.data());    
      });
      return response.json(transaction);
    })
    .catch((err) => console.log);
});
