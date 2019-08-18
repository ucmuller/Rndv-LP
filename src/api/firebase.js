import firebase from 'firebase'

var firebaseConfig = {
  apiKey: 'AIzaSyDpMTJTz9-E2CxbO9zxFMPyZcC1mi5OqBw',
  authDomain: 'rndv-lp.firebaseapp.com',
  databaseURL: 'https://rndv-lp.firebaseio.com',
  projectId: 'rndv-lp',
  storageBucket: '',
  messagingSenderId: '404055332098',
  appId: '1:404055332098:web:1faf29c1b7abc2b3'
}
firebase.initializeApp(firebaseConfig)
export const functions = firebase.functions()
