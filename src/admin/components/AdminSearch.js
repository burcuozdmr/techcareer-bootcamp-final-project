import React, { useState } from "react";
import AdminAddNewEventModal from "./AdminAddNewEventModal";
import { CITIES } from "../../components/Checkbox";
import AdminCards from "./AdminCards";
import { ToastContainer, toast } from "react-toastify";

const AdminSearch = ({ events }) => {
  const [searchText, setSearchText] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [filtered, setFiltered] = useState("");

  let filteredEvents = [...events];

  const searchData = () => {
    if (searchText !== "") {
      filteredEvents = events.filter((event) =>
        event.title.toLowerCase().includes(searchText.toLowerCase())
      );
      setFiltered(filteredEvents);
      window.location.hash = "SearchResult";
    } else {
      toast.error("Please enter a search keyword!", {
        position: "top-center",
      });
    }
  };

  const filterData = ({ date, city }) => {
    if (date) {
      filteredEvents = filteredEvents.filter((event) => event.date === date);

    }

    if (city) {
      filteredEvents = filteredEvents.filter((event) => event.city === city);
    }
    setFiltered(filteredEvents);
    window.location.hash = "SearchResult";
  };

  const handleReset = () => {
    setSelectedDate(""); 
    setSelectedCity(""); 
    setSearchText("");
    setFiltered("");
  };

  const handleClick = () => {
    setFiltered("");
  };


  return (
    <div className="container">
      <div className="row mt-5 mb-4">
        <div className="col-8">
          <div className="input-group">
            <input
              type="text"
              className="form-control p-4 rounded-pill bg-transparent z-1"
              placeholder="Write something about events..."
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              width="200"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              className="btn btn-secondary rounded-pill position-absolute top-50 end-0 translate-middle-y p-3 px-4 me-2 fw-semibold z-2"
              type="button"
              id="button-addon2"
              onClick={searchData}
            >
              Search
            </button>
            <ToastContainer></ToastContainer>
          </div>
        </div>
        <div className="col-4 my-auto d-flex justify-content-end">
          <button
            type="button"
            class="btn btn-primary rounded-pill p-3 px-4  fw-bolder"
            data-bs-toggle="modal"
            data-bs-target="#addNew"
            data-bs-whatever="@getbootstrap"
          >
            ADD NEW EVENT
          </button>
          <AdminAddNewEventModal></AdminAddNewEventModal>
        </div>
      </div>
      <div className="row">
        <div className="col-8 ">
          <div className="row gap-4 px-3">
            <input
              type="date"
              className="form-control col bg-secondary"
              value={selectedDate}
              onChange={(e) => {
                setSelectedDate(e.target.value);
                filterData({ date: e.target.value });
              }}
            />
            <select
              className="form-select col bg-secondary "
              aria-label="Default select example"
              value={selectedCity}
              onChange={(e) => {
                setSelectedCity(e.target.value);
                filterData({ city: e.target.value });
              }}
            >
              <option selected>City</option>
              {CITIES.map((city, index) => (
                <option key={index} value={city}>
                  {city}{" "}
                </option>
              ))}
            </select>
            <button className="btn btn-primary col" onClick={handleReset}> Reset</button>
          </div>
        </div>
      </div>
      <AdminCards
        events={events}
        filtered={filtered}
        handleClick={handleClick}
      ></AdminCards>
    </div>
  );
};

export default AdminSearch;
