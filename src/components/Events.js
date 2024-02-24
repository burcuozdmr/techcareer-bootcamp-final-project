import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import Checkbox from "./Checkbox";
import classes from "./Events.module.css";
import { Link, useParams } from "react-router-dom";

const Events = ({ events }) => {
  const { category } = useParams();
  const usingEvents = events.filter((event) => event.category === category);

  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 12;

  const [filteredEvents, setFilteredEvents] = useState(usingEvents);
  const currentEvents = filteredEvents.slice(
    (currentPage - 1) * eventsPerPage,
    currentPage * eventsPerPage
  );

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleFilterChange = (filter) => {
    const { city, date } = filter;

    // Şehir ve tarih bilgisine göre etkinlikleri filtreleme
    let filtered = usingEvents;
    if (city) {
      filtered = filtered.filter((event) => event.city === city);
    }
    if (date) {
      filtered = filtered.filter((event) => event.date === date);
    }

    setFilteredEvents(filtered);
  };

  useEffect(() => {
    const element = document.getElementById("allEvents");
    const topPosition = element.offsetTop;
    window.scrollTo({ top: topPosition, behavior: "smooth" });
  }, [currentPage]);

  return (
    <div
      className={`container card p-4 border-0 ${classes["bg-mainColor"]}`}
      style={{ marginTop: "5rem", marginBottom: "4rem" }}
      id="allEvents"
    >
      <div className="card-header">
        <h4>{category}</h4>
      </div>
      <div className="card-body">
        <div className="row pt-3">
          <div className="col-lg-2 col-sm-4">
            <Checkbox onFilterChange={handleFilterChange}></Checkbox>
          </div>
          <div className="col-lg-10 col-sm-8">
            <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3">
              {currentEvents.length === 0 ? (
                <p className="fs-4"> No Results Found</p>
              ) : (
                currentEvents.map((card) => (
                  <div className="col" key={card.id}>
                    <Link to={`/events/${card.category}/${card.id}`}>
                      <div
                        class="card bg-secondary"
                        style={{ cursor: "pointer" }}
                      >
                        <img
                          src={card.imageUrl}
                          class="card-img-top"
                          alt=""
                          style={{ height: "18rem" }}
                        />
                        <div class="card-body">
                          <h5 class="card-title">{card.title}</h5>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))
              )}
            </div>
            {currentEvents.length !== 0 && (
              <Pagination
                eventsPerPage={eventsPerPage}
                totalEvents={filteredEvents.length}
                onPageChange={handlePageChange}
              ></Pagination>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
