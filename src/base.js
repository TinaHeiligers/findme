import Rebase from 're-base';
// creating a connection to firebase
// auth rules on firebase will protect the info
const base = Rebase.createClass({
    apiKey: "AIzaSyAvaFwNsvpy3aWg9rCC2MuCBIKyXBHwkXc",
    authDomain: "findme-138dc.firebaseapp.com",
    databaseURL: "https://findme-138dc.firebaseio.com",
    projectId: "findme-138dc",
    storageBucket: "findme-138dc.appspot.com"
});

export default base;
