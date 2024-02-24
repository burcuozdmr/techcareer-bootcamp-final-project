import React, {Suspense} from 'react'
import AdminTotal from '../admin/components/AdminTotal';
import { useLoaderData, Await, redirect } from 'react-router-dom'
import { ref, set, push } from "firebase/database";
import { database } from '../store/firebaseApp';

const AdminPage = () => {
  const {events} = useLoaderData();
 
  return (
    <>
      <Suspense fallback={ <p style={{textAlign:'center'}}> Loading...</p>}>
        <Await resolve={events}>
          {(events) => <AdminTotal events={Object.values(events)}></AdminTotal>}
        </Await>
      </Suspense>
      
    </>
  )
}

export default AdminPage;

export async function action ({request,params}){
  const data = await request.formData();

  const eventData = {
    title : data.get('name'),
    date : data.get('date'),
    location : data.get('location'),
    shortInformation : data.get('info'),
    category : data.get('category'),
    imageUrl : data.get('imageURL'),
  }
 


  try {
    // Veritabanındaki "events" referansını alın
    const eventsRef = ref(database, 'events');

    // Yeni bir ID ile veriyi ekleyin
    const newEventRef = push(eventsRef);

    // Yeni eklenen verinin ID'sini alın
    const newEventId = newEventRef.key;

    // Veriyi ekleyin
    await set(newEventRef, eventData);

    console.log('Veri başarıyla eklendi. Yeni veri ID:', newEventId);
    
  } catch (error) {
    console.error('Veri eklenirken bir hata oluştu:', error);
  }
  return redirect('/admin')
}

