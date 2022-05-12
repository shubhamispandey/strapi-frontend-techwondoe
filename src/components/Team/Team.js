import React, { useState, useEffect } from "react";
import "./Team.css";
import { getTeamData } from "../../api";

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
        <h1 className="heading__primary">{teamData.title}</h1>
        <p className="text">{teamData.description}</p>
        <button className="btn btn-solid-orange">{teamData.button}</button>
      </div>
    </section>
  );
};

export default Team;
