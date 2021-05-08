import firebase from 'firebase'
// Firebase Config from App Settings
var firebaseConfig = {
apiKey: "AIzaSyCP-FvKLrkNtTxcSFtteLeo8b5EV9KYwjw",
authDomain: "cinespire-7ab7d.firebaseapp.com",
projectId: "cinespire-7ab7d",
storageBucket: "cinespire-7ab7d.appspot.com",
messagingSenderId: "519022354411",
appId: "1:519022354411:web:5fbd66f07b14b2d44683ae",
measurementId: "G-M0RDEZ4NVW"
};

firebase.initializeApp(firebaseConfig);

// export const addMovie = (movie) => {
//     const MovieReference = firebase.database().ref('')
// }


export default firebase;