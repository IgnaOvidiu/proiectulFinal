// Search Movie Modal \\

import React, { useState } from "react";
import { Form, Link } from "react-router-dom";
import { API_URL, POSTER_PATH } from "../../constants";
import styles from "./Modal.module.css";

const Modal = ({ closeModal }) => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const searchMovie = async (e) => {
    e.preventDefault();

    const res = await fetch(
      `${API_URL}/search/movie?api_key=${
        import.meta.env.VITE_API_KEY
      }&query=${query}`
    );
    const data = await res.json();
    setMovies(data.results);
  };

  const changeHandler = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  return (
    <div className={styles.modal}>
      <button onClick={() => closeModal(false)} className={styles.closeBtn}>
        X
      </button>

      <div className={styles.background}>
        <Form
          className={styles.input__group}
          onSubmit={searchMovie}
          autoComplete="off"
        >
          <input
            type="search"
            className={styles.search}
            placeholder="Movie name"
            aria-label="search"
            value={query}
            onChange={changeHandler}
          />
        </Form>
        <div className={styles.movie}>
          {movies.map((movie) => (
            <div className={styles.searchCard} key={movie.id}>
              <img
                src={`${POSTER_PATH}/${movie.poster_path}`}
                alt={movie.title}
                className={styles.searchCard__img}
              />
              <h2>{movie.title}</h2>
              <Link to={`/movie/${movie.id}`} className={styles.watchBtn}>
                Watch Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;

// --------------------------  \\
