import React from "react";
import { useState } from "react";
import { ref, set, push } from "firebase/database";
import { database } from "../../store/firebaseApp";
import { Form } from "react-router-dom";

const AdminAddNewEventModal = (props) => {
  const [nameValue, setNameValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [locationValue, setLocationValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");
  const [imageURLValue, setImageURLValue] = useState("");
  const [infoValue, setInfoValue] = useState("");

  const inputChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    if (name === "name") {
      setNameValue(value);
    } else if (name === "date") {
      setDateValue(value);
    } else if (name === "location") {
      setLocationValue(value);
    } else if (name === "category") {
      setCategoryValue(value);
    } else if (name === "imageURL") {
      setImageURLValue(value);
    } else if (name === "info") {
      setInfoValue(value);
    }
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const inputData = {
      title: nameValue,
      date: dateValue,
      location: locationValue,
      category: categoryValue,
      imageUrl: imageURLValue,
      shortInformation: infoValue,
    };

    if (Object.values(inputData).every((value) => value !== "")) {
      try {
        // Veritabanındaki "events" referansını alın
        const eventsRef = ref(database, "events");

        // Yeni bir ID ile veriyi ekleyin
        const newEventRef = push(eventsRef);

        // Yeni eklenen verinin ID'sini alın
        const newEventId = newEventRef.key;

        // Veriyi ekleyin
        await set(newEventRef, inputData);

        console.log("Veri başarıyla eklendi. Yeni veri ID:", newEventId);
      } catch (error) {
        console.error("Veri eklenirken bir hata oluştu:", error);
      }
    } else {
      if (nameValue === "") {
        document.getElementById("name").classList.add("is-invalid");
      } else if (dateValue === "") {
        document.getElementById("date").classList.add("is-invalid");
      } else if (locationValue === "") {
        document.getElementById("location").classList.add("is-invalid");
      } else if (categoryValue === "Category") {
        document.getElementById("category").classList.add("is-invalid");
      } else if (imageURLValue === "") {
        document.getElementById("image").classList.add("is-invalid");
      } else if (infoValue === "") {
        document.getElementById("info").classList.add("is-invalid");
      }
    }

    setNameValue("");
    setDateValue("");
    setLocationValue("");
    setCategoryValue("");
    setImageURLValue("");
    setInfoValue("");
  };

  return (
    <div
      class="modal fade"
      id="addNew"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              New Event
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <Form method="post">
            <div class="modal-body">
              <div class="mb-3">
                <label for="recipient-name" class="col-form-label">
                  Name of the event:
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  name="name"
                  value={nameValue}
                  onChange={inputChangeHandler}
                />
              </div>
              <div class="mb-3">
                <label for="date" class="col-form-label">
                  Date of the event:
                </label>
                <input
                  type="date"
                  class="form-control"
                  id="date"
                  name="date"
                  value={dateValue}
                  onChange={inputChangeHandler}
                />
              </div>
              <div class="mb-3">
                <label for="location" class="col-form-label">
                  Location:
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="location"
                  value={locationValue}
                  name="location"
                  onChange={inputChangeHandler}
                />
              </div>
              <div class="mb-3">
                <label for="category" class="col-form-label">
                  Category:
                </label>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  name="category"
                  id="category"
                  value={categoryValue}
                  onChange={inputChangeHandler}
                >
                  <option selected value="Category">
                    Category
                  </option>
                  <option value="Music">Music</option>
                  <option value="Events-Art">Events - Art</option>
                  <option value="Sport">Sport</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="image" class="col-form-label">
                  Image Url:
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="image"
                  value={imageURLValue}
                  name="imageURL"
                  onChange={inputChangeHandler}
                />
              </div>
              <div class="mb-3">
                <label for="info" class="col-form-label">
                  Short Info about the event:
                </label>
                <textarea
                  class="form-control"
                  id="info"
                  name="info"
                  value={infoValue}
                  onChange={inputChangeHandler}
                ></textarea>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" class="btn btn-primary">
                Add Event
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AdminAddNewEventModal;
