import React, { Suspense, useState, useEffect} from "react";
import VisualSlide from "../components/shared/VisualSlide";
import Footer from "../components/shared/Footer";
import { Outlet } from "react-router-dom";
import { useLoaderData, json, defer, Await } from "react-router-dom";
import { getDatabase, ref, get, onValue } from "firebase/database";
import { firebaseApp } from "../store/firebaseApp";

const Root = () => {
  const {events} = useLoaderData();

  return (
    <>
      <Suspense fallback={ <p style={{textAlign:'center'}}> Loading...</p>}>
        <Await resolve={events}>
          {(events) => <VisualSlide events={Object.values(events)}></VisualSlide>}
        </Await>
      </Suspense>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Root;


async function loadEvents(){
  
  try {
    const database = getDatabase(firebaseApp);
    const eventsRef = ref(database, "events");
    const snapshot = await get(eventsRef);

    if (snapshot.exists()) {
      const data = snapshot.val();
      console.log(data);
      console.log(typeof data)
      return data;
    } else {
      console.error("Veri bulunamadı");
      return null;
    }
  } catch (error) {
    console.error("Veri çekme hatası:", error);
    return null;
  }
}


export function loader() {
  
  return defer({
    events : loadEvents(),
  })
}






