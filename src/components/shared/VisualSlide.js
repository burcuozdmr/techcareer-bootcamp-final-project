import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import classes from "./VisualSlide.module.css";
import Navbar from "./Navbar";
import axios from "axios";

const VisualSlide = ({ events }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const musicEvents = events.filter((event) => event.category === "Music");
  const sportEvents = events.filter((event) => event.category === "Sport");
  const artEvents = events.filter((event) => event.category === "Art");

  
  const selectedMusicEvents = musicEvents.slice(0, 3);
  const selectedSportEvents = sportEvents.slice(0, 3);
  const selectedArtEvents = artEvents.slice(0, 2);
  const selectedEvents = [
    ...selectedMusicEvents,
    ...selectedSportEvents,
    ...selectedArtEvents,
  ];

  return (
    <section className={classes.image}>
      <Navbar></Navbar>
      <div className={classes["img-section"]}></div>
      <Swiper
        onSlideChange={(swiper) => {
          setActiveSlide(swiper.activeIndex);
        }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className={classes.swiper}
        style={{ paddingTop: "150px" }}
      >
        {selectedEvents.map((item) => (
          <SwiperSlide
            key={item.id}
            style={{
              boxShadow:
                activeSlide === item.id - 1
                  ? "1px 1px 15px 4px #31d7a9"
                  : "none",
              transition: "border 0.3s, box-shadow 0.3s",
            }}
            className={classes["swiper-slide"]}
          >
            <div className={classes["slide-content"]}>
              <img src={item.imageUrl} alt="" />
              <div className={classes.overlay}>
                <h6 className="text-light">{item.title}</h6>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default VisualSlide;
