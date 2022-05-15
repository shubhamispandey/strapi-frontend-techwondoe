import React, { useState, useEffect } from "react";
import "./People.css";
import { getPeopleData } from "../../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup, faSuitcase } from "@fortawesome/free-solid-svg-icons";

import Button from "../../stories/Button/Button";
import Typography from "../../stories/Typography/Typography";

const People = () => {
  const [peopleData, setPeopleData] = useState([]);

  useEffect(() => {
    getPeopleData().then((data) => setPeopleData(data[0].attributes));
  }, []);

  return (
    <section className="people" id="people">
      <div className="people__items">
        {peopleData?.people?.data.map((people) => {
          const { title, description, button } = people.attributes;
          return (
            <div className="people__item" key={people.id}>
              <span
                className="people__item--vector"
                style={{
                  backgroundColor: people.id === 1 ? "#E6692E33" : "#11984B33",
                }}
              >
                {people.id === 1 ? (
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
              <Typography variant="h2" children={title} />
              <Typography variant="para" children={description} />
              <Button variant="default" children={button} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default People;
