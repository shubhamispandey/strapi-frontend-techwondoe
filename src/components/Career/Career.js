import React, { useState, useEffect } from "react";
import "./Career.css";
import { getCareerData } from "../../api";

import Button from "../../stories/Button/Button";
import Typography from "../../stories/Typography/Typography";

const Career = () => {
  const [careerData, setCareerData] = useState([]);

  useEffect(() => {
    getCareerData().then((data) => setCareerData(data[0].attributes));
  }, []);

  return (
    <section className="career" id="career">
      <Typography variant="h1" children={careerData.title} />
      <Typography variant="para" children={careerData.description} />
      <Button variant="secondary" children={careerData.button} />
    </section>
  );
};

export default Career;
