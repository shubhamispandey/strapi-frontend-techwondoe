import React, { useEffect, useState } from "react";
import "./Choose.css";
import { getChooseData } from "../../api";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Typography from "../../stories/Typography/Typography";
import ChooseStory from "../../stories/ChooseStory/ChooseStory";

const Choose = () => {
  const [chooseData, setChooseData] = useState([]);

  useEffect(() => {
    getChooseData().then((data) => setChooseData(data[0].attributes));
  }, []);

  return chooseData ? (
    <section className="choose" id="choose">
      <Typography variant="h1" children={chooseData.title} />
      <Typography variant="para" children={chooseData.description} />

      <div className="choose__items">
        {chooseData?.chooses?.data.map((chooseItem) => (
          <ChooseStory
            key={chooseItem.id}
            icon={faCheck}
            title={chooseItem.attributes.title}
            description={chooseItem.attributes.details}
          />
        ))}
      </div>
    </section>
  ) : (
    <div></div>
  );
};

export default Choose;
