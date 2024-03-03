import React, { Suspense } from "react";
import AdminTotal from "../admin/components/AdminTotal";
import { useLoaderData, Await, redirect } from "react-router-dom";
import { ref, set, push, remove, update } from "firebase/database";
import { database } from "../store/firebaseApp";

const AdminPage = () => {
  const { events } = useLoaderData();

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: "center" }}> Loading...</p>}>
        <Await resolve={events}>
          {(events) => <AdminTotal events={events}></AdminTotal>}
        </Await>
      </Suspense>
    </>
  );
};

export default AdminPage;

let eventCounter = 27;

export async function action({ request, params }) {
  const method = request.method;
  const data = await request.formData();

  if (method === "POST") {
    eventCounter++;
    const eventId = eventCounter;

    const eventData = {
      id: eventId,
      title: data.get("name"),
      date: data.get("date"),
      location: data.get("location"),
      shortInformation: data.get("info"),
      category: data.get("category"),
      imageUrl: data.get("imageURL"),
    };

    try {
      // Veritabanındaki "events" referansını alın
      const eventsRef = ref(database, "events");

      // Yeni bir ID ile veriyi ekleyin
      const newEventRef = push(eventsRef);

      // Yeni eklenen verinin ID'sini alın
      const newEventId = newEventRef.key;

      // Veriyi ekleyin
      await set(newEventRef, eventData);

      console.log("Data successfully added. New event ID:", newEventId);
    } catch (error) {
      console.error("An error occured:", error);
    }
    return redirect("/admin");
  } else if (method === "DELETE") {
    const eventId = data.get("eventId");

    const eventPath = `events/${eventId}`;
    const eventRef = ref(database, eventPath);
    remove(eventRef)
      .then(() => {
        console.log("Data deleted");
      })
      .catch((error) => {
        console.error("Deleting operation failed:", error);
      });
    return redirect("/admin");
  } else if (method === "PATCH") {
    const eventId = data.get("eventId");
    const newData = {
      title: data.get("finalname"),
      date: data.get("finaldate"),
      location: data.get("finallocation"),
      shortInformation: data.get("finalinfo"),
      category: data.get("finalcategory"),
      imageUrl: data.get("finalimageUrl"),
    };

    try {
      // Güncellenmek istenen verinin referansını alın
      const eventRef = ref(database, `events/${eventId}`);

      await update(eventRef, newData);

      console.log("Event updated");
    } catch (error) {
      console.error("When event updating, an error occured:", error);
    }
  }

  return null;
}
