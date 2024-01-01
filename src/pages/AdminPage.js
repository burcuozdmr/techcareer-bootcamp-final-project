import React from 'react'
import AdminTotal from '../admin/components/AdminTotal';
import { useLoaderData } from 'react-router-dom'
import { getDatabase, ref, get } from 'firebase/database';
import { firebaseApp} from '../store/firebaseApp';

const AdminPage = () => {
  const events = useLoaderData();
  return (
      <AdminTotal events={events}></AdminTotal>
  )
}

export default AdminPage

export async function loader() {
  
  try {
    const database = getDatabase(firebaseApp);
    const eventsRef = ref(database, 'events');
    const snapshot = await get(eventsRef);

    if(snapshot.exists()){

      const data = snapshot.val();
      console.log( data);
      return data;
    }else{
      console.error('Veri bulunamadı');
      return null;
    }
  } catch (error) {
    console.error('Veri çekme hatası:', error);
    return null;
  }

}