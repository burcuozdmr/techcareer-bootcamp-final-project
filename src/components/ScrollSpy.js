import React from "react";

const ScrollSpy = () => {
  return (
    <div>
      <nav
        id="navbar-example2"
        class="navbar bg-body-tertiary px-3 mb-3 rounded"
      >
        <h5 className="nabvar-brand">EVENT TITLE</h5>
        <ul class="nav nav-pills ">
          <li class="nav-item ">
            <a class="nav-link" href="#about">
              About
            </a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
            >
              Click
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#date">
                  Date
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#ticket">
                  Ticket
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#location">
                  Location
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#map">
                  Map
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div
        data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        data-bs-root-margin="0px 0px -40%"
        data-bs-smooth-scroll="true"
        class="scrollspy-example bg-body-tertiary p-3 rounded-2 overflow-y-scroll"
        tabindex="0"
        style={{ height: "400px" }}
      >
        <h5 id="about" className="text-bg-secondary p-2 rounded">
          About
        </h5>
        <p className="fw-light p-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing
        </p>
        <h5 id="date" className="text-bg-secondary p-2 rounded">
          Date
        </h5>
        <p className="p-2">
          30 Aug, 2023 (Monday)
          <br></br>
          25 Dec, 2023 (Sunday)
        </p>
        <h5 id="ticket" className="text-bg-secondary p-2 rounded">
          Ticket
        </h5>
        <div className="d-flex">
          <div className="p-2 ">
            <span className="fw-semibold me-3">Student :</span>
            <span className="p-1 px-2 rounded bg-primary">$ 15</span>
          </div>
          <div className="p-2 ">
            <span className="fw-semibold me-3">Adult :</span>
            <span className="p-1 px-2 rounded bg-primary">$ 20</span>
          </div>
        </div>
        <h5 id="location" className="text-bg-secondary p-2 rounded">
          Location
        </h5>
        <div className="p-2">
          <h6>Location Name</h6>
          <p className="fw-light">Kızılırmak Sk. No: 21 Kızılay Ankara</p>
        </div>
        <h5 id="map" className="text-bg-secondary p-2 rounded">
          Map
        </h5>
        <div className="p-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d96422.33168363728!2d29.037078013298018!3d40.95524405522303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1688323669684!5m2!1str!2str"
            width="450"
            height="330"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="rounded "
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ScrollSpy;
