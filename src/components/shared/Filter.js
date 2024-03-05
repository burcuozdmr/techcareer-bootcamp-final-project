import React, { useState } from "react";
import classes from "../shared/Filter.module.css";
import { CITIES } from "../Checkbox";
import { Link } from "react-router-dom";
import { useFilterContext } from "../../store/filter-context";

const Filter = ({ events }) => {
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
      filtered = filtered.filter((item) => item.category === selectedCategory);
    }

    if (selectedCity) {
      filtered = filtered.filter((item) => item.city === selectedCity);
    }

    if (selectedDate) {
      filtered = filtered.filter((item) => item.date === selectedDate);
    }

    updateFilteredData(filtered);
  };

  const filterHandler = () => {
    filterData();
  };

  return (
    <section
      className="container "
      style={{ maxWidth: "850px" }}
    >
      <div
        className={`card border border-0 p-4 shadow-lg mb-5 rounded ${classes["bg-mainColor"]}`}
      >
        <div className="card-header">
          <p className={`fs-lg-5 fw-bold pt-2 ${classes.secondaryColor} ${classes.t}`}>
            FIND YOUR OWN EVENTS NOW
          </p>
        </div>
        <div className="card-body p-0">
          <blockquote className="blockquote mb-0 mt-4">
            <div
              className={`card border border-0 ${classes["bg-mainLightColor"]}`}
            >
              <div className="card-body container">
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
                  <div className="row">
                    <div className="col-lg col-md-6 mb-2">
                      <div className="row">
                        <div className="col-3">
                          <i className="fa-solid fa-film fa-xl "></i>
                        </div>
                        <div className="col-9">
                          <select
                            className="form-select bg-secondary"
                            aria-label="Default select example"
                            onChange={(e) =>
                              setSelectedCategory(e.target.value)
                            }
                          >
                            <option selected>Category</option>
                            <option value="Music">Music</option>
                            <option value="Art">Art</option>
                            <option value="Sport">Sport</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg col-md-6 mb-2">
                      <div className="row ">
                        <div className="col-3 ">
                          <i className="fa-solid fa-city fa-xl "></i>
                        </div>
                        <div className="col-9 ">
                          <select
                            className="form-select  bg-secondary "
                            aria-label="Default select example"
                            onChange={(e) => setSelectedCity(e.target.value)}
                          >
                            <option selected>City</option>
                            {CITIES.map((city, index) => (
                              <option key={index} value={city}>
                                {city}{" "}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg col-md-12 mb-2">
                      <div className="row">
                        <div className="col-3">
                          <i className="fa-solid fa-calendar-days fa-xl "></i>
                        </div>
                        <div className="col-9">
                          <input
                            type="date"
                            className="form-control bg-secondary"
                            onChange={(e) => setSelectedDate(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer container text-center">
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
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Filter;
