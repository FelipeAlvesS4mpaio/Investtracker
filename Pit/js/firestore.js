


const firebaseConfig = {
    apiKey: "AIzaSyAhAkwl6ODrVZMw8P8cUH7r7N6gsu6MIx8",
    authDomain: "investtracker-2e701.firebaseapp.com",
    projectId: "investtracker-2e701",
    storageBucket: "investtracker-2e701.appspot.com",
    messagingSenderId: "544814080293",
    appId: "1:544814080293:web:856a16a58045e76ab2facc",
    measurementId: "G-QC0RHTW4T0"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service  
const db = firebase.firestore();