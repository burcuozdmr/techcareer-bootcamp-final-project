import React, { useState, Suspense } from "react";
import Filter from "../components/shared/Filter";
import { Outlet, useLoaderData, Await } from "react-router-dom";

const FilterRoot = () => {
  const { events } = useLoaderData();
  
  return (
    <>
      <Suspense fallback={<p style={{ textAlign: "center" }}> Loading...</p>}>
        <Await resolve={events}>
          {(events) => <Filter events={Object.values(events)}></Filter>}
        </Await>
      </Suspense>
      <Outlet></Outlet>
    </>
  );
};

export default FilterRoot;
