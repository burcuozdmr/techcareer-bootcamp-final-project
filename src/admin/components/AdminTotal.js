import React from "react";
import AdminSearch from "./AdminSearch";
import AdminNavbar from "./AdminNavbar";
import AdminCards from "./AdminCards";
import { useState } from "react";


const AdminTotal = ({events}) => {
  const [sendData, setSendData] = useState("");

  const eventDataHandler = (eventData) => {
    setSendData(eventData);
  };

  return (
    <>
      <AdminNavbar></AdminNavbar>
      <AdminSearch onEventData={eventDataHandler}></AdminSearch>
      <AdminCards sendData={sendData} events ={events}></AdminCards>
    </>
  );
};

export default AdminTotal;
