import React from "react";
import "./Admin.css";
import AdminEditModal from "./AdminEditModal";

const cards = [
  {
    id: "e1",
    nameValue: "title 1",
    dateValue: "01.11.2020",
    locationValue: "Ankara",
    categoryValue: "Music",
    imageURLValue:
      "https://mir-s3-cdn-cf.behance.net/project_modules/disp/0afa9284123811.5d52a54b82513.png",
    infoValue: "Duman KOnseri",
  },
  {
    id: "e2",
    nameValue: "title 2",
    dateValue: "01.11.2020",
    locationValue: "Ankara",
    categoryValue: "Music",
    imageURLValue:
      "https://mir-s3-cdn-cf.behance.net/project_modules/disp/0afa9284123811.5d52a54b82513.png",
    infoValue: "Duman KOnseri",
  },
  {
    id: "e3",
    nameValue: "title 3",
    dateValue: "01.11.2020",
    locationValue: "Ankara",
    categoryValue: "Music",
    imageURLValue:
      "https://mir-s3-cdn-cf.behance.net/project_modules/disp/0afa9284123811.5d52a54b82513.png",
    infoValue: "Duman KOnseri",
  },
  {
    id: "e4",
    nameValue: "title 4",
    dateValue: "01.11.2020",
    locationValue: "Ankara",
    categoryValue: "Music",
    imageURLValue:
      "https://mir-s3-cdn-cf.behance.net/project_modules/disp/0afa9284123811.5d52a54b82513.png",
    infoValue: "Duman KOnseri",
  },
];

const AdminCards = (props) => {
  const data = props.sendData;

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
          {cards.map((card) => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <div class="card bg-secondary">
                <img
                  src={card.imageURLValue}
                  class="card-img-top"
                  alt=""
                  style={{ maxHeight: "20rem", objectFit:'cover' }}
                />
                <div class="card-body">
                  <h5 class="card-title">{card.nameValue}</h5>
                  <button
                    type="button"
                    class="btn btn-sm btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#viewMore"
                  >
                    View More
                  </button>
                  <AdminEditModal data={data}></AdminEditModal>
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
