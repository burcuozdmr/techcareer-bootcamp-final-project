import React, { useState } from "react";
import AdminSearch from "./AdminSearch";
import AdminNavbar from "./AdminNavbar";

const AdminTotal = ({ events }) => {
  return (
    <>
      <AdminNavbar></AdminNavbar>
      <AdminSearch events={events}></AdminSearch>
    </>
  );
};

export default AdminTotal;
