import firebase from 'firebase/app';

import 'firebase/firestore';

import 'firebase/auth'

const config = {
    
        apiKey: "AIzaSyCNT9-u3SBF0iBLtzenFyZ9-ks4tE8Hsos",
        authDomain: "crowndb-c302f.firebaseapp.com",
        databaseURL: "https://crowndb-c302f.firebaseio.com",
        projectId: "crowndb-c302f",
        storageBucket: "crowndb-c302f.appspot.com",
        messagingSenderId: "692537111849",
        appId: "1:692537111849:web:b96fb007153e803c1f3338",
        measurementId: "G-CLEB9KKNFX"
    }
    firebase.initializeApp(config);
      
      export const createUserProfileDocument = async (userAuth, additionalData) => {
          if (!userAuth) return;
          
          const userRef = firestore.doc(`users/${userAuth.uid}`);
          
          const snapShot = await userRef.get();
          
          if (!snapShot.exists) {
              const { displayName, email } = userAuth;
              const createdAt = new Date();
              try {
                  await userRef.set({
                      displayName,
                      email,
                      createdAt,
                      ...additionalData
                    });
                } catch (error) {
                    console.log('error creating user', error.message);
                }
    }
    
    return userRef;
};
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;