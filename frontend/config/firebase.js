import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyBt7-lGQ3TVpH9x2-qBmhu2pfcVNiAYQes',
  authDomain: 'developerroadmapchecker.firebaseapp.com',
  databaseURL: 'https://developerroadmapchecker.firebaseio.com',
  projectId: 'developerroadmapchecker',
  storageBucket: 'developerroadmapchecker.appspot.com',
  messagingSenderId: '836723483585'
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export default firebase