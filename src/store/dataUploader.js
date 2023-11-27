
import { ref, set } from 'firebase/database';
import { database } from './firebaseApp';
import eventDataSet from './eventDataSet';



function uploadDataToFirebase () {
  const eventsRef = ref(database, 'events');

  set(eventsRef, eventDataSet)
    .then(() => {
      console.log('Veri başarıyla Firebase Realtime Database\'e yüklendi.');
    })
    .catch((error) => {
      console.error('Veri yükleme hatası:', error);
    });
}


export default uploadDataToFirebase;