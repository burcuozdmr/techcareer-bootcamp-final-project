import React, { useState } from "react";
import "./Admin.css";
import AdminEditModal from "./AdminEditModal";
import classes from "./AdminCards.module.css";
import { Link, useNavigate, useParams } from "react-router-dom";

const AdminCards = ({events,filtered}) => {

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [renderGroup, setRenderGroup] = useState(true);

  

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const [selectedEvent, setSelectedEvent] = useState({ key: "", event: {} });

  const handleViewMore = (key, event) => {
    setSelectedEvent({ key, event });
  };


  return (
    <div className="container mt-5">
      <div class="card border-0 bg-mainLightColor p-3">
        <div class="card-header row">
          <ul class="nav nav-tabs card-header-tabs px-3 pt-3 col">
            <li class="nav-item">
              <a
                className={`nav-link ${
                  selectedCategory === "All" && "active bg-secondary"
                } `}
                onClick={() => handleCategoryChange("All")}
                aria-current="true"
                href="#All"
              >
                All
              </a>
            </li>
            <li class="nav-item">
              <a
                class={`nav-link ${
                  selectedCategory === "Music" && "active bg-secondary"
                }`}
                onClick={() => handleCategoryChange("Music")}
                href="#Music"
              >
                Music
              </a>
            </li>
            <li class="nav-item">
              <a
                class={`nav-link ${
                  selectedCategory === "Art" && "active bg-secondary"
                } `}
                onClick={() => handleCategoryChange("Art")}
                href="#Art"
              >
                Art
              </a>
            </li>
            <li class="nav-item">
              <a
                class={`nav-link ${
                  selectedCategory === "Sport" && "active bg-secondary"
                } `}
                onClick={() => handleCategoryChange("Sport")}
                href="#Sport"
              >
                Sport
              </a>
            </li>
          </ul>
          <ul class="nav nav-tabs card-header-tabs px-3 pt-3 col  d-flex justify-content-end">
            <li class="nav-item">
              <div
                className={`nav-link`}
                aria-current="true"
                href="#SearchResult"
              >
                Search Result
              </div>
            </li>
          </ul>
          
        </div>
        <div class="card-body row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
        {(filtered !== undefined ? Object.entries(filtered) : 
            Object.entries(events)
              .filter(
                ([key, event]) =>
                  selectedCategory === "All" ||
                  event.category === selectedCategory
              )
          )
            .map(([key, event]) => (
              <div className="col-lg-2 col-md-3 col-sm-6 col-12 mb-4" key={key}>
                <div class="card bg-secondary">
                  <div
                    className="card-header"
                    style={{
                      backgroundImage: `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url(${event.imageUrl})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <img
                      src={event.imageUrl}
                      class="card-img-top"
                      alt=""
                      style={{ height: "10rem", objectFit: "cover" }}
                    />
                  </div>
                  <div class="card-footer">
                    <h5 className={`card-title ${classes.eventTitle}`}>
                      {event.title}
                    </h5>
                    <Link to={`/admin/${key}`}>
                      <button
                        type="button"
                        class="btn btn-sm btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#viewMore"
                        onClick={() => handleViewMore(key, event)}
                      >
                        View More
                      </button>
                    </Link>
                    {selectedEvent && (
                      <AdminEditModal event={selectedEvent} />
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
