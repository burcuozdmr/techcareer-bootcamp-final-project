import React from "react";
import ScrollSpy from "./ScrollSpy";


const EventDetail = () => {
  return (
    <div className="container card mb-5 mt-5 border-0 bg-secondary p-5">
      <div className="row gap-4">
        <div
          id="carouselExampleAutoplaying"
          class="carousel slide  rounded bg-light bg-opacity-50 col-lg-7 col-sm-12 "
          data-bs-ride="true"
          style={{ maxWidth: "700px" }}
        >
          <div class="carousel-inner p-3">
            <div class="carousel-item active">
              <img
                src="https://img.freepik.com/free-vector/music-event-poster-template-with-abstract-shapes_1361-1316.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699574400&semt=ais"
                class="d-block mx-auto"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://img.freepik.com/free-vector/modern-event-banner-template-with-degrade-background_1361-2219.jpg"
                class="d-block mx-auto"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://img.freepik.com/free-vector/music-event-poster-template-with-abstract-shapes_1361-1316.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699574400&semt=ais"
                class="d-block mx-auto"
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div className="col-lg-5 col-sm-12 p-0">
          {/* <h3 className="mb-4">TITLE EVENT</h3> */}
          <ScrollSpy></ScrollSpy>
          {/* <div className="card p-4">
          <p className="fs-5 fw-normal text-bg-secondary" >About Event</p>
            <p className="fw-light"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
        
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
