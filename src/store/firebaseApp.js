import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';


const firebaseConfig = {
  apiKey :'AIzaSyDqtWTLT0kvfhNR6vXtl5Ao2Ss8Z8goSc0',
  authDomain: 'techcareer-frontend-project.firebaseapp.com',
  projectId: 'techcareer-frontend-project',
  storageBucket: 'techcareer-frontend-project.appspot.com',
  messagingSenderId: '234559558348',
  databaseURL: 'https://techcareer-frontend-project-default-rtdb.europe-west1.firebasedatabase.app/',
};

 const firebaseApp = initializeApp(firebaseConfig);

// Firebase Realtime Database referansı
const database = getDatabase(firebaseApp);

export { firebaseApp, database };