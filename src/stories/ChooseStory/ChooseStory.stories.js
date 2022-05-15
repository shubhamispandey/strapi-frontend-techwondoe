import { faCheck } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import ChooseStory from "./ChooseStory";

export default {
  title: "ChooseStory",
  component: ChooseStory,
};

export const ChooseItem = () => (
  <ChooseStory icon={faCheck} title="Title" description="descr" />
);
