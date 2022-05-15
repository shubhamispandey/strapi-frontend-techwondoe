import React, { useEffect, useState } from "react";
import "./Header.css";
import { getHeaderData } from "../../api";

const Header = () => {
  const [headerData, setHeaderData] = useState([]);

  useEffect(() => {
    getHeaderData().then((data) => setHeaderData(data[0].attributes));
  }, []);

  return (
    <div className="header" id="header">
      <img
        className="header__banner"
        src={headerData?.Banner?.data?.attributes?.url}
      />
      <img
        className="header__vector"
        src={headerData?.vector?.data?.attributes?.url}
      />
      <h1 className="heading__primary header__title">Take the leap with us</h1>
    </div>
  );
};

export default Header;
