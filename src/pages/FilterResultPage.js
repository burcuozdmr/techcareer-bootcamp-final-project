import React, { useState, Suspense } from "react";
import FilterResult from "../components/FilterResult";
import { useLoaderData, Await } from "react-router-dom";
import { useFilterContext } from "../store/filter-context";

const FilterResultPage = () => {
  const { filteredData } = useFilterContext();

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}> Loading...</p>}>
      <Await resolve={filteredData}>
        {(filteredData) => (
          <FilterResult filteredData={filteredData}></FilterResult>
        )}
      </Await>
    </Suspense>
  );
};

export default FilterResultPage;
