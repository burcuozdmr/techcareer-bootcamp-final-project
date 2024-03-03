import React from "react";
import ScrollSpy from "./ScrollSpy";
import { useParams} from "react-router-dom";
import classes from "./EventDetail.module.css"


const EventDetail = ({events}) => {
  const {eventId} = useParams();
  const foundEvent = events.find(event => Number(event.id )=== Number(eventId));
  return (
    <div className="container card mb-5 mt-5 border-0 bg-secondary p-5">
      <div className="row g-4 gx-5">
        <div
          id="carouselExampleAutoplaying"
          class="carousel slide  rounded bg-light bg-opacity-50 col-xl-7 col-lg-7 col-md-12 col-sm-12 "
          data-bs-ride="true"
          style={{ maxWidth: "700px" }}
        >
          <div class="carousel-inner p-3 ">
            <div class="carousel-item active"
             style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url(${foundEvent.imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
             
            }}>
              <div className={`d-flex justify-content-center align-items-center ${classes.carouselImg} `}>
              <img
                src={foundEvent.imageUrl}
                className="d-block m-auto "
                alt="..."
                style={{ maxHeight: "400px", maxWidth: "100%", height: "auto" }}
              />
              </div>
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
        <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 mx-auto p-0">
          {/* <h3 className="mb-4">TITLE EVENT</h3> */}
          <ScrollSpy foundEvent={foundEvent}></ScrollSpy>
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
