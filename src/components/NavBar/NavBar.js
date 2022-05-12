import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { getNavbarData } from "../../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [navbarData, setNavbarData] = useState([]);
  const [mobileNav, setmobileNav] = useState(false);
  useEffect(() => {
    getNavbarData().then((data) => setNavbarData(data));
  }, []);
  return (
    <div className="navbar" id="navbar">
      <ul className="navbar__list" id={mobileNav ? "active" : ""}>
        {navbarData.map((el) => (
          <li className="navbar__list--item" key={el.id}>
            <a
              className="navbar__list--link"
              href={`#${el.attributes.scrollTo}`}
            >
              {el.attributes.navbarList}
              {el.id === 1 || el.id === 3 || el.id === 4 ? (
                <FontAwesomeIcon
                  style={{ marginLeft: "1rem" }}
                  icon={faChevronDown}
                />
              ) : (
                ""
              )}
            </a>
          </li>
        ))}
      </ul>
      <button
        className="navbar__phone--btn"
        onClick={() => setmobileNav(!mobileNav)}
      >
        {/*   <FontAwesomeIcon style={{ marginLeft: "1rem" }} icon={solid("bars")} /> */}
      </button>
    </div>
  );
};

export default NavBar;
