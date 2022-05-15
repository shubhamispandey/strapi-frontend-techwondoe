import React from "react";
import "./ChooseStory.css";
import Typography from "../Typography/Typography";
import Icon from "./subStories/Icon/Icon";

const ChooseStory = (props) => {
  const { icon, title, description } = props;
  return (
    <div className="choose__item">
      <Icon variant={icon}></Icon>
      <Typography variant="h3" children={title} />
      <Typography variant="text" children={description} />
    </div>
  );
};

export default ChooseStory;
