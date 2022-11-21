// Button for opening the "Favorites" page \\

import React from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";
import styles from "./FavoritesBtn.module.css";

const FavoritesBtn = () => {
  return (
    <div className={styles.favW}>
      <Link to="/favorites" className={styles.favBtn}>
        <MdFavoriteBorder />
      </Link>
    </div>
  );
};

export default FavoritesBtn;
