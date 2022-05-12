import React, { useState, useEffect } from "react";
import "./Footer.css";
import { getFooterData } from "../../api";

const Footer = () => {
  const [footerData, setFooterData] = useState([]);

  useEffect(() => {
    getFooterData().then((data) =>
      setFooterData(data[0].attributes.social.data)
    );
  }, []);
  return (
    <section className="footer" id="footer">
      <div className="footer__icons">
        <ul>
          {footerData?.map((el) => (
            <li key={el.id}>
              <a href="#">
                <img src={el.attributes.url} alt="" />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer__menu">
        <ul className="footer__link">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Candidates</a>
          </li>
        </ul>
        <ul className="footer__link">
          <li>
            <a href="">Employers</a>
          </li>
          <li>
            <a href="">Latest News</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
        <ul className="footer__link">
          <li>
            <a href="">+62 (0) 9 124 5470</a>
          </li>
          <li>
            <a href="">careers@namespace.com</a>
          </li>
        </ul>
        <ul className="footer__link">
          <p>Level 3 79 High Street Melbourne CBD 1010</p>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
