import React, { useState, useEffect } from "react";
import "./People.css";
import { getPeopleData } from "../../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup, faSuitcase } from "@fortawesome/free-solid-svg-icons";

const People = () => {
  const [peopleData, setPeopleData] = useState([]);

  useEffect(() => {
    getPeopleData().then((data) => setPeopleData(data[0].attributes));
  }, []);

  return (
    <section className="people" id="people">
      <div className="people__items">
        {peopleData?.people?.data.map((people) => {
          const { icon, title, description, button } = people.attributes;
          return (
            <div className="people__item" key={people.id}>
              <span
                className="people__item--vector"
                style={{
                  backgroundColor: people.id == 1 ? "#E6692E33" : "#11984B33",
                }}
              >
                {people.id == 1 ? (
                  <FontAwesomeIcon
                    style={{ color: "#E6692E" }}
                    icon={faUserGroup}
                  />
                ) : (
                  <FontAwesomeIcon
                    style={{ color: "#11984B" }}
                    icon={faSuitcase}
                  />
                )}
              </span>
              <h2 className="heading__secondary">{title}</h2>
              <p className="description">{description}</p>
              <button className="btn btn-color-orange">{button}</button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default People;
