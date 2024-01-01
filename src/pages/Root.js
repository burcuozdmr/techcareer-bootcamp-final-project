import React from 'react'
import VisualSlide from '../components/shared/VisualSlide'
import Footer from '../components/shared/Footer'
import { Outlet } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'
import { getDatabase, ref, get } from 'firebase/database';
import { firebaseApp} from '../store/firebaseApp';

const Root = () => {
  const events = useLoaderData();
  return (
    <>
      <VisualSlide events={events}></VisualSlide>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default Root

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