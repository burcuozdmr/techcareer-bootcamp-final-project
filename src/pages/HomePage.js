import React, { Suspense } from "react";
import Categories from "../components/Categories";
import Filter from "../components/shared/Filter";
import { useLoaderData, Await } from "react-router-dom";

const HomePage = () => {
  const { events } = useLoaderData();
  return (
    <>
      <Filter></Filter>
      <Suspense fallback={<p style={{ textAlign: "center" }}> Loading...</p>}>
        <Await resolve={events}>
          {(events) => <Categories events={events}></Categories>}
        </Await>
      </Suspense>
    </>
  );
};

export default HomePage;
