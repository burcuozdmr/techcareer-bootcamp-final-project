import React from "react";
import { useState } from "react";
import { Form, useNavigate, useSubmit } from "react-router-dom";

const AdminEditModal = (props) => {
  const eventTotal = props.event;

  const event = eventTotal.event;
  const key = eventTotal.key;

  const navigate = useNavigate();
  const submit = useSubmit();

  const [edit, setEdit] = useState(true);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [info, setInfo] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const editHandler = () => {
    setEdit(false);
  };

  
  const saveHandler = (eventId) => {

    setEdit(true);
    const finalname = name === '' || name === null ? event.title : name
    const finalimageUrl = imageUrl === '' || imageUrl === null ? event.imageUrl : imageUrl
    const finaldate = date === '' || date === null ? event.date : date
    const finallocation = location === '' || location === null ? event.location : location
    const finalcategory = category === '' || category === null ? event.category : category
    const finalinfo = info === '' || info === null ? event.shortInformation : info


    submit(
      { eventId, finalname, finalimageUrl, finaldate, finallocation, finalcategory, finalinfo },
      { method: "patch" }
    );
    navigate(`/admin/${eventId}`);
  };
  const closeHandler = () => {
    navigate("/admin");
  };
  const deleteHandler = (eventId) => {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      submit(
        {
          eventId,
        },
        { method: "delete", action: "/admin" }
      );
    }
  };

  const changeInputHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    if (name === "name") {
      setName(value);
    } else if (name === "date") {
      setDate(value);
    } else if (name === "location") {
      setLocation(value);
    } else if (name === "category") {
      setCategory(value);
    } else if (name === "info") {
      setInfo(value);
    } else if (name === "imageUrl") {
      setImageUrl(value);
    }
  };

  return (
    <div
      className="modal fade"
      id="viewMore"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-fullscreen">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={closeHandler}
            ></button>
          </div>
          <div class="modal-body row m-4">
            <div className="col-sm-7 col-lg-4 mb-5">
              <img
                src={event.imageUrl}
                alt=""
                className="me-5 img-fluid img-thumbnail"
                style={{ width: "30rem" }}
              />
            </div>
            <Form
              method="patch"
              onSubmit={(e) => {
                console.log(e.target.value );
                e.preventDefault();
                saveHandler(key);
              }}
              className="col-sm-5 col-lg-4 "
            >
              <div class="mb-3">
                <input
                  type="text"
                  name="name"
                  id="disabledInput"
                  class="form-control fs-2"
                  placeholder={event.title}
                  disabled={edit}
                  onChange={changeInputHandler}
                  value={name}
                />
              </div>

              <div class="mb-3">
                <label for="recipient-name" class="col-form-label">
                  Date:
                </label>
                <input
                  type="date"
                  name="date"
                  class="form-control "
                  id="recipient-name"
                  defaultValue={event.date}
                  disabled={edit}
                  onChange={changeInputHandler}
                />
              </div>
              <div class="mb-3">
                <label for="recipient-name" class="col-form-label">
                  Location:
                </label>
                <input
                  type="text"
                  name="location"
                  class="form-control "
                  id="recipient-name"
                  placeholder={event.location}
                  disabled={edit}
                  onChange={changeInputHandler}
                  value={location}
                />
              </div>
              <div class="mb-3">
                <label for="recipient-name" class="col-form-label">
                  Category:
                </label>
                <select
                  class="form-select "
                  name="category"
                  aria-label="Default select example"
                  disabled={edit}
                  onChange={changeInputHandler}
                >
                  <option
                    value="Category"
                    selected={event.category === "Category"}
                  >
                    Category
                  </option>
                  <option value="Music" selected={event.category === "Music"}>
                    Music
                  </option>
                  <option value="Art" selected={event.category === "Art"}>
                    Art
                  </option>
                  <option value="Sport" selected={event.category === "Sport"}>
                    Sport
                  </option>
                </select>
              </div>
              <div class="mb-3">
                <label for="recipient-name" class="col-form-label">
                  Location:
                </label>
                <input
                  type="text"
                  name="imageUrl"
                  class="form-control "
                  id="recipient-name"
                  placeholder={event.imageUrl}
                  disabled={edit}
                  onChange={changeInputHandler}
                  value={imageUrl}
                />
              </div>

              <div class="mb-3">
                <label for="message-text" class="col-form-label">
                  Short Info about the event:
                </label>
                <textarea
                  name="info"
                  class="form-control"
                  id="message-text"
                  disabled={edit}
                  placeholder={event.shortInformation}
                  onChange={changeInputHandler}
                ></textarea>
              </div>
              {edit && (
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={editHandler}
                >
                  Edit
                </button>
              )}
              {!edit && (
                <button type="submit" class="btn btn-success">
                  Save
                </button>
              )}
            </Form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={closeHandler}
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-danger"
              data-bs-dismiss="modal"
              onClick={() => deleteHandler(key)}
            >
              Delete Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminEditModal;
