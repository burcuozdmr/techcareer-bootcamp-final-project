import React, { Suspense } from "react";
import Events from "../components/Events";
import Filter from "../components/shared/Filter";
import { useLoaderData, Await } from "react-router-dom";

const EventsPage = () => {
  const { events } = useLoaderData();
  
  return (
    <div>
      <Suspense fallback={<p style={{ textAlign: "center" }}> Loading...</p>}>
        <Await resolve={events}>
          {(events) => <Events events={Object.values(events)}></Events>}
        </Await>
      </Suspense>
    </div>
  );
};

export default EventsPage;
