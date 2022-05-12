import React, { useEffect, useState } from "react";
import "./Choose.css";
import { getChooseData } from "../../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Choose = () => {
  const [chooseData, setChooseData] = useState([]);

  useEffect(() => {
    getChooseData().then((data) => setChooseData(data[0].attributes));
  }, []);

  return chooseData ? (
    <section className="choose" id="choose">
      <h1 className="heading__primary">{chooseData.title}</h1>
      <p className="description">{chooseData.description}</p>

      <div className="choose__items">
        {chooseData?.chooses?.data.map((chooseItem) => (
          <div className="choose__item" key={chooseItem.id}>
            <span className="choose__tick">
              <FontAwesomeIcon icon={faCheck} />
            </span>
            <h2 className="heading__tertiary">{chooseItem.attributes.title}</h2>
            <p className="text">{chooseItem.attributes.details}</p>
          </div>
        ))}
      </div>
    </section>
  ) : (
    <div></div>
  );
};

export default Choose;
