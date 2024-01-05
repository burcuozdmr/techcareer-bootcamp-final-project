import React,{useState} from "react";
import "./Admin.css";
import AdminEditModal from "./AdminEditModal";


const AdminCards = (props) => {
  const data = props.sendData;
  const events = props.events;

  const [selectedEvent, setSelectedEvent] = useState({});

  const handleViewMore = (event) => {
    setSelectedEvent(event);
  };

  return (
    <div className="container mt-5">
      <div class="card border-0 bg-mainLightColor p-3">
        <div class="card-header ">
          <ul class="nav nav-tabs card-header-tabs px-3 pt-3">
            <li class="nav-item">
              <a
                class="nav-link active bg-secondary"
                aria-current="true"
                href="#id"
              >
                All
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#id">
                Music
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#id">
                Events - Art
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#id">
                Sport
              </a>
            </li>
          </ul>
        </div>
        <div class="card-body row">
          {events.map((event) => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={event.id}>
              <div class="card bg-secondary">
                <img
                  src={event.imageUrl}
                  class="card-img-top"
                  alt=""
                  style={{ maxHeight: "20rem", objectFit: "cover" }}
                />
                <div class="card-body">
                  <h5 class="card-title">{event.title}</h5>
                  <button
                    type="button"
                    class="btn btn-sm btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#viewMore"
                    onClick={() => handleViewMore(event)}
                  >
                    View More
                  </button>
                  {selectedEvent && (
                    <AdminEditModal data={data} event={selectedEvent} />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminCards;
