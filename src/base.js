import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';



// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyDIw8Z9UQfzqW0ZYKh0-S5I-tX8v4VVe70",
	authDomain: "catch-of-the-day-76b13.firebaseapp.com",
	databaseURL: "https://catch-of-the-day-76b13.firebaseio.com",
};


// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Initialize rebase.
const base = Rebase.createClass( firebase.database() );

export { firebaseApp, base };