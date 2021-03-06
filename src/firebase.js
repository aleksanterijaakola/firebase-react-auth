import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN ,
    databaseURL: process.env.FIREBASE_DATABASE_URL ,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID ,
    appId: process.env.FIREBASE_APP_ID 
})

export const auth = app.auth()
export default app