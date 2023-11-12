import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import Checkbox from "./Checkbox";
import classes from "./Events.module.css";

const CARDS = [
  {
    id: "e1",
    title: "e1",
    image: "https://piktochart.com/wp-content/uploads/2018/02/26-5029435.jpg",
  },
  {
    id: "e2",
    title: "e1",
    image: "https://piktochart.com/wp-content/uploads/2018/02/26-5029435.jpg",
  },
  {
    id: "e3",
    title: "e1",
    image: "https://piktochart.com/wp-content/uploads/2018/02/26-5029435.jpg",
  },
  {
    id: "e4",
    title: "e1",
    image: "https://piktochart.com/wp-content/uploads/2018/02/26-5029435.jpg",
  },
  {
    id: "e5",
    title: "e1",
    image: "https://piktochart.com/wp-content/uploads/2018/02/26-5029435.jpg",
  },
  {
    id: "e6",
    title: "e1",
    image: "https://piktochart.com/wp-content/uploads/2018/02/26-5029435.jpg",
  },
  {
    id: "e7",
    title: "e1",
    image: "https://piktochart.com/wp-content/uploads/2018/02/26-5029435.jpg",
  },
  {
    id: "e8",
    title: "e1",
    image: "https://piktochart.com/wp-content/uploads/2018/02/26-5029435.jpg",
  },
  {
    id: "e9",
    title: "e1",
    image: "https://piktochart.com/wp-content/uploads/2018/02/26-5029435.jpg",
  },
  {
    id: "e10",
    title: "e1",
    image: "https://piktochart.com/wp-content/uploads/2018/02/26-5029435.jpg",
  },
  {
    id: "e11",
    title: "e1",
    image: "https://piktochart.com/wp-content/uploads/2018/02/26-5029435.jpg",
  },
  {
    id: "e12",
    title: "e1",
    image: "https://piktochart.com/wp-content/uploads/2018/02/26-5029435.jpg",
  },
  {
    id: "e13",
    title: "e1",
    image: "https://piktochart.com/wp-content/uploads/2018/02/26-5029435.jpg",
  },
  {
    id: "e14",
    title: "e1",
    image: "https://piktochart.com/wp-content/uploads/2018/02/26-5029435.jpg",
  },
  {
    id: "e15",
    title: "e1",
    image: "https://piktochart.com/wp-content/uploads/2018/02/26-5029435.jpg",
  },
  {
    id: "e16",
    title: "e1",
    image: "https://piktochart.com/wp-content/uploads/2018/02/26-5029435.jpg",
  },
];

const Events = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 12;

  const currentEvents = CARDS.slice(
    (currentPage - 1) * eventsPerPage,
    currentPage * eventsPerPage
  );
  
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    const element = document.getElementById("allEvents");
    const topPosition = element.offsetTop;
    window.scrollTo({ top: topPosition, behavior: "smooth" });
  }, [currentPage]);

  return (
    <div
      className={`container card p-4 border-0 ${classes["bg-mainColor"]}`}
      style={{ marginTop: "20rem", marginBottom: "4rem" }}
      id="allEvents"
    >
      <div className="card-header">
        <h4>TITLE</h4>
      </div>
      <div className="card-body">
        <div className="row pt-3">
          <div className="col-lg-2 col-sm-4">
            <Checkbox></Checkbox>
            <div class="d-grid col mx-auto">
              <button
                className={`btn btn-primary mt-2 mb-4 border-0 ${classes["bg-secondaryColor"]}`}
                type="button"
              >
                Filter
              </button>
            </div>
          </div>
          <div className="col-lg-10 col-sm-8">
            <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3">
              {currentEvents.map((card) => (
                <div className="col" key={card.id}>
                  <div class="card bg-secondary" style={{ cursor: "pointer" }}>
                    <img
                      src={card.image}
                      class="card-img-top"
                      alt=""
                      style={{ height: "18rem" }}
                    />
                    <div class="card-body">
                      <h5 class="card-title">{card.title}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Pagination
              eventsPerPage={eventsPerPage}
              totalEvents={CARDS.length}
              onPageChange={handlePageChange}
            ></Pagination>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
