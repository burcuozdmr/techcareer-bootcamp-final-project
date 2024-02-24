import React, { Suspense } from "react";
import Categories from "../components/Categories";
import Filter from "../components/shared/Filter";
import { useLoaderData, Await } from "react-router-dom";

const HomePage = () => {
  const { events } = useLoaderData();

  return (
    <>

      <Suspense fallback={<p style={{ textAlign: "center" }}> Loading...</p>}>
        <Await resolve={events}>
          {(events) => <Categories events={Object.values(events)}></Categories>}
        </Await>
      </Suspense>
    </>
  );
};

export default HomePage;
