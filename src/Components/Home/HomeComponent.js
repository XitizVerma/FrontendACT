import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, A11y, Pagination } from "swiper";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./blogswiper.css";
import Card from "./Card";
import BlogData from "./BlogData";

SwiperCore.use([Autoplay, Navigation, A11y, Pagination]);

function HomeComponent() {
  return (
    <div>
      <div>
        <div className="md:text-4xl text-xl font-bold p-4">
          Classic books
          <div className="mb-5">
            <span
              className="inline-block md:w-32 w-24 h-1 rounded-full ml-1"
              style={{ backgroundColor: "rgba(9,166,228,.9)" }}
            ></span>
          </div>
        </div>

        <div className="w-full flex justify-center align-middle text-black p-4">
          <Swiper
            id="main"
            spaceBetween={50}
            slidesPerView={
              window.screen.width >= 1280
                ? 4
                : window.screen.width > 600
                ? 3
                : 1
            }
            pagination={{ clickable: true }}
            navigation
            loop={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
          >
            {BlogData.map((blog) => (
              <SwiperSlide key={blog.id}>
                <Card blog={blog} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="md:text-4xl text-xl font-bold p-4">
          Books We Love
          <div className="mb-5">
            <span
              className="inline-block md:w-32 w-24 h-1 rounded-full ml-1"
              style={{ backgroundColor: "rgba(9,166,228,.9)" }}
            ></span>
          </div>
        </div>
        <div className="w-full flex justify-center align-middle text-black p-4">
          <Swiper
            id="main"
            spaceBetween={50}
            slidesPerView={
              window.screen.width >= 1280
                ? 4
                : window.screen.width > 600
                ? 3
                : 1
            }
            pagination={{ clickable: true }}
            navigation
            loop={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
          >
            {BlogData.map((blog) => (
              <SwiperSlide key={blog.id}>
                <Card blog={blog} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="md:text-4xl text-xl font-bold p-4">
          Recently Returned
          <div className="mb-5">
            <span
              className="inline-block md:w-44 w-28 h-1 rounded-full ml-1"
              style={{ backgroundColor: "rgba(9,166,228,.9)" }}
            ></span>
          </div>
        </div>
        <div className="w-full flex justify-center align-middle text-black p-4">
          <Swiper
            id="main"
            spaceBetween={50}
            slidesPerView={
              window.screen.width >= 1280
                ? 4
                : window.screen.width > 600
                ? 3
                : 1
            }
            pagination={{ clickable: true }}
            navigation
            loop={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
          >
            {BlogData.map((blog) => (
              <SwiperSlide key={blog.id}>
                <Card blog={blog} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;
