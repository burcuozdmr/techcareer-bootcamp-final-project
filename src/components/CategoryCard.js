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

function CategoryCard({ title ,category, events}) {
  
  return (
    <>
      <div className="container mb-4 mt-2">
        <fieldset className="bg-mainColor rounded px-5 pb-3 pt-3 card border-0">
          <div className="d-flex justif-content-between mt-3 p-3 card-header shadowColor">
            <legend className="col-lg-10  col-sm-9 text-light fw-semibold fs-5 ">
              {title}
            </legend>
            <Link
              to={`/events/${category}`}
              className="btn border-0 col-lg-2 col-sm-3 secondaryColor text-end"
              end
            >
              View More <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
          <div className="card-body">
            <Swiper
              slidesPerView={1}
              breakpoints={{
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
              className="pb-5 pt-4"
            >
              {events.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="slider-item">
                    <img src={item.imageUrl} className="" alt="..." />
                    <div className="overlay overflow-hidden d-flex align-items-center">
                      <h6 className="ps-2 text-capitalize fw-light">
                        {item.title}
                      </h6>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </fieldset>
      </div>
    </>
  );
}

export default CategoryCard;
