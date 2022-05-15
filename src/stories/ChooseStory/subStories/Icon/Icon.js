import React from "react";
import "./Icon.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = (props) => {
  const { variant } = props;
  return (
    <span className="choose__tick">
      <FontAwesomeIcon icon={variant} />
    </span>
  );
};

export default Icon;
