import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";

import {
  BsCalendarDay,
  BsCalendarWeek,
  BsLightningCharge,
} from "react-icons/bs";

import { GiSuspicious } from "react-icons/gi";
import { MdOutlineTheaterComedy } from "react-icons/md";
import "./Nav.css";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#1"
        onClick={() => setActiveNav("#trendingDay")}
        className={activeNav === "#trendingDay" ? "active" : ""}
      >
        <BsCalendarDay />
      </a>
      <a
        href="#2"
        onClick={() => setActiveNav("#trendingWeek")}
        className={activeNav === "#trendingWeek" ? "active" : ""}
      >
        <BsCalendarWeek />
      </a>
      <a
        href="#3"
        onClick={() => setActiveNav("#action")}
        className={activeNav === "#action" ? "active" : ""}
      >
        <BsLightningCharge />
      </a>
      <a
        href="#4"
        onClick={() => setActiveNav("#thriller")}
        className={activeNav === "#thriller" ? "active" : ""}
      >
        <GiSuspicious />
      </a>
      <a
        href="#5"
        onClick={() => setActiveNav("#comedy")}
        className={activeNav === "#comedy" ? "active" : ""}
      >
        <MdOutlineTheaterComedy />
      </a>
    </nav>
  );
};

export default Nav;
