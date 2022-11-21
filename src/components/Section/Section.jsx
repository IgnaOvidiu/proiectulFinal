import React, { useState } from "react";
import { Link } from "react-router-dom";
import { POSTER_PATH } from "../../constants";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { toast, ToastContainer } from "react-toastify";
import styles from "./Section.module.css";
import "animate.css/animate.min.css";
import "react-toastify/dist/ReactToastify.css";

const Section = ({ action, title, addToFavorites, id }) => {
  const [detailsModal, setDetailsModal] = useState([]);
  const [detailsToggle, setToggle] = useState(false);

  const changeDetails = (movieDetails) => {
    setDetailsModal([movieDetails]);
    setToggle(true);
  };

  const both = (item) => {
    addToFavorites(item);
    notify(item);
  };

  const notify = (item) => {
    if (item.title === undefined) {
      toast(`${item.name} Was Added to favorites`, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast(`${item.title} Was Added to favorites`, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <section className="container" id={id}>
      <h1 className={styles.section__title}>{title}</h1>
      <div className={styles.section__content}>
        <>
          {action.map((movie) => (
            <AnimationOnScroll animateIn="animate__zoomIn" key={movie.id}>
              <div className={styles.card} key={movie.id}>
                <img
                  className={styles.card__img}
                  src={`${POSTER_PATH}/${movie.poster_path}`}
                  alt={movie.title}
                />
                <h2 className={styles.title}>
                  {movie.title}
                  {movie.name}
                </h2>
                <div className={styles.card__buttons}>
                  <button
                    className={styles.btn}
                    onClick={() => changeDetails(movie)}
                  >
                    Details
                  </button>
                  <button className={styles.btn} onClick={() => both(movie)}>
                    Add to Favorites
                  </button>
                </div>
              </div>
            </AnimationOnScroll>
          ))}
          <ToastContainer
            position="top-center"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </>
      </div>

      {detailsToggle && (
        <div className={styles.details__modal}>
          <div className={styles.details__background}>
            {detailsModal.map((detail) => {
              return (
                <div key={detail.id}>
                  <div>
                    <button
                      onClick={() => setToggle(false)}
                      className={styles.close}
                    >
                      X
                    </button>
                  </div>
                  <div>
                    <img
                      src={`${POSTER_PATH}/${detail.poster_path}`}
                      alt={detail.title}
                      className={styles.detail__image}
                    />
                    <h3>Released: {detail.release_date}</h3>
                    <h4>
                      Rating: {detail.vote_average} From: {detail.vote_count}{" "}
                      reviews
                    </h4>
                    <div className={styles.details}>
                      <h2>{detail.title}</h2>
                      <p>{detail.overview}</p>
                    </div>
                    <div className={styles.watchBtn}>
                      <Link to={`/movie/${detail.id}`} className={styles.link}>
                        Watch Now
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};

export default Section;
