import React, { useState, useEffect } from "react";
import "./Team.css";
import { getTeamData } from "../../api";

import Button from "../../stories/Button/Button";
import Typography from "../../stories/Typography/Typography";

const Team = () => {
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    getTeamData().then((data) => setTeamData(data[0].attributes));
  }, []);

  return (
    <section className="team" id="team">
      <img
        className="team__vector"
        src={teamData?.vector?.data?.attributes?.url}
        alt=""
      />
      <div className="team__banner">
        <img src={teamData?.teamBanner?.data.attributes.url} alt="" />
      </div>
      <div className="team__desc">
        <span className="team__tag">{teamData.tag}</span>
        <Typography variant="h1" children={teamData.title} />
        <Typography variant="text" children={teamData.description} />
        <Button variant="primary" children={teamData.button} />
      </div>
    </section>
  );
};

export default Team;
