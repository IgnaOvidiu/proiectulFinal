import { useEffect, useState } from "react";
import { API_URL } from "./constants";

import Section from "./components/Section/Section";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/Modal";
import Button from "./components/Buttons/Button/Button";
import Back from "./components/Buttons/Back/Back";
import FavoritesBtn from "./components/Buttons/FavoritesBtn/FavoritesBtn";

function App() {
  // Recommended Movies API Call  //

  const [recommended, setRecommended] = useState([]);
  const getRecommended = async () => {
    const response = await fetch(
      `${API_URL}/movie/3/recommendations?api_key=${
        import.meta.env.VITE_API_KEY
      }`
    );
    const responseJson = await response.json();
    setRecommended(responseJson.results);
  };

  useEffect(() => {
    getRecommended();
  }, []);

  // -----------------------------------  //

  // Trending Today API Call  //

  const [trendingD, setTrendingD] = useState([]);
  const getTrendingD = async () => {
    const response = await fetch(
      `${API_URL}/trending/all/day?api_key=${import.meta.env.VITE_API_KEY}`
    );
    const responseJson = await response.json();
    setTrendingD(responseJson.results);
  };

  useEffect(() => {
    getTrendingD();
  }, []);
  // ----------------------------------- //

  // Trending this Week API Call  //

  const [trendingW, setTrendingW] = useState([]);
  const getTrendingW = async () => {
    const response = await fetch(
      `${API_URL}/trending/all/week?api_key=${import.meta.env.VITE_API_KEY}`
    );
    const responseJson = await response.json();
    setTrendingW(responseJson.results);
  };

  useEffect(() => {
    getTrendingW();
  }, []);

  // ----------------------------------- //

  // Action Movies API Call  //

  const [action, setAction] = useState([]);
  const getAction = async () => {
    const response = await fetch(
      `${API_URL}/discover/movie?api_key=${
        import.meta.env.VITE_API_KEY
      }&with_genres=28`
    );
    const responseJson = await response.json();
    setAction(responseJson.results);
  };

  useEffect(() => {
    getAction();
  }, []);

  // ----------------------------------- //

  // Thriller Movies API Call  //

  const [thriller, setThriller] = useState([]);
  const getThriller = async () => {
    const response = await fetch(
      `${API_URL}/discover/movie?api_key=${
        import.meta.env.VITE_API_KEY
      }&with_genres=53`
    );
    const responseJson = await response.json();
    setThriller(responseJson.results);
  };

  useEffect(() => {
    getThriller();
  }, []);

  // ----------------------------------- //

  // Comedy Movies API Call  //

  const [comedy, setComedy] = useState([]);
  const getComedy = async () => {
    const response = await fetch(
      `${API_URL}/discover/movie?api_key=${
        import.meta.env.VITE_API_KEY
      }&with_genres=35`
    );
    const responseJson = await response.json();
    setComedy(responseJson.results);
  };

  useEffect(() => {
    getComedy();
  }, []);

  // ----------------------------------- //

  // Save to Local Storage //
  const [openModal, setOpenModal] = useState(false);

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

  return (
    <>
      <Button open={setOpenModal} />
      {openModal && <Modal closeModal={setOpenModal} />}
      <Header recommend={recommended} />
      <Nav />
      <Back />
      <FavoritesBtn />
      <Section
        action={trendingD}
        title="Trending Today"
        addToFavorites={addFavoriteMovie}
        id="1"
      />
      <Section
        action={trendingW}
        title="Trending This Week"
        addToFavorites={addFavoriteMovie}
        id="2"
      />
      <Section
        action={action}
        title="Action Movies"
        addToFavorites={addFavoriteMovie}
        id="3"
      />
      <Section
        action={thriller}
        title="Thriller Movies"
        addToFavorites={addFavoriteMovie}
        id="4"
      />
      <Section
        action={comedy}
        title="Comedy Movies"
        addToFavorites={addFavoriteMovie}
        id="5"
      />
      <Footer />
    </>
  );
}

export default App;
