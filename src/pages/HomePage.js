import React from 'react'
import Categories from '../components/Categories'
import Filter from '../components/shared/Filter'
import { useLoaderData } from 'react-router-dom'
import { getDatabase, ref, get } from 'firebase/database';
import { firebaseApp} from '../store/firebaseApp';

const HomePage = () => {
  const events = useLoaderData();
  return (
    <div>
      <Filter></Filter>
      <Categories events ={events}></Categories>
    </div>
  )
}

export default HomePage

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