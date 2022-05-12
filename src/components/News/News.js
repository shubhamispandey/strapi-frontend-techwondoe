import React, { useState, useEffect } from "react";
import "./News.css";
import { getNewsSectionData, getNewsData } from "../../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const News = () => {
  const [newsData, setNewsData] = useState([]);
  const [newsSectionData, setNewsSectionData] = useState([]);

  useEffect(() => {
    getNewsSectionData().then((data) => setNewsSectionData(data[0].attributes));
    getNewsData().then((data) => setNewsData(data));
  }, []);

  return (
    <section className="news" id="news">
      <div className="news__header">
        <h1 className="heading__primary">{newsSectionData.title}</h1>
        <button className="btn btn-solid-orange">
          {newsSectionData.button}
        </button>
      </div>
      <div className="news__items">
        {newsData?.map((news) => {
          const { author, date, button, title } = news.attributes;
          return (
            <div className="news__item" key={news.id}>
              <div className="news__item--banner">
                <img
                  src={news.attributes.newsBanner.data.attributes.url}
                  alt=""
                />
              </div>
              <span className="news__item--detail">{`by ${author} | ${date}`}</span>
              <h2 className="heading__tertiary">{title}</h2>
              <button className="btn btn-color-orange">
                {button}
                <FontAwesomeIcon
                  style={{ marginLeft: "1rem" }}
                  icon={faArrowRight}
                />
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default News;
