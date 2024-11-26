import {initializeApp} from 'firebase/app'
import {getAuth,GoogleAuthProvider} from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyC9CBMuXFrIu1PPFgXdP3dC4z9Br_neiBQ",
    authDomain: "signup-1b335.firebaseapp.com",
    projectId: "signup-1b335",
    storageBucket: "signup-1b335.firebasestorage.app",
    messagingSenderId: "882107096948",
    appId: "1:882107096948:web:d31e11911690bbc2b55621",
    measurementId: "G-3PJ27GFZPS"
  };

  const app = initializeApp(firebaseConfig)

  export const auth = getAuth(app);
  export const googleProvider = new GoogleAuthProvider();