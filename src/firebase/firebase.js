import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log('child_removed', snapshot.key, snapshot.val())
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log('child_changed', snapshot.key, snapshot.val())
// });

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   });
//   console.log(expenses);
// });

// database.ref('expenses').push({
//     description: 'Gum',
//     note: '',
//     amount: 195,
//     createdAt: 0
// });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         console.log(snapshot.val());
//     });

// database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// });

// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const value = snapshot.val();
//         console.log(value);
//     })
//     .catch((e) => {
//         console.log('Retrieve failed', e)
//     });

// database.ref().set({
//     name: 'John Joe',
//     age: 26,
//     stressLevel: 6,
//     job: {
//         title: 'Software Developer',
//         company: 'google'
//     },
//     location: {
//         city: 'Philadelphia',
//         country: 'United States'
//     }
// }).then(() => {
//     console.log('Set succeeded.');
// }).catch((e) => {
//     console.log('Set failed.', e);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'amazon',
//     'location/city': 'Seattle'
// });

// database.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('isSingle removed');
//     }).catch((e) => {
//         console.log('Removing isSingle failed', e);
//     });