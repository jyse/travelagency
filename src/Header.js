import React from "react";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import "./Header.css";
import AirplanemodActiveIcon from "@material-ui/icons/AirplanemodeActive";
function Header() {
  return (
    <div className="header__wrapper">
      <div className="header__logo">
        <AirplanemodActiveIcon />
      </div>
      <div className="header__companyName">
        <h1>GlobeTrotter</h1>
      </div>
      <div className="header__search">
        <div className="header__searchContainer">
          <SearchOutlined />
          <input placeholder="Search" type="text" />
        </div>
      </div>
      <div className="header__menuItems">
        <a href="/">Accomodations</a>
        <a href="/">Flights</a>
        <a href="/">Car rental</a>
        <a href="/">Deals</a>
        <a href="/">Contact</a>
      </div>
    </div>
  );
}

export default Header;
