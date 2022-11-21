// Button for "Back To Top" on Homepage \\

import React, { useEffect, useState } from "react";
import { BsArrow90DegUp } from "react-icons/bs";
import styles from "./Back.module.css";

const Back = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  return (
    <div className={styles.back}>
      {showTopBtn && (
        <a href="#" className={styles.top}>
          <BsArrow90DegUp />
        </a>
      )}
    </div>
  );
};

export default Back;
