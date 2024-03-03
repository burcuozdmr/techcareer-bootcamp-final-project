import React from "react";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./CategoryCard.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

function CategoryCard({ title, category, events }) {
  return (
    <div className="container mb-4 mt-2">
      <fieldset className="bg-mainColor rounded pb-3 px-4 pt-3 card border-0">
        <div className="mt-3  card-header shadowColor bg-color row">
          <div className="col d-flex align-items-center">
            <h6 className="text-light fw-semibold fs-5 p-0 ">{title}</h6>
          </div>
          <div className="col d-flex flex-row-reverse">
            <Link
              to={`/events/${category}`}
              className="btn border-0  secondaryColor "
              end
            >
              View More <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
        <div className="card-body">
          <Swiper
            slidesPerView={1}
            breakpoints={{
              300: {
                slidesPerView: 1,
                spaceBetween: 5,
              },
              500: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            spaceBetween={10}
            freeMode={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, FreeMode, Pagination]}
            className=""
          >
            {events.map((item) => (
              <SwiperSlide key={item.id} className="slider-item">
                <Link to={`/events/${category}/${item.id}`}>
                  <div className="">
                    <img
                      src={item.imageUrl}
                      className="categoriesImg"
                      alt="..."
                    />
                    <div className="overlay overflow-hidden d-flex align-items-center">
                      <h6 className="ps-2 text-capitalize fw-semibold  event-title">
                        {item.title}
                      </h6>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </fieldset>
    </div>
  );
}

export default CategoryCard;
