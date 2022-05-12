import React, { useState, useEffect } from "react";
import "./Career.css";
import { getCareerData } from "../../api";

const Career = () => {
  const [careerData, setCareerData] = useState([]);

  useEffect(() => {
    getCareerData().then((data) => setCareerData(data[0].attributes));
  }, []);

  return (
    <section className="career" id="career">
      <h1 className="heading__primary">{careerData.title}</h1>
      <p className="description">{careerData.description}</p>
      <button className="btn btn-white-orange">{careerData.button}</button>
    </section>
  );
};

export default Career;
