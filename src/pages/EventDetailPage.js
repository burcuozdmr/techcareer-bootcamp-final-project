import React, { Suspense } from "react";
import EventDetail from "../components/EventDetail";
import { useLoaderData, Await } from "react-router-dom";

const EventDetailPage = () => {
  const { events } = useLoaderData();
  return (
    <div>
      <Suspense fallback={<p style={{ textAlign: "center" }}> Loading...</p>}>
        <Await resolve={events}>
          {(events) => (
            <EventDetail events={Object.values(events)}></EventDetail>
          )}
        </Await>
      </Suspense>
    </div>
  );
};

export default EventDetailPage;
