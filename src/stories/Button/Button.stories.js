import React from "react";
import Button from "./Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => ({
  //👇 Your template goes here
});

// export const Primary = Template.bind({});
// Primary.args = {
//   variant: "primary",
// };
export const Primary = () => <Button>Primary</Button>;
// export const Secondary = () => <Button variant="secondary">Secondary</Button>;
// export const Default = () => <Button variant="default">Default</Button>;
