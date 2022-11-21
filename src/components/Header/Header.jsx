// Header Component \\

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { Link } from "react-router-dom";
import { POSTER_PATH } from "../../constants";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styles from "./Header.module.css";

const Header = ({ recommend }) => {
  return (
    <header className="container">
      <div className={styles.header__logo__container}>
        <h2 className={styles.header__logo}>DEVFLIX</h2>
      </div>
      <h1 className={styles.section__title}>Recommended Movies</h1>
      <Swiper
        modules={[Pagination]}
        spaceBetween={10}
        slidesPerView={6}
        pagination={{ clickable: true }}
        className={styles.header__content__container}
        breakpoints={{
          400: {
            width: 450,
            slidesPerView: 1,
          },
          535: {
            width: 460,
            slidesPerView: 2,
          },
          541: {
            width: 480,
            slidesPerView: 2,
          },
          561: {
            width: 500,
            slidesPerView: 2,
          },
          600: {
            width: 550,
            slidesPerView: 2,
          },
          750: {
            width: 630,
            slidesPerView: 2,
          },
          767: {
            width: 630,
            slidesPerView: 3,
          },
        }}
      >
        {recommend.map((movie) => (
          <SwiperSlide className={styles.card} key={movie.id}>
            <Link className={styles.link} to={`/movie/${movie.id}`}>
              <img
                className={styles.card__img}
                src={`${POSTER_PATH}/${movie.poster_path}`}
                alt={movie.title}
              />
              <h2 className={styles.title}>{movie.title}</h2>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </header>
  );
};

export default Header;

// ------------------------------- \\
