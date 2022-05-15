import React from "react";
import Icon from "./Icon";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default {
  title: "Icon",
  component: Icon,
};
export const Icon = () => <Icon variant={faCheck}>Icon</Icon>;
