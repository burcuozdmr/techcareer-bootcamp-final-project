import React from "react";

const CITIES = [
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
const CATEGORY = ["ALL", "MUSIC", "EVENT - ART", "SPORT"];

const Checkbox = () => {
  return (
    <div>
      <div className="card p-3 mb-4 bg-secondary">
        <h6 className="m-0">CITY</h6>
        <hr />
        <div style={{ height: "35rem" }} className="overflow-scroll">
          {CITIES.map((city) => (
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label mb-2" for="flexCheckDefault">
                {city}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="card p-3 mb-4 bg-secondary">
        <h6 className="m-0">CATEGORY</h6>
        <hr />
        <div>
          {CATEGORY.map((item) => (
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label mb-2" for="flexCheckDefault">
                {item}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="card p-3 mb-4  bg-secondary">
        <h6 className="m-0">DATE</h6>
        <hr/>
        <input type="date" className="p-2 border-0 rounded"></input>
      </div>
    </div>
  );
};

export default Checkbox;
