import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { toast, ToastContainer } from "react-toastify";
import { BsArrow90DegDown } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { API_URL, POSTER_PATH } from "../../constants";
import styles from "./Movie.module.css";
import "react-toastify/dist/ReactToastify.css";

const Movie = () => {
  const { id } = useParams();
  const [detail, setDetails] = useState([]);
  const [video, setVideo] = useState([]);
  const key = 0;

  const getDetails = async () => {
    const response = await fetch(
      `${API_URL}/movie/${id}?api_key=${
        import.meta.env.VITE_API_KEY
      }&append_to_response=videos`
    );
    const responseJson = await response.json();
    setDetails(responseJson);
    if (responseJson.videos.results[0] === undefined) {
      setVideo([key]);
    } else {
      setVideo(responseJson.videos.results[0]);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  const [movies, setMovies] = useState([]);
  const searchMovie = async () => {
    const url = `${API_URL}/movie/${id}/similar?api_key=${
      import.meta.env.VITE_API_KEY
    }`;
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
  };

  useEffect(() => {
    searchMovie();
  }, []);

  useEffect(() => {}, []);
  const options = {
    playerVars: {
      showinfo: 0,
      rel: 0,
    },
  };

  const saveToLocalStorage = (items) => {
    localStorage.setItem("favorites", JSON.stringify(items));
  };

  var retrievedObject = localStorage.getItem("favorites");
  const [stored, setStored] = useState(JSON.parse(retrievedObject));

  const addFavoriteMovie = (movie) => {
    const newFavoriteList = [...stored, movie];
    setStored(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  };

  const both = (item) => {
    addFavoriteMovie(item);
    notify();
  };

  const notify = () =>
    toast("Added to favorites", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  if (movies === undefined) {
    return (
      <>
        <div className={styles.backBtn}>
          <Link to="/" className={styles.link}>
            <BsArrow90DegDown className={styles.icon__back} /> Go Back
          </Link>
        </div>
        <Link to="/favorites" className={styles.favBtn}>
          <MdFavoriteBorder />
        </Link>

        <div className="container">
          <div className={styles.data}>
            <h1>No Data Available</h1>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className={styles.backBtn}>
          <Link to="/" className={styles.link}>
            <BsArrow90DegDown className={styles.icon__back} /> Go Back
          </Link>
        </div>
        <Link to="/favorites" className={styles.favBtn}>
          <MdFavoriteBorder />
        </Link>
        <div className="container">
          <div className={styles.details__content}>
            <div className={styles.details} key={detail.id}>
              <div>
                <img
                  className={styles.details__image}
                  src={`${POSTER_PATH}/${detail.poster_path}`}
                  alt={detail.title}
                />
              </div>
              <div className={styles.right}>
                <div className={styles.name}>
                  <h2 className={styles.title}>{detail.title}</h2>
                  <button className={styles.btn} onClick={() => both(detail)}>
                    Add to Favorites
                  </button>
                </div>

                <p className={styles.overview}>{detail.overview}</p>
                <div className={styles.player}></div>
                <YouTube videoId={`${video.key}`} opts={options} key={9} />
              </div>
              <hr></hr>
            </div>
          </div>
          <div className={styles.section__title}>
            <h2>Similar Movies</h2>
          </div>
          <div className={styles.similar}>
            {movies.map((movie) => (
              <Link
                to={`/movie/${movie.id}`}
                className={styles.card}
                key={movie.id}
                onClick={() => window.reload()}
              >
                <img
                  className={styles.similar__img}
                  src={`${POSTER_PATH}/${movie.poster_path}`}
                  alt={movie.title}
                />
                <h2>{movie.title}</h2>
              </Link>
            ))}
          </div>
        </div>
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
    );
  }
};

export default Movie;
