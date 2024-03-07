import React,{useState} from "react";
import AdminSearch from "./AdminSearch";
import AdminNavbar from "./AdminNavbar";
import AdminCards from "./AdminCards";



const AdminTotal = ({events}) => {
  const [filtered, setFiltered] = useState();
 
  
  const filteredEvents = (filteredEvents) => {
    setFiltered(filteredEvents);
    console.log(filtered);
  }
  
  return (
    <>
      <AdminNavbar></AdminNavbar>
      <AdminSearch events={events} onFilteredEvents={filteredEvents} ></AdminSearch>
      <AdminCards events ={events} filtered={filtered} ></AdminCards>
    </>
  );
};

export default AdminTotal;
