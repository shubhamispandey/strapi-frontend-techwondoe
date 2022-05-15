import React from "react";
import "./Typography.css";

const Typography = (props) => {
  const { variant = "h1", children, ...rest } = props;
  return (
    <div className={`${variant}`} {...rest}>
      {children}
    </div>
  );
};

export default Typography;
