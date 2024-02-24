import React, { useState } from "react";
import classes from "../shared/Filter.module.css";
import { CITIES } from "../Checkbox";
import { Link } from "react-router-dom";
import { useFilterContext } from "../../store/filter-context";

const Filter = ({events}) => {
 
  const { updateFilteredData } = useFilterContext();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDate, setSelectedDate] = useState("");


  let alldata = [...events];

  const filterData = () => {
    let filtered = alldata;
    console.log(searchTerm);
    console.log(selectedCategory);
    console.log(selectedCity);
    console.log(selectedDate);
 
    if (searchTerm) {
      filtered = filtered.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter(
        (item) => item.category === selectedCategory
      );
    }

    if (selectedCity) {
      filtered = filtered.filter(
        (item) => item.city === selectedCity
      );
    }

    if (selectedDate) {
      filtered = filtered.filter(
        (item) => item.date === selectedDate
      );
    }
   
    updateFilteredData(filtered);
  };


  const filterHandler = () => {
   
    filterData();
  };

  return (
    <section
      className="container position-absolute top-100 start-50 translate-middle"
      style={{ width: "850px" }}
    >
      <div
        className={`card border border-0 p-5 shadow-lg p-3 mb-5 rounded ${classes["bg-mainColor"]}`}
      >
        <div className="card-header">
          <p className={`fs-5 fw-bold pt-3 ${classes.secondaryColor}`}>
            FIND YOUR OWN EVENTS NOW
          </p>
        </div>
        <div className="card-body p-0">
          <blockquote className="blockquote mb-0 mt-4">
            <div
              className={`card border border-0 ${classes["bg-mainLightColor"]}`}
            >
              <div className="card-body">
                <div className="container text-center">
                  <div className="input-group mb-4 ">
                    <span
                      className="input-group-text bg-secondary"
                      id="basic-addon1"
                    >
                      <i className="fa-solid fa-magnifying-glass "></i>
                    </span>
                    <input
                      type="text"
                      className={`form-control ${classes["bg-mainLightColor"]}`}
                      placeholder="Search for events..."
                      aria-label="Search"
                      aria-describedby="basic-addon1"
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <div className="row justify-content-between d-flex align-items-center gap-4">
                    <div className="col d-flex gap-2">
                      <i className="fa-solid fa-film fa-xl mt-3"></i>
                      <select
                        class="form-select me-2 bg-secondary"
                        aria-label="Default select example"
                        onChange={(e) => setSelectedCategory(e.target.value)}
                      >
                        <option selected>Category</option>
                        <option value="Music">Music</option>
                        <option value="Art">Art</option>
                        <option value="Sport">Sport</option>
                      </select>
                    </div>
                    <div className="col d-flex gap-2">
                      <i className="fa-solid fa-city fa-xl mt-3"></i>

                      <select
                        className="form-select me-2 bg-secondary"
                        aria-label="Default select example"
                        onChange={(e) => setSelectedCity(e.target.value)}
                      >
                        <option selected>City</option>
                        {CITIES.map((city, index) => (
                          <option
                            key={index}
                            value={city}
                            style={{ height: "2px" }}
                          >
                            {city}{" "}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col d-flex gap-2">
                      <i className="fa-solid fa-calendar-days fa-xl mt-3"></i>
                      <input
                        type="date"
                        className="form-control bg-secondary"
                        onChange={(e) => setSelectedDate(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer container text-center">
                <div class="d-grid m-2">
                  <Link to="filter-result">
                    <button
                      className={`btn fw-bold ${classes.bgSecondaryColor}`}
                      type="button"
                      onClick={filterHandler}
                    >
                      Filter
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Filter;
