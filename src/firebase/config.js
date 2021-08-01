import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyD_uYpqxI-vTOkhjqjyuI1oU8dMy2pM9Ww',
  authDomain: 'chatroom-94057.firebaseapp.com',
  projectId: 'chatroom-94057',
  storageBucket: 'chatroom-94057.appspot.com',
  messagingSenderId: '908777532628',
  appId: '1:908777532628:web:1adf41f2e34cd18b57df41',
}

firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }
