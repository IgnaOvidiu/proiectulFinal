// "Search" Icon Button on HomePage for opening Search Movie Modal \\

import React from "react";
import { BiSearch } from "react-icons/bi";
import styles from "./Button.module.css";

const Button = ({ open }) => {
  return (
    <div className={styles.search}>
      <button className={styles.searchBtn} onClick={() => open(true)}>
        <BiSearch />
      </button>
    </div>
  );
};

export default Button;
