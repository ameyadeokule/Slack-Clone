import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

var firebaseConfig = {
  apiKey: 'AIzaSyCJXQow6NI_W8DqlPTUoT4jvipvVjw633M',
  authDomain: 'react-clone-slackdev.firebaseapp.com',
  databaseURL: 'https://react-clone-slackdev.firebaseio.com',
  projectId: 'react-clone-slackdev',
  storageBucket: 'react-clone-slackdev.appspot.com',
  messagingSenderId: '560153554871',
  appId: '1:560153554871:web:5ee680406603f729a10232',
  measurementId: 'G-T0XMRFFE7Q',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
//firebase.analytics()

export default firebase
