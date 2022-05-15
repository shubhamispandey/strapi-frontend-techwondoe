import React from "react";
import Typography from "./Typography";

export default {
  title: "Typography",
  component: Typography,
};

export const HeadingPrimary = () => (
  <Typography variant="h1">Secondary</Typography>
);
export const HeadingSecondary = () => (
  <Typography variant="h2">Secondary</Typography>
);
export const HeadingTertiary = () => (
  <Typography variant="h3">Secondary</Typography>
);
export const Para = () => <Typography variant="para">Primary</Typography>;
export const Text = () => <Typography variant="text">Primary</Typography>;
