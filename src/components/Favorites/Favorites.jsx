// Favorites Page \\

import React, { useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { BsArrow90DegDown } from "react-icons/bs";
import { Link } from "react-router-dom";
import { POSTER_PATH } from "../../constants";
import styles from "./Favorites.module.css";
import "react-toastify/dist/ReactToastify.css";

const Favorites = ({ id }) => {
  const [favorites, setFavorites] = useState([]);
  const [detailsModal, setDetailsModal] = useState([]);
  const [detailsToggle, setToggle] = useState(false);

  const removeFav = (movie) => {
    const list = JSON.parse(localStorage.getItem("favorites"));
    function remove(item) {
      return item.id !== movie.id;
    }

    localStorage.setItem("favorites", JSON.stringify(list.filter(remove)));
    setFavorites(list);
    location.reload();
  };

  const changeDetails = (movieDetails) => {
    setDetailsModal([movieDetails]);
    setToggle(true);
  };

  useEffect(() => {
    const favoriteMovies = JSON.parse(localStorage.getItem("favorites"));
    setFavorites(favoriteMovies);
  }, []);

  return (
    <>
      <div className={styles.backBtn}>
        <Link to="/" className={styles.link}>
          <BsArrow90DegDown className={styles.icon__back} /> Go Back
        </Link>
      </div>
      <section className="container" id={id}>
        <h1 className={styles.section__title}>
          <AiFillHeart className={styles.icon} /> Your Favorites{" "}
          <AiFillHeart className={styles.icon} />{" "}
        </h1>
        <div className={styles.favorites__content}>
          {favorites.map((movie) => (
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
                <button className={styles.btn} onClick={() => removeFav(movie)}>
                  Remove From Favorites
                </button>
              </div>
            </div>
          ))}
        </div>

        {detailsToggle && (
          <div className={styles.details__modal}>
            <div className={styles.details__background}>
              {detailsModal.map((detail) => {
                return (
                  <div>
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
                        <Link
                          to={`/movie/${detail.id}`}
                          className={styles.link}
                        >
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
    </>
  );
};

export default Favorites;
