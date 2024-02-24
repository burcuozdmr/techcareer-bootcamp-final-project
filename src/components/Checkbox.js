import React, { useState } from "react";
import classes from "./Events.module.css";

export const CITIES = [
  "Adana",
  "Adıyaman",
  "Afyon",
  "Ağrı",
  "Amasya",
  "Ankara",
  "Antalya	",
  "Artvin",
  "Aydın",
  "Balıkesir	",
  "Bilecik",
  "Bingöl",
  "Bitlis",
  "Bolu",
  "Burdur",
  "Bursa",
  "Çanakkale",
  "Çankırı	",
  "Çorum	",
  "Denizli",
  "Diyarbakır",
  "Edirne",
  "Elâzığ",
  "Erzincan",
  "Erzurum",
  "Eskişehir",
  "Gaziantep",
  "Giresun	",
  "Gümüşhane	",
  "Hakkâri",
  "Hatay",
  "Isparta",
  "Mersin",
  "İstanbul	",
  "İzmir",
];

const Checkbox = ({ onFilterChange }) => {
  const [selectedCity, setselectedCity] = useState(null);
  const [selectedDate, setselectedDate] = useState(null);

  const handleCityChange = (city) => {
    setselectedCity(city === selectedCity ? null : city);
    onFilterChange({
      city: city === selectedCity ? null : city,
      date: selectedDate,
    });
  };
  const handleDateChange = (date) => {
    console.log(date);
    setselectedDate(date);
    onFilterChange({ city: selectedCity, date });
  };

  const handleReset  = () => {
    setselectedCity(null);
    setselectedDate(null);
    onFilterChange({ city: null, date: null });
  }

  return (
    <div>
      <div className="card p-3 mb-4 bg-secondary">
        <h6 className="m-0">CITY</h6>
        <hr />
        <div style={{ height: "34rem" }} className="overflow-y-scroll">
          {CITIES.map((city) => (
            <div class="form-check" key={city}>
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                checked={selectedCity === city}
                onChange={() => handleCityChange(city)}
              />
              <label class="form-check-label mb-2" for="flexCheckDefault">
                {city}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="card p-3 mb-4  bg-secondary">
        <h6 className="m-0">DATE</h6>
        <hr />
        <input
          type="date"
          className="p-2 border-0 rounded"
          value={selectedDate}
          onChange={(e) => handleDateChange(e.target.value)}
        ></input>
      </div>
      <div class="d-grid col mx-auto">
        <button
          className={`btn btn-primary mt-2 mb-4 border-0 ${classes["bg-secondaryColor"]}`}
          type="button"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Checkbox;
