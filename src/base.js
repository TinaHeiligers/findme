//useing all of firebase
var Rebase = require('re-base');
var firebase = require('firebase/app');
var database = require('firebase/database');

var app = firebase.initializeApp({
  apiKey: "AIzaSyAvaFwNsvpy3aWg9rCC2MuCBIKyXBHwkXc",
  authDomain: "findme-138dc.firebaseapp.com",
  databaseURL: "https://findme-138dc.firebaseio.com",
  projectId: "findme-138dc",
  storageBucket: "findme-138dc.appspot.com"
});
var db = database(app);
var base = Rebase.createClass(db);

export default base;
